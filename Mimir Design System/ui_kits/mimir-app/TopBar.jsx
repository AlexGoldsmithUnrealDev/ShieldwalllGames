/* global React */
const { useState: useStateTopBar } = React;

function TopBar({ breadcrumbs, onCommand }) {
  return (
    <header className="mim-topbar">
      <nav className="mim-crumbs">
        {breadcrumbs.map((c, i) => (
          <React.Fragment key={i}>
            <button className={"mim-crumb" + (i === breadcrumbs.length - 1 ? " is-current" : "")}>{c}</button>
            {i < breadcrumbs.length - 1 && <span className="mim-crumb-sep">/</span>}
          </React.Fragment>
        ))}
      </nav>
      <div className="mim-top-right">
        <button className="mim-search" onClick={onCommand}>
          <span className="mim-search-glyph">⌕</span>
          <span className="mim-search-placeholder">Find a character, place, faction…</span>
          <span className="mim-search-kbd">⌘K</span>
        </button>
        <button className="mim-icon-btn" title="Validate">⚖</button>
        <button className="mim-icon-btn" title="Notifications">⚑</button>
        <div className="mim-avatar">AG</div>
      </div>
    </header>
  );
}

window.TopBar = TopBar;
