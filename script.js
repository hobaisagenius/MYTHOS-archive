
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
    setTimeout(()=>current.classList.remove("leaving"),760);
  }
  setTimeout(()=>{
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    next.classList.add("active");
    document.getElementById("drawer").classList.remove("open");
    window.scrollTo({top:0,behavior:"smooth"});
    setTimeout(()=>{
      if(typeof setupRevealObserver==="function") setupRevealObserver();
    },180);
  },620);
}
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
$("#menuBtn").onclick=()=>$("#drawer").classList.toggle("open");$("#menuClose").onclick=()=>$("#drawer").classList.remove("open");$("#searchOpen").onclick=()=>{$("#search").classList.add("open");setTimeout(()=>$("#searchInput").focus(),420)};$("#searchClose").onclick=()=>$("#search").classList.remove("open");$("#searchInput").oninput=e=>search(e.target.value);$("#profileClose").onclick=()=>$("#profile").classList.remove("open");document.addEventListener("keydown",e=>{if(e.key==="Escape"){$("#profile").classList.remove("open");$("#search").classList.remove("open");$("#drawer").classList.remove("open")}});
const heroes=[
["Heracles","Greek","Η","MONSTER-SLAYER","Son of Zeus famed above all for the Twelve Labours and a life shaped by extraordinary strength, suffering and eventual apotheosis."],
["Achilles","Greek","Α","WARRIOR","The greatest Greek fighter at Troy in the Iliad, defined by unmatched martial ability, wrath, grief and a brief heroic life."],
["Odysseus","Greek","Ο","WANDERER","King of Ithaca and master of cunning whose long return from Troy becomes the Odyssey."],
["Perseus","Greek","Π","MONSTER-SLAYER","Hero who beheads Medusa and later rescues Andromeda."],
["Theseus","Greek","Θ","KING & HERO","Athenian hero best known for entering the Cretan labyrinth and killing the Minotaur."],
["Atalanta","Greek","Λ","HUNTRESS","A swift-footed heroine associated with the Calydonian boar hunt and a famous footrace."],
["Sigurd","Norse","ᛋ","DRAGON-SLAYER","Hero of Germanic and Norse legendary tradition who kills the dragon Fafnir and becomes entangled in a tragic heroic cycle."],
["Brynhild","Norse","ᛒ","VALKYRIE","A valkyrie and major figure in the heroic tradition surrounding Sigurd, remembered through complex and tragic legendary narratives."],
["Beowulf","Norse","ᛒ","LEGENDARY HERO","A Germanic hero rather than a Norse god: slayer of Grendel, Grendel's mother and, late in life, a dragon."],
["Horus","Egyptian","𓅃","DIVINE HEIR","Although a god rather than a mortal hero, Horus occupies the central heroic role in the struggle to restore legitimate kingship after Osiris."],
["Sinuhe","Egyptian","𓀀","LITERARY HERO","The protagonist of a Middle Kingdom literary tale about exile, identity, success abroad and return to Egypt."],
["Setna","Egyptian","𓏏","LITERARY HERO","A learned prince appearing in later Egyptian narrative literature, especially tales about dangerous knowledge and magic."]
].map(x=>({name:x[0],pantheon:x[1],glyph:x[2],role:x[3],summary:x[4]}));

const creatures=[
["Medusa","Greek","◉","GORGON","A mortal Gorgon in a widely known later tradition, whose gaze turns observers to stone; Perseus beheads her."],
["Minotaur","Greek","◈","LABYRINTH BEAST","A bull-headed being confined in the labyrinth on Crete and killed by Theseus."],
["Cerberus","Greek","⋔","UNDERWORLD GUARDIAN","The multi-headed hound guarding the entrance to Hades."],
["Hydra","Greek","≋","SERPENT","The many-headed Lernaean Hydra fought by Heracles during his labours."],
["Fenrir","Norse","ᚾ","GREAT WOLF","The monstrous wolf born to Loki and Angrboða, bound by the gods until Ragnarök."],
["Jörmungandr","Norse","∞","WORLD SERPENT","The serpent encircling Midgard and Thor's destined opponent."],
["Níðhöggr","Norse","ᚦ","DRAGON","A destructive serpent or dragon associated with gnawing at the roots of Yggdrasil."],
["Fafnir","Norse","ᚠ","DRAGON","A figure transformed into a dragon through greed, slain by Sigurd in heroic legend."],
["Ammit","Egyptian","𓃣","DEVOURER","A composite funerary being who consumes the heart of the unworthy in judgment imagery."],
["Apep","Egyptian","〰","CHAOS SERPENT","The great serpent of chaos who threatens Ra's solar journey and must be defeated repeatedly."],
["Sphinx","Egyptian","𓃭","SACRED GUARDIAN","In Egyptian tradition, sphinxes combine a lion's body with a human head and are strongly associated with royal power and guardianship."],
["Bennu","Egyptian","𓅣","SACRED BIRD","A sacred bird associated with creation, solar renewal and rebirth."]
].map(x=>({name:x[0],pantheon:x[1],glyph:x[2],role:x[3],summary:x[4]}));

