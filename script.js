
const pantheons={
greek:{name:"Greek",glyph:"Ω",color:"var(--greek)",blurb:"Olympians, Titans, heroes and monsters shaped by fate, rivalry and transformation.",note:"OLYMPUS · TITANS · HEROES"},
norse:{name:"Norse",glyph:"ᚱ",color:"var(--norse)",blurb:"A cosmos bound by fate, sacrifice, giants, gods and the shadow of Ragnarök.",note:"ASGARD · YGGDRASIL · RAGNARÖK"},
egyptian:{name:"Egyptian",glyph:"𓂀",color:"var(--egypt)",blurb:"Divine kingship, creation, death, rebirth and the preservation of cosmic order.",note:"RA · DUAT · MA'AT"}
};
const E=[
["zeus","Zeus","greek","Olympian","ϟ","King of the Olympian gods","Sky, thunder, kingship, law","Thunderbolt, eagle, oak","Cronus and Rhea","Zeus overthrew Cronus and became ruler of the Olympian order. He is the central sky and thunder god of Greek mythology.",["hera","poseidon","hades","athena","apollo","artemis","hermes"]],
["hera","Hera","greek","Olympian","♛","Queen of Olympus","Marriage, queenship","Peacock, diadem, pomegranate","Cronus and Rhea","Hera is queen of the Olympians and goddess of marriage, royal authority and women.",["zeus"]],
["poseidon","Poseidon","greek","Olympian","Ψ","God of the sea","Sea, earthquakes, horses","Trident, horse, dolphin","Cronus and Rhea","Poseidon rules the sea and is associated with earthquakes and horses.",["zeus","hades"]],
["hades","Hades","greek","Underworld","♜","Lord of the Underworld","The dead, hidden wealth","Bident, helm, Cerberus","Cronus and Rhea","Hades rules the realm of the dead and shares that kingdom with Persephone.",["zeus","poseidon","persephone"]],
["athena","Athena","greek","Olympian","⚔","Goddess of wisdom and strategy","Wisdom, strategy, crafts","Owl, olive, aegis","Zeus","Athena represents strategic intelligence, civic order and skilled craft, and frequently aids heroes.",["zeus"]],
["apollo","Apollo","greek","Olympian","☉","God of prophecy and music","Prophecy, music, healing, archery","Lyre, laurel, bow","Zeus and Leto","Apollo is linked with prophecy, music, healing, archery and divine order.",["zeus","artemis"]],
["artemis","Artemis","greek","Olympian","☾","Goddess of the hunt","Hunt, wilderness, childbirth","Bow, deer, moon","Zeus and Leto","Artemis is goddess of the hunt and wild places, fiercely independent and often shown with a bow.",["zeus","apollo"]],
["hermes","Hermes","greek","Olympian","☤","Messenger of the gods","Travel, trade, boundaries","Caduceus, winged sandals","Zeus and Maia","Hermes is the swift messenger and a god of travel, trade, boundaries and cleverness.",["zeus"]],
["aphrodite","Aphrodite","greek","Olympian","♀","Goddess of love and beauty","Love, beauty, desire","Dove, rose, shell","Varies by tradition","Aphrodite embodies love, beauty and desire. Ancient sources preserve differing accounts of her birth.",["ares"]],
["ares","Ares","greek","Olympian","♂","God of war","War, battle fury","Spear, helmet","Zeus and Hera","Ares personifies the violent and chaotic dimension of war.",["aphrodite"]],
["cronus","Cronus","greek","Titan","⌛","Titan ruler before Zeus","Titan kingship, succession","Sickle","Uranus and Gaia","Cronus overthrew Uranus and later tried to prevent the prophecy that one of his children would replace him.",["rhea","zeus","hera","poseidon","hades"]],
["rhea","Rhea","greek","Titan","◉","Mother of the first Olympians","Motherhood, fertility","Lion, crown","Uranus and Gaia","Rhea is a Titan and mother of the first generation of Olympians, including Zeus.",["cronus","zeus","hera","poseidon","hades"]],
["persephone","Persephone","greek","Underworld","✿","Queen of the Underworld","Underworld, spring, renewal","Pomegranate, grain","Zeus and Demeter","Persephone's movement between the underworld and upper world became a major image of seasonal return.",["hades"]],
["odin","Odin","norse","Æsir","ᚨ","Allfather and seeker of wisdom","Wisdom, war, poetry, magic","Gungnir, ravens, wolves","Borr and Bestla","Odin is a god of kingship, war, poetry, magic and relentless knowledge-seeking.",["thor","frigg","baldr","loki"]],
["thor","Thor","norse","Æsir","ᚦ","God of thunder","Thunder, protection, strength","Mjölnir, goats","Odin and Jörð","Thor protects gods and humans from giants and chaos, wielding the hammer Mjölnir.",["odin","loki","jormungandr"]],
["loki","Loki","norse","Jötunn / Æsir companion","ᛚ","Trickster and shape-shifter","Trickery, transformation","Shape-shifting, cunning","Fárbauti and Laufey","Loki is a shape-shifting trickster whose actions alternately help and endanger the gods.",["odin","thor","fenrir","jormungandr","hel"]],
["frigg","Frigg","norse","Æsir","ᚠ","Queen of the Æsir","Marriage, foreknowledge, motherhood","Spindle, keys","Uncertain traditions","Frigg is Odin's wife and is associated with marriage, motherhood and foreknowledge.",["odin","baldr"]],
["baldr","Baldr","norse","Æsir","✦","The beloved god","Beauty, light, purity","Light, mistletoe","Odin and Frigg","Baldr's death, brought about through Loki's deception, becomes one of the great omens before Ragnarök.",["odin","frigg","loki"]],
["tyr","Týr","norse","Æsir","ᛏ","God of law and heroic courage","Law, oaths, courage, war","Tiwaz rune, sword","Varies by source","Týr is associated with law, oaths and courage and famously sacrifices his hand when Fenrir is bound.",["fenrir"]],
["freyja","Freyja","norse","Vanir","ᚠ","Goddess of love, magic and battle","Love, fertility, seiðr, battle","Brísingamen, cats","Njörðr","Freyja is associated with love, fertility, magic and battle and receives a share of the slain.",[]],
["freyr","Freyr","norse","Vanir","ᛉ","God of fertility and prosperity","Fertility, harvest, peace","Ship, boar","Njörðr","Freyr is associated with prosperity, peace, fertility and sacred kingship.",["freyja"]],
["fenrir","Fenrir","norse","Monster","ᚾ","The great wolf","Destruction, fate","Chains, wolf","Loki and Angrboða","Fenrir is a monstrous wolf bound by the gods who breaks free at Ragnarök.",["loki","tyr"]],
["jormungandr","Jörmungandr","norse","Monster","∞","The World Serpent","Ocean, cosmic boundary","Serpent, circle","Loki and Angrboða","Jörmungandr encircles Midgard and faces Thor in the final battles of Ragnarök.",["loki","thor"]],
["hel","Hel","norse","Underworld","◐","Ruler of Hel","The dead, underworld","Half-living form","Loki and Angrboða","Hel rules the realm that bears her name, receiving many of the dead.",["loki"]],
["ra","Ra","egyptian","Solar","☉","Solar creator and kingly god","Sun, creation, kingship","Solar disk, falcon, sun barque","Varies by tradition","Ra is one of Egypt's central solar deities, traveling across the sky by day and through the night world before sunrise.",["hathor","horus","ma_at"]],
["osiris","Osiris","egyptian","Ennead","𓁹","Lord of the dead and rebirth","Afterlife, rebirth, kingship","Crook and flail, atef crown","Geb and Nut","Osiris is murdered by Set, restored by Isis and becomes ruler of the dead.",["isis","horus","set"]],
["isis","Isis","egyptian","Ennead","𓊨","Goddess of magic and protection","Magic, motherhood, healing","Throne sign, tyet knot","Geb and Nut","Isis is a powerful magician, wife of Osiris and mother of Horus.",["osiris","horus"]],
["horus","Horus","egyptian","Royal","𓅃","Falcon god of kingship and sky","Kingship, sky, protection","Falcon, Eye of Horus","Osiris and Isis","Horus represents living kingship and cosmic order. His struggle with Set became a key myth of legitimate rule.",["isis","osiris","set","ra"]],
["set","Set","egyptian","Ennead","𓃩","God of desert, storm and disruption","Desert, storm, disorder","Set animal, was-scepter","Geb and Nut","Set is a powerful and ambivalent god linked to storms, desert and disruption. He is Osiris's killer and Horus's rival.",["osiris","horus"]],
["anubis","Anubis","egyptian","Funerary","𓃢","Guardian of embalming and the dead","Embalming, cemeteries, judgment","Jackal, embalming tools","Varies by tradition","Anubis is the jackal-headed god of embalming and funerary protection.",["osiris"]],
["thoth","Thoth","egyptian","Cosmic","𓁟","God of writing and knowledge","Writing, wisdom, measurement, moon","Ibis, writing palette","Varies by tradition","Thoth embodies writing, calculation, wisdom and cosmic reckoning.",["ma_at"]],
["hathor","Hathor","egyptian","Solar","𓁥","Goddess of love, music and joy","Love, music, motherhood, sky","Cow horns, solar disk, sistrum","Varies by tradition","Hathor is a major goddess linked with love, music, motherhood, the sky and the solar cycle.",["ra","horus"]],
["ma_at","Ma'at","egyptian","Cosmic","𓆄","Personification of cosmic order","Truth, justice, balance, order","Ostrich feather","Often daughter of Ra","Ma'at is both goddess and concept: the right order of the cosmos, society and moral life.",["ra","thoth"]]
].map(x=>({id:x[0],name:x[1],pantheon:x[2],type:x[3],glyph:x[4],title:x[5],domains:x[6],symbols:x[7],parents:x[8],summary:x[9],relations:x[10]}));
const stories=[
{id:"titanomachy",pantheon:"Greek",title:"The Titanomachy",tag:"WAR OF THE GODS",summary:"The generational war in which Zeus and his allies overthrow Cronus and the Titans.",chapters:[["The Rule of Cronus","Cronus takes power from Uranus, but a prophecy warns that one of his children will overthrow him."],["The Hidden Child","Rhea hides the infant Zeus and gives Cronus a stone wrapped in cloth."],["The Return","Zeus forces Cronus to release the siblings he had swallowed."],["Ten Years of War","Olympians and Titans fight until Zeus gains decisive allies and weapons."],["The New Order","The Titans are defeated and the Olympian order begins."]]},
{id:"ragnarok",pantheon:"Norse",title:"Ragnarök",tag:"THE FATE OF THE GODS",summary:"The catastrophic sequence in which gods and monsters meet their foretold ends — followed by renewal.",chapters:[["The Breaking of Bonds","Fenrir breaks free and Jörmungandr rises from the sea."],["The Last Muster","The gods prepare for a battle they already know many will not survive."],["The Great Duels","Odin faces Fenrir, Thor battles Jörmungandr, and others meet their destined enemies."],["Fire and Flood","The old world is overwhelmed by destruction."],["Renewal","The sources also envision a renewed earth beyond catastrophe."]]},
{id:"osiris-cycle",pantheon:"Egyptian",title:"The Osiris Cycle",tag:"DEATH, KINGSHIP & REBIRTH",summary:"The murder of Osiris, the magic of Isis and the rise of Horus form one of Egypt's central mythic structures.",chapters:[["The King Osiris","Osiris embodies ordered kingship before Set attacks and kills him."],["The Search of Isis","Isis seeks Osiris and uses magic and mourning to restore what was broken."],["The Birth of Horus","Horus is born as the heir who will challenge Set."],["The Contendings","Horus and Set enter an extended divine struggle over kingship."],["Kingship Restored","Horus becomes the model of the living king while Osiris rules the dead."]]},
{id:"persephone",pantheon:"Greek",title:"Persephone & the Underworld",tag:"SEASONS & RETURN",summary:"Persephone's descent links the underworld, Demeter's grief and the return of fertility.",chapters:[["The Descent","Persephone is taken into the underworld by Hades."],["Demeter's Grief","Demeter withdraws fertility from the earth."],["The Settlement","A compromise is reached between worlds."],["The Return","Persephone's cycle between realms becomes an image of seasonal renewal."]]}
];
const symbols=[
["Thunderbolt","Greek","ϟ","Zeus","The weapon and emblem of Zeus, traditionally forged by the Cyclopes."],["Trident","Greek","Ψ","Poseidon","Poseidon's defining attribute, linked with sea power and earthquakes."],["Aegis","Greek","◈","Athena / Zeus","A protective and terrifying divine object associated especially with Athena."],["Mjölnir","Norse","ᛏ","Thor","Thor's hammer, used against giants and associated with protection and consecration."],["Gungnir","Norse","↑","Odin","Odin's spear, a symbol of divine authority and war."],["Brísingamen","Norse","◇","Freyja","A famous necklace associated with Freyja."],["Eye of Horus","Egyptian","𓂀","Horus","A symbol of healing, protection and restoration."],["Ankh","Egyptian","☥","Multiple deities","The hieroglyphic sign for life, frequently held by gods in Egyptian art."],["Feather of Ma'at","Egyptian","𓆄","Ma'at","The emblem of truth and order used in the weighing of the heart."]
].map(x=>({name:x[0],pantheon:x[1],glyph:x[2],owner:x[3],summary:x[4]}));
const trees={
greek:{nodes:[["cronus","Cronus","Titan",430,60],["rhea","Rhea","Titan",690,60],["hera","Hera","Olympian",160,250],["zeus","Zeus","Olympian",350,250],["poseidon","Poseidon","Olympian",540,250],["hades","Hades","Olympian",730,250],["athena","Athena","Olympian",280,430],["apollo","Apollo","Olympian",470,430],["artemis","Artemis","Olympian",660,430],["hermes","Hermes","Olympian",850,430]],links:[["cronus","hera"],["rhea","hera"],["cronus","zeus"],["rhea","zeus"],["cronus","poseidon"],["rhea","poseidon"],["cronus","hades"],["rhea","hades"],["zeus","athena"],["zeus","apollo"],["zeus","artemis"],["zeus","hermes"]]},
norse:{nodes:[["odin","Odin","Æsir",420,70],["frigg","Frigg","Æsir",680,70],["thor","Thor","Æsir",260,260],["baldr","Baldr","Æsir",560,260],["loki","Loki","Trickster",850,70],["fenrir","Fenrir","Monster",720,430],["jormungandr","Jörmungandr","Monster",900,430],["hel","Hel","Underworld",540,430]],links:[["odin","thor"],["odin","baldr"],["frigg","baldr"],["loki","fenrir"],["loki","jormungandr"],["loki","hel"]]},
egyptian:{nodes:[["osiris","Osiris","Ennead",280,80],["isis","Isis","Ennead",500,80],["set","Set","Ennead",720,80],["horus","Horus","Royal",390,280],["anubis","Anubis","Funerary",720,280],["ra","Ra","Solar",100,280],["hathor","Hathor","Solar",100,450],["ma_at","Ma'at","Cosmic",930,280],["thoth","Thoth","Cosmic",930,450]],links:[["osiris","horus"],["isis","horus"],["ra","hathor"],["ra","ma_at"]]}
};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)], get=id=>E.find(e=>e.id===id);
function go(id){
  const current=document.querySelector(".page.active");
  const next=document.getElementById(id);
  if(!next || current===next){
    document.getElementById("drawer").classList.remove("open");
    return;
  }
  if(current){
    current.classList.add("leaving");
    current.classList.remove("active");
    setTimeout(()=>current.classList.remove("leaving"),340);
  }
  setTimeout(()=>{
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    next.classList.add("active");
    document.getElementById("drawer").classList.remove("open");
    window.scrollTo({top:0,behavior:"smooth"});
    setTimeout(setupRevealObserver,60);
  },170);
})}
function cards(el){el.innerHTML=Object.entries(pantheons).map(([id,p],i)=>`<article class="pCard" data-p="${id}"><small class="tiny">0${i+1}</small><div class="pGlyph" style="color:${p.color}">${p.glyph}</div><h3>${p.name}</h3><p>${p.blurb}</p><span class="go">↗</span></article>`).join("");el.querySelectorAll("[data-p]").forEach(c=>c.onclick=()=>openPantheon(c.dataset.p))}
function openPantheon(id){const p=pantheons[id];$("#detailHead").innerHTML=`<div><div class="tiny">${p.note}</div><h1 style="color:${p.color}">${p.name.toUpperCase()}</h1></div><p>${p.blurb}</p><div class="bigGlyph">${p.glyph}</div>`;const ts=["All",...new Set(E.filter(e=>e.pantheon===id).map(e=>e.type))];$("#filters").innerHTML=ts.map((t,i)=>`<button class="${i?"":"active"}" data-t="${t}">${t}</button>`).join("");$("#filters").querySelectorAll("button").forEach(b=>b.onclick=()=>{$("#filters").querySelectorAll("button").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderEntities(id,b.dataset.t)});renderEntities(id,"All");go("pantheon")}
function renderEntities(pid,t){const a=E.filter(e=>e.pantheon===pid&&(t==="All"||e.type===t));$("#entityGrid").innerHTML=a.map(e=>`<article class="entity" data-e="${e.id}"><small>${e.type.toUpperCase()}</small><div class="glyph">${e.glyph}</div><h3>${e.name}</h3><p>${e.title}</p></article>`).join("");$("#entityGrid").querySelectorAll("[data-e]").forEach(x=>x.onclick=()=>profile(x.dataset.e))}
function profile(id){const e=get(id);if(!e)return;$("#profileArt").innerHTML=`<span>${e.glyph}</span>`;$("#profileText").innerHTML=`<div class="tiny">${pantheons[e.pantheon].name.toUpperCase()} · ${e.type.toUpperCase()}</div><h1>${e.name}</h1><div class="subtitle">${e.title}</div><p>${e.summary}</p><div class="facts"><div class="fact"><span>DOMAINS</span><b>${e.domains}</b></div><div class="fact"><span>SYMBOLS</span><b>${e.symbols}</b></div><div class="fact"><span>PARENTS</span><b>${e.parents}</b></div><div class="fact"><span>TRADITION</span><b>${pantheons[e.pantheon].name}</b></div></div><div class="related"><div class="tiny">CONNECTED FIGURES</div>${e.relations.map(r=>get(r)).filter(Boolean).map(r=>`<button data-r="${r.id}">${r.name}</button>`).join("")}</div>`;$("#profileText").querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>profile(b.dataset.r));$("#profile").classList.add("open")}
function renderStories(){$("#storyList").innerHTML=stories.map((s,i)=>`<article class="storyRow" data-s="${s.id}"><small>${String(i+1).padStart(2,"0")} / ${s.pantheon.toUpperCase()}</small><h3>${s.title}</h3><p>${s.summary}</p><div>→</div></article>`).join("");$("#storyList").querySelectorAll("[data-s]").forEach(x=>x.onclick=()=>story(x.dataset.s))}
function story(id){const s=stories.find(x=>x.id===id);$("#storyReader").innerHTML=`<div class="readerTop"><div><div class="tiny">${s.pantheon.toUpperCase()} · ${s.tag}</div><h1>${s.title}</h1></div><p>${s.summary}</p></div>${s.chapters.map((c,i)=>`<section class="chapter"><small>${String(i+1).padStart(2,"0")}</small><h3>${c[0]}</h3><p>${c[1]}</p></section>`).join("")}`;go("story")}
function renderSymbols(){$("#symbolGrid").innerHTML=symbols.map(s=>`<article class="symbol"><small>${s.pantheon.toUpperCase()}</small><div class="glyph">${s.glyph}</div><h3>${s.name}</h3><p>${s.summary}</p><p class="tiny">ASSOCIATED WITH · ${s.owner.toUpperCase()}</p></article>`).join("")}
function renderTree(id){const t=trees[id],c=$("#treeCanvas");c.innerHTML="";const map={};t.nodes.forEach(n=>map[n[0]]={x:n[3],y:n[4]});t.links.forEach(([a,b])=>{const A=map[a],B=map[b],ax=A.x+75,ay=A.y+24,bx=B.x+75,by=B.y+24,dx=bx-ax,dy=by-ay,l=Math.hypot(dx,dy),ang=Math.atan2(dy,dx)*180/Math.PI;const d=document.createElement("div");d.className="lineSeg";d.style.cssText=`left:${ax}px;top:${ay}px;width:${l}px;transform:rotate(${ang}deg)`;c.appendChild(d)});t.nodes.forEach(n=>{const b=document.createElement("button");b.className="node";b.style.left=n[3]+"px";b.style.top=n[4]+"px";b.innerHTML=`<b>${n[1]}</b><span>${n[2]}</span>`;b.onclick=()=>profile(n[0]);c.appendChild(b)})}
function setupTrees(){$("#treeTabs").innerHTML=Object.keys(pantheons).map((id,i)=>`<button class="${i?"":"active"}" data-tree="${id}">${pantheons[id].name.toUpperCase()}</button>`).join("");$("#treeTabs").querySelectorAll("button").forEach(b=>b.onclick=()=>{$("#treeTabs").querySelectorAll("button").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderTree(b.dataset.tree)});$("#treeReset").onclick=()=>renderTree($("#treeTabs button.active").dataset.tree);renderTree("greek")}
function search(q){q=q.trim().toLowerCase();if(!q){$("#searchResults").innerHTML="";return}let R=[];E.forEach(e=>{if((e.name+" "+e.title+" "+e.domains+" "+e.symbols).toLowerCase().includes(q))R.push({n:e.name,t:`${pantheons[e.pantheon].name} · ${e.type}`,k:"e",id:e.id})});stories.forEach(s=>{if((s.title+" "+s.summary).toLowerCase().includes(q))R.push({n:s.title,t:`Story · ${s.pantheon}`,k:"s",id:s.id})});symbols.forEach((s,i)=>{if((s.name+" "+s.owner+" "+s.summary).toLowerCase().includes(q))R.push({n:s.name,t:`Symbol · ${s.pantheon}`,k:"y",id:i})});$("#searchResults").innerHTML=R.slice(0,12).map(r=>`<div class="result" data-k="${r.k}" data-id="${r.id}"><b>${r.n}</b><span>${r.t.toUpperCase()}</span></div>`).join("")||`<div class="tiny">NO RESULTS</div>`;$("#searchResults").querySelectorAll(".result").forEach(r=>r.onclick=()=>{$("#search").classList.remove("open");if(r.dataset.k==="e")profile(r.dataset.id);else if(r.dataset.k==="s")story(r.dataset.id);else go("symbols")})}
cards($("#homePantheons"));cards($("#pantheonGrid"));renderStories();renderSymbols();setupTrees();
$$("[data-go]").forEach(b=>b.onclick=()=>go(b.dataset.go));$$("[data-story]").forEach(b=>b.onclick=()=>story(b.dataset.story));
$("#menuBtn").onclick=()=>$("#drawer").classList.add("open");$("#menuClose").onclick=()=>$("#drawer").classList.remove("open");$("#searchOpen").onclick=()=>{$("#search").classList.add("open");setTimeout(()=>$("#searchInput").focus(),60)};$("#searchClose").onclick=()=>$("#search").classList.remove("open");$("#searchInput").oninput=e=>search(e.target.value);$("#profileClose").onclick=()=>$("#profile").classList.remove("open");document.addEventListener("keydown",e=>{if(e.key==="Escape"){$("#profile").classList.remove("open");$("#search").classList.remove("open");$("#drawer").classList.remove("open")}});go("home");


