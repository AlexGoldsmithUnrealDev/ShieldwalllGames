/* global React */
const { useRef: useRefPP, useState: useStatePP, useEffect: useEffectPP, useLayoutEffect: useLayoutEffectPP } = React;

/*
 * PinchPanCanvas
 *
 * Mobile-first pan + pinch-zoom container. Wraps an arbitrary fixed-size
 * inner element (typically an <svg> of contentWidth × contentHeight) and
 * applies a CSS transform to it based on touch/mouse gestures.
 *
 *   1 pointer  → pan
 *   2 pointers → pinch (zoom centered on the midpoint between fingers)
 *   wheel      → zoom (centered on the cursor) for desktop testing
 *
 * On mount the canvas auto-fits the content to the visible viewport (or
 * uses initialScale if provided). Floating bottom-right controls expose
 * zoom-in / zoom-out / fit-to-view buttons plus a live zoom readout.
 *
 * Why pointer events: unified touch + mouse path, pointerCapture lets us
 * track pointers across the iOS frame's nested scroll areas, and we can
 * keep `touch-action: none` on just the canvas surface so browsers don't
 * try to scroll the page while a pinch is in progress.
 */
function PinchPanCanvas({
  contentWidth, contentHeight,
  minScale = 0.4, maxScale = 5,
  initialScale,            // override auto-fit if provided
  initialFocus,            // {x, y, scale} — center this world-point on mount
  controls = true,         // show floating zoom controls
  className = "",
  style = {},
  children,
}) {
  const containerRef = useRefPP(null);
  const innerRef = useRefPP(null);
  const xformRef = useRefPP({ s: 1, tx: 0, ty: 0 });
  const [, force]  = useStatePP(0);
  const tick = () => force(n => (n + 1) % 1_000_000);
  const pointersRef = useRefPP(new Map());
  const pinchRef = useRefPP(null);

  // Push transform straight to the DOM. Avoids React re-renders 60 times a
  // second during a drag — only the readout/controls trigger a re-render.
  function applyXform() {
    if (!innerRef.current) return;
    const { s, tx, ty } = xformRef.current;
    innerRef.current.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
  }

  function setXform(next, andTick = false) {
    xformRef.current = { ...xformRef.current, ...next };
    applyXform();
    if (andTick) tick();
  }

  function fit() {
    const c = containerRef.current;
    if (!c) return;
    const r = c.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    const pad = 24;
    const sX = (r.width  - pad * 2) / contentWidth;
    const sY = (r.height - pad * 2) / contentHeight;
    const s  = Math.max(minScale, Math.min(maxScale, Math.min(sX, sY)));
    const tx = (r.width  - contentWidth  * s) / 2;
    const ty = (r.height - contentHeight * s) / 2;
    setXform({ s, tx, ty }, true);
  }

  // Auto-fit (or honour initialFocus / initialScale) once container is sized.
  useLayoutEffectPP(() => {
    const c = containerRef.current;
    if (!c) return;
    const r = c.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) { fit(); return; }
    if (initialFocus) {
      const s = initialFocus.scale ?? 1;
      setXform({
        s,
        tx: r.width  / 2 - initialFocus.x * s,
        ty: r.height / 2 - initialFocus.y * s,
      }, true);
    } else if (initialScale != null) {
      const s = initialScale;
      setXform({
        s,
        tx: (r.width  - contentWidth  * s) / 2,
        ty: (r.height - contentHeight * s) / 2,
      }, true);
    } else {
      fit();
    }
    // ResizeObserver so the canvas re-fits if the viewport shifts (rotate,
    // a sibling collapsing, the design canvas zooming).
    if (!containerRef.current) return;
    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        // Only re-fit if we haven't been interacted with — preserves zoom
        // state on resize after the user has explored.
        // (Simple heuristic: bypass; let the user hit the fit button.)
      });
      ro.observe(containerRef.current);
    }
    return () => { if (ro) ro.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function pointFromEvent(e) {
    const r = containerRef.current.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function onPointerDown(e) {
    e.currentTarget.setPointerCapture(e.pointerId);
    pointersRef.current.set(e.pointerId, pointFromEvent(e));
    if (pointersRef.current.size === 2) {
      const pts = [...pointersRef.current.values()];
      const dx = pts[1].x - pts[0].x;
      const dy = pts[1].y - pts[0].y;
      const cx = (pts[0].x + pts[1].x) / 2;
      const cy = (pts[0].y + pts[1].y) / 2;
      pinchRef.current = {
        dist: Math.hypot(dx, dy),
        cx, cy,
        ...xformRef.current,
      };
    }
  }

  function onPointerMove(e) {
    if (!pointersRef.current.has(e.pointerId)) return;
    const prev = pointersRef.current.get(e.pointerId);
    const cur  = pointFromEvent(e);
    pointersRef.current.set(e.pointerId, cur);

    if (pointersRef.current.size === 1) {
      // Pan — translate by raw pixel delta
      setXform({
        tx: xformRef.current.tx + (cur.x - prev.x),
        ty: xformRef.current.ty + (cur.y - prev.y),
      });
    } else if (pointersRef.current.size === 2 && pinchRef.current) {
      const pts = [...pointersRef.current.values()];
      const dx = pts[1].x - pts[0].x;
      const dy = pts[1].y - pts[0].y;
      const dist = Math.hypot(dx, dy);
      const cx = (pts[0].x + pts[1].x) / 2;
      const cy = (pts[0].y + pts[1].y) / 2;
      const p = pinchRef.current;
      const ratio = dist / p.dist;
      const targetS = Math.max(minScale, Math.min(maxScale, p.s * ratio));
      // World-space point under the pinch midpoint at gesture start:
      const wx = (p.cx - p.tx) / p.s;
      const wy = (p.cy - p.ty) / p.s;
      // Re-anchor: keep that world point under the CURRENT midpoint:
      const tx = cx - wx * targetS;
      const ty = cy - wy * targetS;
      setXform({ s: targetS, tx, ty }, true);
    }
  }

  function onPointerUp(e) {
    pointersRef.current.delete(e.pointerId);
    if (pointersRef.current.size < 2) pinchRef.current = null;
  }

  function onWheel(e) {
    e.preventDefault();
    const pt = pointFromEvent(e);
    const factor = e.deltaY < 0 ? 1.12 : 0.89;
    const { s, tx, ty } = xformRef.current;
    const newS = Math.max(minScale, Math.min(maxScale, s * factor));
    const wx = (pt.x - tx) / s;
    const wy = (pt.y - ty) / s;
    setXform({
      s: newS,
      tx: pt.x - wx * newS,
      ty: pt.y - wy * newS,
    }, true);
  }

  function zoomBy(factor) {
    const c = containerRef.current; if (!c) return;
    const r = c.getBoundingClientRect();
    const cx = r.width / 2, cy = r.height / 2;
    const { s, tx, ty } = xformRef.current;
    const newS = Math.max(minScale, Math.min(maxScale, s * factor));
    const wx = (cx - tx) / s;
    const wy = (cy - ty) / s;
    setXform({
      s: newS,
      tx: cx - wx * newS,
      ty: cy - wy * newS,
    }, true);
  }

  return (
    <div
      ref={containerRef}
      className={"mm-canvas " + className}
      style={style}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onWheel={onWheel}
    >
      <div
        ref={innerRef}
        className="mm-canvas-inner"
        style={{
          width: contentWidth, height: contentHeight,
          transformOrigin: "0 0",
          willChange: "transform",
        }}
      >
        {children}
      </div>
      {controls && (
        <div className="mm-canvas-controls">
          <button onClick={() => zoomBy(1.3)} aria-label="Zoom in">+</button>
          <button onClick={() => zoomBy(1 / 1.3)} aria-label="Zoom out">−</button>
          <button onClick={fit} aria-label="Fit">⊡</button>
          <div className="mm-canvas-zoom">{Math.round(xformRef.current.s * 100)}%</div>
        </div>
      )}
      <div className="mm-canvas-hint">pinch · drag · ⊡ to fit</div>
    </div>
  );
}

window.PinchPanCanvas = PinchPanCanvas;
