/* global React */
// The well scene: back wall · god-ray · mist + embers (canvas) · front wall · rim shimmer.
// Particles are sandwiched between the two well halves so the front facade
// naturally masks the lower edge — mist appears to rise FROM inside.

const { useRef, useEffect, useMemo } = React;

// Pre-rendered soft brush — much faster than rebuilding a radial gradient per particle.
function makeBrush(size, r, g, b, peakA) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const grad = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
  grad.addColorStop(0,   `rgba(${r},${g},${b},${peakA})`);
  grad.addColorStop(0.4, `rgba(${r},${g},${b},${peakA * 0.32})`);
  grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return c;
}

// Convert hue (0-60 in our app) into a warm RGB for embers / mist tint
function hueRGB(h, sat) {
  // Approximate warm palette: 0=red, 30=gold, 60=green-gold
  const t = Math.max(0, Math.min(1, h / 60));
  const r = Math.round(255 * (1 - 0.05 * t));
  const g = Math.round(155 + 90 * t);
  const b = Math.round(100 + 40 * t);
  return { r, g, b };
}

// Runic codepoints used by the drifting rune particles
const RUNE_CODEPOINTS = [
  0x16A0, 0x16A2, 0x16A6, 0x16A8, 0x16B1, 0x16B7,
  0x16BE, 0x16C1, 0x16C7, 0x16CF, 0x16D2, 0x16DA,
  0x16B3, 0x16AB, 0x16C3, 0x16D7,
];