const realms=[
["Mount Olympus","Greek","△","DIVINE HEIGHT","The mythic home of the Olympian gods, imagined as a remote divine summit and the seat of Zeus's assembly."],
["Underworld","Greek","▽","REALM OF THE DEAD","The domain ruled by Hades, containing multiple regions and destinations for the dead in different Greek traditions."],
["Tartarus","Greek","□","PRIMORDIAL DEPTH","A deep cosmic region beneath the earth, used in myth as a prison for defeated divine enemies such as the Titans."],
["Asgard","Norse","ᛉ","REALM OF THE ÆSIR","The realm associated with the Æsir gods and linked to Midgard by Bifröst."],
["Midgard","Norse","⊕","HUMAN WORLD","The enclosed world inhabited by humans within the wider Norse cosmos."],
["Yggdrasil","Norse","ᛦ","COSMIC TREE","The immense world tree around which the Norse cosmos is structured and whose roots and branches connect mythic regions."],
["Hel","Norse","◐","REALM OF THE DEAD","The realm ruled by Hel and a destination for many who die outside battle."],
["Duat","Egyptian","𓇽","OTHERWORLD","The dangerous and transformative otherworld through which the sun god travels at night and which is deeply connected to funerary belief."],
["Field of Reeds","Egyptian","𓆱","BLESSED AFTERLIFE","An idealized afterlife landscape in which the justified dead may continue a perfected existence."],
["Heliopolis","Egyptian","☉","SACRED COSMOLOGY","A real sacred city that became the center of an influential creation theology focused on Atum and the Ennead."]
].map(x=>({name:x[0],pantheon:x[1],glyph:x[2],role:x[3],summary:x[4]}));

const timelineData={
Greek:[
["Primordial Beginning","Cosmic beings such as Chaos, Gaia and Uranus establish the earliest generations of the mythic cosmos."],
["Age of the Titans","Cronus overthrows Uranus and the Titans become the dominant divine generation."],
["Titanomachy","Zeus and his allies defeat Cronus and the Titans after a generational divine war."],
["Olympian Order","Zeus and the Olympians establish a new divine hierarchy."],
["Age of Heroes","Cycles surrounding Heracles, Perseus, Theseus, Jason and other heroes unfold."],
["Trojan Cycle","The war at Troy and the difficult returns of its survivors dominate a major body of heroic tradition."]
],
Norse:[
["Cosmic Beginning","The Norse creation tradition describes an early void and the meeting of elemental regions before the ordered world."],
["Creation from Ymir","The gods kill the primordial being Ymir and fashion the world from his body."],
["Divine Orders","Æsir and Vanir traditions become intertwined, while the cosmic worlds and relationships take shape."],
["Binding of Fenrir","The gods restrain the dangerous wolf Fenrir at the cost of Týr's hand."],
["Death of Baldr","Baldr's death becomes one of the central signs of the approaching final crisis."],
["Ragnarök","Gods and monsters meet in catastrophic battles, followed in the surviving sources by images of renewal."]
],
Egyptian:[
["First Time","Egyptian creation traditions imagine a primordial beginning in which ordered existence emerges from an undifferentiated state."],
["Solar Creation","In Heliopolitan theology, Atum and the succeeding generations of the Ennead establish cosmic relationships."],
["Rule of Osiris","Osiris represents ordered kingship before his death at the hands of Set."],
["Isis and Horus","Isis protects and raises Horus as the legitimate heir."],
["Contendings","Horus and Set struggle over the right to kingship."],
["Restored Order","Horus embodies living kingship, Osiris rules the dead, and Ma'at represents the order that must continually be maintained."]
]};

