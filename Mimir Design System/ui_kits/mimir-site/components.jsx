/* global React */

function Nav() {
  return (
    <nav className="ms-nav">
      <div className="ms-wrap ms-nav-inner">
        <a className="ms-nav-brand" href="#">
          <img src="../../assets/logos/mimir-mark.png" alt=""/>
          <span className="ms-nav-brand-word">Mimir</span>
        </a>
        <div className="ms-nav-links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
          <a href="#changelog">Changelog</a>
        </div>
        <span className="ms-nav-spacer"/>
        <div className="ms-nav-cta">
          <a className="ms-btn-ghost" href="#">Sign in</a>
          <a className="ms-btn-primary" href="#">Download</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="ms-hero">
      <div className="ms-hero-bg" style={{ backgroundImage: "url('../../assets/plates/avalon.png')" }}/>
      <div className="ms-hero-fade"/>
      <div className="ms-wrap ms-hero-inner">
        <div className="ms-hero-copy">
          <div className="ms-hero-eyebrow">Mimir · v1.4 · for desktop</div>
          <h1 className="ms-hero-title">
            A library for the world<br/>you're building.
            <em>Owned by you. Read by your AI. Bound to your engine.</em>
          </h1>
          <p className="ms-hero-sub">
            Mimir keeps every character, faction, place, and event of your
            world in one structured library of plain markdown files. Your
            lore stops drifting away from your game.
          </p>
          <div className="ms-hero-cta">
            <a className="ms-btn-primary" href="#">Download for macOS</a>
            <a className="ms-btn-secondary" href="#">Watch the 90-second tour</a>
          </div>
          <div className="ms-hero-meta">
            <div><strong>v1.4.2</strong>local-first · offline</div>
            <div><strong>macOS · Windows · Linux</strong>Electron · 64-bit</div>
            <div><strong>Free tier</strong>bring your own API key</div>
          </div>
        </div>
        <div className="ms-hero-plate">
          <img src="../../assets/characters/spearmaiden.png" alt=""/>
          <div className="ms-hero-plate-cap">
            'Sigrun Ulfsdottir' — character entry from the Shieldwall Saga library
          </div>
        </div>
      </div>
    </header>
  );
}