function WellScene({
  hue = 28,
  mistDensity = 1.0,
  emberDensity = 1.0,
  godrayBrightness = 1.0,
  intensity = 1.0,      // audio level (0..~1.5)
  thinking = false,     // surge mist + runes
  speaking = false,     // surge embers + slower runes timed with text
  parallax = { x: 0, y: 0 },
}) {
  const canvasRef = useRef(null);
  const rafRef    = useRef(0);
  const stateRef  = useRef({
    mist: [], embers: [], runes: [],
    lastMist: 0, lastEmber: 0, lastRune: 0,
    started: performance.now(),
  });
  const propsRef  = useRef({ mistDensity, emberDensity, intensity, thinking, speaking });
  propsRef.current = { mistDensity, emberDensity, intensity, thinking, speaking };

  // Brushes — recolored when hue changes.
  const brushes = useMemo(() => {
    const warm = hueRGB(hue);
    return {
      mist:  makeBrush(128, 245, 240, 230, 0.65),
      ember: makeBrush(48,  warm.r, warm.g, warm.b, 0.95),
      emberRGB: warm,
    };
  }, [hue]);

  useEffect(() => {
    // Pre-load the runic font for canvas rendering — canvas fillText
    // does not wait for fonts the way DOM text does.
    if (document.fonts && document.fonts.load) {
      document.fonts.load('32px "Noto Sans Runic"').catch(() => {});
    }
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let alive = true;

    function resize() {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = Math.max(1, Math.round(r.width  * dpr));
      canvas.height = Math.max(1, Math.round(r.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Rim emission band — well image is 1109×1418, rim sits ~y=620 → 0.44 of height.
    // Container has same aspect, so we use ratios.
    const RIM_Y    = 0.46;
    const RIM_SPAN = 0.16;       // narrow band — keeps mist over the well, not the empty stage
    const MIST_CAP = 60;         // hard ceiling on live mist particles

    function emitMist(w, h, dt) {
      if (stateRef.current.mist.length >= MIST_CAP) return;
      const p = propsRef.current;
      // Thinking surges mist 3×, speaking 1.6×. Audio level adds a little.
      const surge = p.thinking ? 3.0 : (p.speaking ? 1.6 : 1.0);
      const rate = 10 * p.mistDensity * surge * (0.85 + p.intensity * 0.3);
      stateRef.current.lastMist += rate * dt;
      const n = Math.min(
        Math.floor(stateRef.current.lastMist),
        MIST_CAP - stateRef.current.mist.length
      );
      stateRef.current.lastMist -= n;
      for (let i = 0; i < n; i++) {
        const cx = w * 0.5;
        const offset = (Math.random() - 0.5) * 2 * RIM_SPAN * w * (0.3 + Math.random() * 0.7);
        stateRef.current.mist.push({
          x: cx + offset,
          y: RIM_Y * h + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 4,
          vy: -(6 + Math.random() * 12),
          life: 0,
          maxLife: 5 + Math.random() * 3,
          size: 38 + Math.random() * 60,
          phase: Math.random() * Math.PI * 2,
          seed: Math.random(),
        });
      }
    }

    function emitEmbers(w, h, dt) {
      const p = propsRef.current;
      // Speaking surges embers 4× — the "voice" of the well. Thinking 1.8×.
      const surge = p.speaking ? 4.0 : (p.thinking ? 1.8 : 1.0);
      const rate = 3 * p.emberDensity * surge * (0.8 + p.intensity * 0.4);
      stateRef.current.lastEmber += rate * dt;
      const n = Math.floor(stateRef.current.lastEmber);
      stateRef.current.lastEmber -= n;
      for (let i = 0; i < n; i++) {
        const cx = w * 0.5;
        const offset = (Math.random() - 0.5) * 2 * RIM_SPAN * w * 0.7;
        stateRef.current.embers.push({
          x: cx + offset,
          y: RIM_Y * h + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 14,
          vy: -(40 + Math.random() * 50),
          life: 0,
          maxLife: 1.4 + Math.random() * 1.6,
          size: 1.5 + Math.random() * 2.2,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    }

    function emitRunes(w, h, dt) {
      const p = propsRef.current;
      // Runes only when Mimir is thinking or speaking.
      if (!p.thinking && !p.speaking) return;
      // Thinking: ~2.25 runes/sec (+50%). Speaking: ~1.05 runes/sec.
      const rate = p.thinking ? 2.25 : 1.05;
      stateRef.current.lastRune += rate * dt;
      const n = Math.floor(stateRef.current.lastRune);
      stateRef.current.lastRune -= n;
      for (let i = 0; i < n; i++) {
        const cx = w * 0.5;
        const offset = (Math.random() - 0.5) * 2 * RIM_SPAN * w * 0.9;
        // Longer lifespan when thinking so runes climb the empty space above
        // the well; size shrunk 25% (was 18-32 → 13.5-24).
        const longLife = p.thinking;
        stateRef.current.runes.push({
          glyph: String.fromCodePoint(
            RUNE_CODEPOINTS[Math.floor(Math.random() * RUNE_CODEPOINTS.length)]
          ),
          x: cx + offset,
          y: RIM_Y * h + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 4,
          vy: -(48 + Math.random() * 24),
          life: 0,
          maxLife: longLife ? (8 + Math.random() * 4) : (4 + Math.random() * 2),
          size: 13.5 + Math.random() * 10.5,
          rot: (Math.random() - 0.5) * 0.4,
          rotV: (Math.random() - 0.5) * 0.5,
          seed: Math.random(),
        });
      }
    }

    let last = performance.now();
    function frame(now) {
      if (!alive) return;
      window.__wellTick = (window.__wellTick || 0) + 1;
      const dtMs = Math.min(64, now - last);
      const dt = dtMs / 1000;
      last = now;
      const t  = (now - stateRef.current.started) / 1000;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width, h = rect.height;
      if (w < 4 || h < 4) { rafRef.current = requestAnimationFrame(frame); return; }
      ctx.clearRect(0, 0, w, h);

      // ============ MIST PASS ============
      emitMist(w, h, dt, t);
      const mist = stateRef.current.mist;
      ctx.globalCompositeOperation = 'screen';
      for (let i = mist.length - 1; i >= 0; i--) {
        const p = mist[i];
        p.life += dt;
        if (p.life >= p.maxLife) { mist.splice(i, 1); continue; }
        // Curl-noise–ish horizontal sway
        const sway = Math.sin(t * 0.5 + p.phase + p.y * 0.01) * 6
                   + Math.sin(t * 1.3 + p.seed * 10) * 2;
        p.x += (p.vx + sway) * dt;
        p.y += p.vy * dt;
        // Mist accelerates upward slightly then decays
        p.vy *= 0.995;
        p.size += 18 * dt; // expand as it rises
        // Fade in fast, out slow
        const u = p.life / p.maxLife;
        const fadeIn  = Math.min(1, p.life / 0.8);
        const fadeOut = 1 - Math.pow(u, 2.2);
        // Fade more aggressively as the particle drifts toward the canvas edges
        const edgeFade = 1
          - Math.min(1, Math.pow(Math.abs(p.x - w * 0.5) / (w * 0.5), 2));
        const alpha = fadeIn * fadeOut * edgeFade * 0.14; // dialed way back
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx.drawImage(brushes.mist, p.x - p.size, p.y - p.size, p.size * 2, p.size * 2);
      }

      // ============ RUNE PASS ============
      emitRunes(w, h, dt);
      const runes = stateRef.current.runes;
      ctx.globalCompositeOperation = 'lighter';
      const er = brushes.emberRGB;
      const runeFill = `rgb(${Math.min(255, er.r + 10)},${Math.min(255, er.g + 30)},${Math.min(255, er.b + 10)})`;
      ctx.font = `400 32px "Noto Sans Runic", "Source Serif 4", serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = runes.length - 1; i >= 0; i--) {
        const p = runes[i];
        p.life += dt;
        if (p.life >= p.maxLife) { runes.splice(i, 1); continue; }
        const sway = Math.sin(t * 0.7 + p.seed * 6) * 8;
        p.x += (p.vx + sway * 0.2) * dt;
        p.y += p.vy * dt;
        // Very light damping so runes keep rising through the full height
        p.vy *= 0.998;
        p.rot += p.rotV * dt;
        const u = p.life / p.maxLife;
        const fadeIn  = Math.min(1, p.life / 0.8);
        const fadeOut = 1 - Math.pow(u, 1.4);
        const edgeFade = 1 - Math.min(1, Math.pow(Math.abs(p.x - w * 0.5) / (w * 0.5), 2));
        const a = fadeIn * fadeOut * edgeFade;
        ctx.globalAlpha = Math.max(0, Math.min(1, a * 0.85));
        ctx.fillStyle = runeFill;
        ctx.shadowColor = `rgb(${er.r},${er.g},${er.b})`;
        ctx.shadowBlur = 18 * a;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        const scale = p.size / 32;
        ctx.scale(scale, scale);
        ctx.fillText(p.glyph, 0, 0);
        ctx.restore();
      }
      ctx.shadowBlur = 0;

      // ============ EMBER PASS ============
      emitEmbers(w, h, dt);
      const embers = stateRef.current.embers;
      ctx.globalCompositeOperation = 'lighter';
      for (let i = embers.length - 1; i >= 0; i--) {
        const p = embers[i];
        p.life += dt;
        if (p.life >= p.maxLife) { embers.splice(i, 1); continue; }
        p.x += (p.vx + Math.sin(t * 3 + p.twinkle) * 6) * dt;
        p.y += p.vy * dt;
        p.vy *= 0.985;
        const u = p.life / p.maxLife;
        const fadeIn  = Math.min(1, p.life / 0.15);
        const fadeOut = 1 - Math.pow(u, 1.6);
        const twinkle = 0.7 + 0.3 * Math.sin(t * 8 + p.twinkle);
        ctx.globalAlpha = Math.max(0, Math.min(1, fadeIn * fadeOut * twinkle));
        const halo = p.size * 8; // brush radius around hot core
        ctx.drawImage(brushes.ember, p.x - halo, p.y - halo, halo * 2, halo * 2);
        // hot core dot
        ctx.globalAlpha = Math.max(0, Math.min(1, fadeIn * fadeOut));
        const er = brushes.emberRGB;
        ctx.fillStyle = `rgb(${Math.min(255, er.r + 30)},${Math.min(255, er.g + 50)},${Math.min(255, er.b + 30)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      rafRef.current = requestAnimationFrame(frame);
    }
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      alive = false;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [brushes, hue]);

  // Background sky tint matched to hue
  const sceneStyle = useMemo(() => ({
    "--well-hue": hue,
    "--well-godray-a": (0.55 * godrayBrightness).toFixed(3),
  }), [hue, godrayBrightness]);

  const px = parallax.x * 6;
  const py = parallax.y * 4;

  return (
    <div
      className={
        "well-scene"
        + (thinking ? " is-thinking" : "")
        + (speaking ? " is-speaking" : "")
      }
      style={{
        ...sceneStyle,
        transform: `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`
      }}
    >
      <div className="well-sky" />
      <img className="well-layer well-layer-back" src="../../assets/logos/mimir-well-back.png" alt="" />
      <div className="well-godray" />
      <div className="well-godray well-godray-soft" />
      <canvas className="well-canvas" ref={canvasRef} />
      <div className="well-rim-shimmer" />
      <img className="well-layer well-layer-front" src="../../assets/logos/mimir-well-front.png" alt="The well of Mimir" />
    </div>
  );
}

window.WellScene = WellScene;
