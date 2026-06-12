/* global React, MM_TOOLS */

// Tools menu — grid of cards. Tapping opens a tool view.
function MobileToolsMenu({ onOpen }) {
  return (
    <div className="mm-screen">
      <div className="mm-body">
        <div className="mm-tools-header">
          <span className="mm-eyebrow">Tools</span>
          <h1 className="mm-tools-title">The workshop</h1>
          <p className="mm-tools-sub">Build, reckon, reconcile.</p>
        </div>
        <div className="mm-tools-grid">
          <button className="mm-tool-card is-ask" onClick={() => onOpen("ask")}>
            <span className="mm-tool-glyph">❛</span>
            <span className="mm-tool-label">Ask Mimir</span>
            <span className="mm-tool-note">The well will answer.</span>
          </button>
          {MM_TOOLS.map(t => (
            <button key={t.id} className="mm-tool-card" onClick={() => onOpen(t.id)}>
              <span className="mm-tool-glyph">{t.glyph}</span>
              <span className="mm-tool-label">{t.label}</span>
              <span className="mm-tool-note">{t.note}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Shared header used by every tool sub-view
function MobileToolHeader({ title, onBack }) {
  return (
    <header className="mm-ev-nav">
      <button className="mm-icon-btn" onClick={onBack} aria-label="Back">←</button>
      <span className="mm-ev-nav-title">{title}</span>
    </header>
  );
}

window.MobileToolsMenu = MobileToolsMenu;
window.MobileToolHeader = MobileToolHeader;