// Premium reveal system
let revealObserver;
function setupRevealObserver(){
  if(revealObserver) revealObserver.disconnect();
  const targets=[
    ".intro",".pantheonCards",".feature",".pageHead",".detailHead",
    ".filterBar",".entityGrid",".treeBar",".treeWrap",".storyList",
    ".storyReader",".symbolGrid"
  ];
  document.querySelectorAll(targets.join(",")).forEach(el=>{
    el.classList.add(el.matches(".pantheonCards,.entityGrid,.storyList,.symbolGrid") ? "reveal-stagger" : "reveal");
  });
  revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:"0px 0px -8% 0px"});
  document.querySelectorAll(".reveal,.reveal-stagger").forEach(el=>revealObserver.observe(el));
}
setupRevealObserver();

window.addEventListener("scroll",()=>{
  document.querySelector("header").classList.toggle("scrolled",window.scrollY>24);
},{passive:true});

// slight parallax on hero only
window.addEventListener("mousemove",e=>{
  const sigil=document.querySelector(".sigil");
  if(!sigil || !document.getElementById("home").classList.contains("active")) return;
  const x=(e.clientX/window.innerWidth-.5)*8;
  const y=(e.clientY/window.innerHeight-.5)*8;
  sigil.style.marginRight=(-x*.5)+"px";
  sigil.style.marginTop=(y*.35)+"px";
},{passive:true});
