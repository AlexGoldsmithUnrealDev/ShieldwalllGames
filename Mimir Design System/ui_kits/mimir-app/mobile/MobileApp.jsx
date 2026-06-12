/* global React, MM_ENTRIES,
   MobileLibrary, MobileEntry, MobileToolsMenu, MobileAsk, MobileSearch, MobileMore,
   MobileTimeline, MobileCalendar, MobileValidation, MobileSchemas, MobileTranslator,
   MobileFamilyTree, MobileGenusTree, MobileFactionTree, MobileRelationships, MobileExport
 */
const { useState: useStateApp, useMemo: useMemoApp } = React;

const MM_TABS = [
  { id: "library", label: "Library", glyph: "❡" },
  { id: "tools",   label: "Tools",   glyph: "⚒" },
  { id: "ask",     label: "Ask",     glyph: "❛" },
  { id: "search",  label: "Search",  glyph: "⌕" },
  { id: "more",    label: "More",    glyph: "☰" },
];

const MM_TOOL_VIEWS = {
  timeline:      (props) => <MobileTimeline {...props}/>,
  calendar:      (props) => <MobileCalendar {...props}/>,
  validation:    (props) => <MobileValidation {...props}/>,
  schemas:       (props) => <MobileSchemas {...props}/>,
  translator:    (props) => <MobileTranslator {...props}/>,
  tree:          (props) => <MobileFamilyTree {...props}/>,
  genus:         (props) => <MobileGenusTree {...props}/>,
  factiontree:   (props) => <MobileFactionTree {...props}/>,
  relationships: (props) => <MobileRelationships {...props}/>,
  export:        (props) => <MobileExport {...props}/>,
};

function MobileApp({ initialView, initialEntryId, initialFilter, initialTool, initialAskMode }) {
  // Top-level routing:
  //   view ∈ "library" | "tools" | "ask" | "search" | "more" | "entry" | "tool"
  // The bottom tab bar pushes the 5 root views; tapping an entry pushes
  // "entry", tapping a tool card pushes "tool".
  const [view, setView] = useStateApp(initialView || "library");
  const [filter, setFilter] = useStateApp(initialFilter || "characters");
  const [openEntry, setOpenEntry] = useStateApp(() => {
    if (initialEntryId) return MM_ENTRIES.find(e => e.id === initialEntryId) || null;
    return null;
  });
  const [activeTool, setActiveTool] = useStateApp(initialTool || null);
  const [askWithHistory, setAskWithHistory] = useStateApp(initialAskMode === "history");

  // Which tab is highlighted in the bottom bar
  const activeTab = useMemoApp(() => {
    if (view === "entry") return "library";
    if (view === "tool")  return "tools";
    if (view === "search") return "search";
    if (view === "ask")    return "ask";
    if (view === "more")   return "more";
    if (view === "tools")  return "tools";
    return "library";
  }, [view]);

  function navTab(id) {
    if (id === "library") { setView("library"); setOpenEntry(null); return; }
    if (id === "tools")   { setView("tools"); setActiveTool(null); return; }
    if (id === "ask")     { setAskWithHistory(true); setView("ask"); return; }
    if (id === "search")  { setView("search"); return; }
    if (id === "more")    { setView("more"); return; }
  }

  function openEntryFromAnywhere(entry) {
    setOpenEntry(entry);
    setView("entry");
  }
  function openToolFromMenu(toolId) {
    if (toolId === "ask") { setAskWithHistory(false); setView("ask"); return; }
    if (MM_TOOL_VIEWS[toolId]) { setActiveTool(toolId); setView("tool"); return; }
    // Fallback for unknown tools — just bounce back
    setActiveTool(null);
    setView("tools");
  }

  // Show top header on root views only (entry / tool / ask have their own)
  const showHeader = view === "library" || view === "tools" || view === "more" || view === "search";
  const showTabBar = view !== "ask" || askWithHistory; // Hide tab bar in an active chat conversation

  return (
    <div className="mm-app mm-app--in-frame">
      {showHeader && (
        <header className="mm-header">
          <div className="mm-header-brand">
            <img src="../../../assets/logos/mimir-mark.png" alt=""/>
            <span>Mimir</span>
          </div>
          <button className="mm-header-world" onClick={() => setView("more")}>
            <span className="mm-header-world-dot"/>
            Shieldwall
            <span style={{color:"var(--fg-3)"}}>⌄</span>
          </button>
          <button className="mm-icon-btn" onClick={() => setView("search")} aria-label="Search">⌕</button>
          <button className="mm-icon-btn" aria-label="Notifications">⚑</button>
        </header>
      )}

      {/* Routed screens */}
      {view === "library" && (
        <MobileLibrary
          activeFilter={filter}
          onFilter={setFilter}
          onOpenEntry={openEntryFromAnywhere}
        />
      )}
      {view === "entry" && openEntry && (
        <MobileEntry
          entry={openEntry}
          onBack={() => { setOpenEntry(null); setView("library"); }}
          onAsk={() => { setAskWithHistory(false); setView("ask"); }}
        />
      )}
      {view === "tools" && (
        <MobileToolsMenu onOpen={openToolFromMenu}/>
      )}
      {view === "tool" && activeTool && MM_TOOL_VIEWS[activeTool] && (
        MM_TOOL_VIEWS[activeTool]({ onBack: () => { setActiveTool(null); setView("tools"); } })
      )}
      {view === "ask" && (
        <MobileAsk
          withHistory={askWithHistory}
          onBack={() => {
            // From an active chat, go to history; from history, go to library
            if (!askWithHistory) { setAskWithHistory(true); return; }
            setView("library");
          }}
        />
      )}
      {view === "search" && (
        <MobileSearch
          onBack={() => setView("library")}
          onOpenEntry={(e) => { setOpenEntry(e); setView("entry"); }}
        />
      )}
      {view === "more" && <MobileMore/>}

      {/* Floating "+ new" on the library page */}
      {view === "library" && (
        <button className="mm-fab" aria-label="New entry">+</button>
      )}

      {/* Bottom tab bar — always visible except inside an active chat */}
      {showTabBar && (
        <nav className="mm-tabbar">
          {MM_TABS.map(t => (
            <button
              key={t.id}
              className={"mm-tab" + (activeTab === t.id ? " is-active" : "")}
              onClick={() => navTab(t.id)}
            >
              <span className="mm-tab-glyph">{t.glyph}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

window.MobileApp = MobileApp;
