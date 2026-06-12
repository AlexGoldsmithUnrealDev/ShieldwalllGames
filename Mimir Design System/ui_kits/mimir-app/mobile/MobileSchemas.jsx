/* global React, MobileToolHeader */

const MM_SCHEMAS = [
  { id:"characters", name:"Character", icon:"👤", desc:"Named people, gods, beasts. Anything with a voice and a fate.", count:47, custom:false },
  { id:"places",     name:"Place",     icon:"🗺", desc:"Hearths, holds, ruins, roads. Anywhere a story can land.",     count:23, custom:false },
  { id:"factions",   name:"Faction",   icon:"⚔",  desc:"Banners, cults, councils, warbands. Any organised body.",      count:11, custom:false },
  { id:"cultures",   name:"Culture",   icon:"ᚱ",  desc:"Peoples, tongues, customs. The shared way a folk lives.",       count:6,  custom:false },
  { id:"events",     name:"Event",     icon:"✦",  desc:"Battles, oaths, omens. Moments the chronicle remembers.",      count:38, custom:false },
  { id:"languages",  name:"Language",  icon:"𐌀",  desc:"Tongues spoken across the saga, with their glyph systems.",    count:4,  custom:false },
  { id:"spells",     name:"Spell",     icon:"❛",  desc:"Rites, bindings, summonings.",                                  count:17, custom:false },
  { id:"runes",      name:"Rune",      icon:"ᚠ",  desc:"The elder row and its derivatives.",                            count:24, custom:false },
  { id:"artefacts",  name:"Artefact",  icon:"⚒",  desc:"Crowns, relics, weapons-of-record.",                            count:19, custom:false },
  { id:"warbands",   name:"Warband",   icon:"⊕",  desc:"Custom — Iron Crown campaign rosters.",                         count:5,  custom:true },
  { id:"feasts",     name:"Feast-Day", icon:"◷",  desc:"Custom — Hornfolke festivals on the calendar.",                 count:12, custom:true },
];

function MobileSchemas({ onBack }) {
  return (
    <div className="mm-toolview mm-screen">
      <MobileToolHeader title="Schemas · 9 built-in · 2 custom" onBack={onBack}/>
      <div className="mm-toolview-body">
        <div className="mm-tools-header" style={{padding:"4px 0 14px"}}>
          <span className="mm-eyebrow">Lorebible · field shapes</span>
          <p className="mm-tools-sub" style={{margin:"6px 0 0"}}>Edit the field set for any entry kind. Custom schemas appear at the bottom.</p>
        </div>
        {MM_SCHEMAS.map(s => (
          <div key={s.id} className="mm-schema-row">
            <div className="mm-schema-icon">{s.icon}</div>
            <div className="mm-schema-body">
              <div className="mm-schema-name">{s.name}{s.custom && <span className="mm-tag" style={{marginLeft:8}}>custom</span>}</div>
              <p className="mm-schema-desc">{s.desc}</p>
              <div className="mm-schema-meta">{s.count} entries · {s.custom ? "user-defined" : "built-in"}</div>
            </div>
            <span className="mm-linklist-arrow">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.MobileSchemas = MobileSchemas;