function tabFilter(containerId,values,onPick){
 const el=document.getElementById(containerId);
 el.innerHTML=["All",...values].map((x,i)=>`<button class="${i?"":"active"}" data-v="${x}">${x.toUpperCase()}</button>`).join("");
 el.querySelectorAll("button").forEach(b=>b.onclick=()=>{el.querySelectorAll("button").forEach(x=>x.classList.remove("active"));b.classList.add("active");onPick(b.dataset.v)});
}
function renderArchiveCards(target,data,filter="All"){
 const a=data.filter(x=>filter==="All"||x.pantheon===filter);
 document.getElementById(target).innerHTML=a.map(x=>`<article class="archiveCard"><small>${x.pantheon.toUpperCase()}</small><div class="mark">${x.glyph}</div><h3>${x.name}</h3><div class="role">${x.role}</div><p>${x.summary}</p></article>`).join("");
}
function setupExpandedArchive(){
 const traditions=["Greek","Norse","Egyptian"];
 tabFilter("heroTabs",traditions,v=>renderArchiveCards("heroGrid",heroes,v));renderArchiveCards("heroGrid",heroes);
 tabFilter("creatureTabs",traditions,v=>renderArchiveCards("creatureGrid",creatures,v));renderArchiveCards("creatureGrid",creatures);
 document.getElementById("realmStage").innerHTML=realms.map((r,i)=>`<article class="realmBlock" data-realm="${i}"><div class="realmGlyph">${r.glyph}</div><div><small>${r.pantheon.toUpperCase()} · ${r.role}</small><h3>${r.name}</h3></div><p>${r.summary}</p><div>↗</div></article>`).join("");
 document.querySelectorAll("[data-realm]").forEach(x=>x.onclick=()=>openRealm(+x.dataset.realm));
 tabFilter("timelineTabs",traditions,v=>renderTimeline(v==="All"?"Greek":v));renderTimeline("Greek");
 const opts=E.map(e=>`<option value="${e.id}">${e.name} — ${pantheons[e.pantheon].name}</option>`).join("");
 document.getElementById("connectA").innerHTML=opts;document.getElementById("connectB").innerHTML=opts;
 document.getElementById("connectB").selectedIndex=Math.min(1,E.length-1);
 document.getElementById("connectBtn").onclick=traceConnection;
}
function openRealm(i){
 const r=realms[i];let m=document.getElementById("realmModal");
 if(!m){m=document.createElement("div");m.id="realmModal";m.className="realmModal";m.innerHTML=`<button class="x" id="realmClose">×</button><div class="realmModalInner" id="realmModalInner"></div>`;document.body.appendChild(m);document.getElementById("realmClose").onclick=()=>m.classList.remove("open")}
 document.getElementById("realmModalInner").innerHTML=`<div class="tiny">${r.pantheon.toUpperCase()} · ${r.role}</div><h2>${r.name}</h2><p>${r.summary}</p>`;
 m.classList.add("open");
}
function renderTimeline(p){
 document.getElementById("timelineList").innerHTML=(timelineData[p]||[]).map((x,i)=>`<article class="timeRow"><div class="timeNo">${String(i+1).padStart(2,"0")}</div><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("");
 document.querySelectorAll("#timelineTabs button").forEach(b=>b.classList.toggle("active",b.dataset.v===p));
}
function traceConnection(){
 const a=document.getElementById("connectA").value,b=document.getElementById("connectB").value,out=document.getElementById("connectionResult");
 if(a===b){out.innerHTML=`<div class="connectionPath"><div class="pathNode"><b>${get(a).name}</b><span>SAME FIGURE</span></div></div>`;return}
 const graph={};E.forEach(e=>graph[e.id]=new Set(e.relations.filter(r=>get(r))));
 E.forEach(e=>e.relations.forEach(r=>{if(graph[r])graph[r].add(e.id)}));
 let q=[[a]],seen=new Set([a]),found=null;
 while(q.length){let path=q.shift(),last=path[path.length-1];for(const n of graph[last]||[]){if(seen.has(n))continue;let np=[...path,n];if(n===b){found=np;q=[];break}seen.add(n);q.push(np)}}
 if(!found){out.innerHTML=`<div class="connectionNote">No relationship path is currently encoded between these two figures. The archive will gain more relationship data in later versions.</div>`;return}
 out.innerHTML=`<div class="connectionPath">${found.map((id,i)=>`${i?'<span class="pathArrow">→</span>':''}<button class="pathNode" data-pe="${id}"><b>${get(id).name}</b><span>${get(id).type.toUpperCase()}</span></button>`).join("")}</div><div class="connectionNote">This path follows relationships currently encoded in the MYTHOS archive. It is a navigation aid, not a claim that every link represents the same kind of kinship or mythic relationship.</div>`;
 out.querySelectorAll("[data-pe]").forEach(x=>x.onclick=()=>profile(x.dataset.pe));
}
setupExpandedArchive();

go("home");


let revealObserver;
function setupRevealObserver(){
  if(revealObserver) revealObserver.disconnect();
  const selectors=[".intro",".pantheonCards",".feature",".pageHead",".detailHead",".filterBar",".entityGrid",".treeBar",".treeWrap",".storyList",".storyReader",".symbolGrid",".archiveFilter",".archiveGrid",".realmStage",".timelineList",".connectionLab"];
  document.querySelectorAll(selectors.join(",")).forEach(el=>{
    el.classList.add("revealBlock");
    revealObserver.observe(el);
  });
}
revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("revealed");revealObserver.unobserve(entry.target);}
  });
},{threshold:.09,rootMargin:"0px 0px -5% 0px"});
setupRevealObserver();
window.addEventListener("scroll",()=>document.querySelector("header").classList.toggle("scrolled",window.scrollY>20),{passive:true});

setTimeout(()=>{
 if(typeof setupRevealObserver==="function") setupRevealObserver();
},100);