function Features() {
  const items = [
    { icon: "../../assets/icons/character.png", title: "Structured entries", body: "Characters, factions, places, events, items, languages — and your own custom types. Every entry is a plain markdown file with consistent fields your AI can read reliably." },
    { icon: "../../assets/icons/faction.png", title: "Relational linking", body: "Reference any entry by ID. Rename a character once, watch every mention update across the world. The more you link, the smarter Ask Mimir gets." },
    { icon: "../../assets/icons/event.png", title: "Timeline & family trees", body: "Visualise centuries of in-world history and multi-generational character relationships. Your worldbuilding stops living in scattered docs." },
    { icon: "../../assets/icons/dialogue.png", title: "Ask Mimir", body: "An AI that knows your world, not the open internet. Find inconsistencies, write dialogue in character, draft new entries — all grounded in your library." },
    { icon: "../../assets/icons/spell.png", title: "Game engine integration", body: "Export the same lore that lives in your design doc straight into Unreal, Unity, or Godot. The runtime game and the writing room share one source of truth." },
    { icon: "../../assets/icons/runemark.png", title: "Bring your own AI", body: "Drop the markdown library straight into Claude Projects, Cursor, ChatGPT — or use the managed AI on a paid tier. The files belong to you, not us." },
  ];
  return (
    <section className="ms-section ms-wrap" id="features">
      <div className="ms-section-head">
        <span className="ms-eyebrow">Chapter ii — what's in the well</span>
        <h2 className="ms-section-h2">Everything that <em>matters</em> in your world. Linked.</h2>
        <p className="ms-section-sub">
          Most worldbuilders today scatter their lore across Word docs, wikis,
          Notion pages, and engine-specific data files. Mimir keeps it in one
          place — owned by you, queryable by your tools.
        </p>
      </div>
      <div className="ms-features">
        {items.map(it => (
          <div key={it.title} className="ms-feature">
            <div className="ms-feat-icon"><img src={it.icon} alt=""/></div>
            <h3 className="ms-feat-title">{it.title}</h3>
            <p className="ms-feat-body">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="ms-section ms-wrap" id="how">
      <div className="ms-how">
        <div className="ms-how-plate"><img src="../../assets/plates/kernow.png" alt=""/></div>
        <div>
          <span className="ms-eyebrow">Chapter iii — how it works</span>
          <h2 className="ms-section-h2">Four steps to a <em>living</em> world.</h2>
          <ol className="ms-how-list">
            <li className="ms-how-step">
              <div className="ms-how-num">i</div>
              <div>
                <h4>Pick a folder.</h4>
                <p>Mimir reads from a folder you choose. No proprietary database, no upload step. Your world lives on your machine.</p>
              </div>
            </li>
            <li className="ms-how-step">
              <div className="ms-how-num">ii</div>
              <div>
                <h4>Write entries.</h4>
                <p>Use the structured editor or write markdown directly. Either way, the same plain files end up on disk.</p>
              </div>
            </li>
            <li className="ms-how-step">
              <div className="ms-how-num">iii</div>
              <div>
                <h4>Link everything.</h4>
                <p>Reference a character, a faction, a place. The links light up the timeline, the family tree, and Ask Mimir.</p>
              </div>
            </li>
            <li className="ms-how-step">
              <div className="ms-how-num">iv</div>
              <div>
                <h4>Ship to your engine.</h4>
                <p>Export to Unreal, Unity, or Godot. Or point Claude Projects, Cursor, or ChatGPT at the folder. Your tools learn your world.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="ms-section ms-wrap" id="pricing">
      <div className="ms-section-head">
        <span className="ms-eyebrow">Chapter iv — the offering</span>
        <h2 className="ms-section-h2">Honest pricing. Your <em>files</em> stay yours.</h2>
        <p className="ms-section-sub">
          Mimir is local-first; you can use it forever offline with your own
          API key. Paid tiers add managed AI, sync, and team libraries.
        </p>
      </div>
      <div className="ms-pricing-grid">
        <div className="ms-tier">
          <h3 className="ms-tier-name">Solo</h3>
          <p className="ms-tier-tag">Free, forever. Bring your own API key.</p>
          <div className="ms-tier-price">£0<small> / forever</small></div>
          <ul>
            <li>Unlimited entries, local-first</li>
            <li>Bring your own AI provider</li>
            <li>Export to Unreal / Unity / Godot</li>
            <li>One world</li>
          </ul>
          <a className="ms-btn-secondary" href="#">Download</a>
        </div>
        <div className="ms-tier is-featured">
          <h3 className="ms-tier-name">Scribe</h3>
          <p className="ms-tier-tag">Managed AI. Unlimited worlds. The honest middle.</p>
          <div className="ms-tier-price">£9<small> / month</small></div>
          <ul>
            <li>Everything in Solo</li>
            <li>Managed Claude / GPT-4 included</li>
            <li>Unlimited worlds</li>
            <li>Session capture (beta)</li>
            <li>Priority support</li>
          </ul>
          <a className="ms-btn-primary" href="#">Start a 14-day trial</a>
        </div>
        <div className="ms-tier">
          <h3 className="ms-tier-name">Studio</h3>
          <p className="ms-tier-tag">For small teams sharing a single source of truth.</p>
          <div className="ms-tier-price">£29<small> / seat / mo</small></div>
          <ul>
            <li>Everything in Scribe</li>
            <li>Shared team libraries</li>
            <li>Engine plugin support</li>
            <li>SSO + audit log</li>
          </ul>
          <a className="ms-btn-secondary" href="#">Talk to us</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ms-footer">
      <div className="ms-wrap">
        <div className="ms-foot-grid">
          <div>
            <div className="ms-foot-brand">Mimir</div>
            <p className="ms-foot-tag">A library for the world you're building.</p>
            <p style={{fontSize:13,color:"var(--fg-3)",margin:"14px 0 0"}}>Made by Shield Wall Games · Cornwall, UK</p>
          </div>
          <div className="ms-foot-col">
            <h5>Product</h5>
            <a href="#">Features</a><a href="#">Pricing</a><a href="#">Changelog</a><a href="#">Roadmap</a>
          </div>
          <div className="ms-foot-col">
            <h5>Resources</h5>
            <a href="#">Docs</a><a href="#">Claude integration</a><a href="#">Unreal plugin</a><a href="#">Markdown spec</a>
          </div>
          <div className="ms-foot-col">
            <h5>Company</h5>
            <a href="#">Shield Wall Games</a><a href="#">Ashborn</a><a href="#">Newsletter</a><a href="#">Contact</a>
          </div>
        </div>
        <div className="ms-foot-base">
          <span>© 2026 Shield Wall Games Ltd.</span>
          <span style={{marginLeft:"auto"}}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Status</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Features, HowItWorks, Pricing, Footer });
