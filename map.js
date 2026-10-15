(() => {
  const data = window.campaignMapData;
  const kinds = {place:'Places',event:'Events',party:'Party position',origin:'Origins'};
  const icons = {place:'◇',event:'✦',party:'⚑',origin:'⌂'};
  let state, root, svg, view, drag;
  const safe = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const visible = () => data.pins.filter(p => (state.type === 'all' || p.type === state.type) && (state.session === 'all' || p.sessions.includes(state.session)));
  function page(id) {
    state = {type:'all',session:'all',selected:data.pins.some(p=>p.id===id)?id:'party'};
    return `<div class="container map-page">${pageHeading('Faerûn · The Dalelands','The campaign map','Follow the places, encounters, and converging paths of Echo of the Abyss. Every pin leads back to the story.')}<div class="map-toolbar"><div class="map-filters" role="group" aria-label="Map pin types"><button data-map-type="all" aria-pressed="true">All pins</button>${Object.entries(kinds).map(([key,name])=>`<button data-map-type="${key}" aria-pressed="false"><span aria-hidden="true">${icons[key]}</span> ${name}</button>`).join('')}</div><label class="map-session">Chapter <select id="map-session"><option value="all">All prologues</option><option value="forest">Takina &amp; Yndrial</option><option value="stables">Juan &amp; Caelen</option></select></label></div><div class="map-layout"><section class="map-canvas" aria-label="Interactive Mistledale campaign sketch"><div class="map-topline"><span>MISTLEDALE &amp; THE MOONSEA RIDE</span><span id="map-zoom" aria-live="polite">100%</span></div><div class="map-viewport" tabindex="0" role="group" aria-label="Map. Drag to pan; use arrow keys to move, plus and minus to zoom, or zero to reset." aria-describedby="map-help"><svg id="campaign-map" viewBox="0 0 1100 720" xmlns="http://www.w3.org/2000/svg" aria-label="Campaign map of Mistledale"><image href="assets/mistledale.svg" width="1100" height="720"/><g id="map-pins"></g></svg></div><div class="map-controls" role="group" aria-label="Map view controls"><button id="map-zoom-in" aria-label="Zoom in">+</button><button id="map-zoom-out" aria-label="Zoom out">−</button><button id="map-reset">Reset view</button></div><p id="map-help">Drag to explore · + / − to zoom · 0 to reset</p><div class="map-legend"><span><i class="place"></i> Place</span><span><i class="event"></i> Event</span><span><i class="party"></i> Party</span><span class="map-approx">◌ Approximate area</span></div></section><aside class="map-sidebar" aria-label="Campaign map locations"><section id="map-detail" aria-live="polite" aria-atomic="true"></section><div class="map-list-head"><h2>On this map</h2><span id="map-count" aria-live="polite"></span></div><div id="map-list"></div></aside></div><div class="map-notes"><p><strong>A sketch of the story so far.</strong> This original regional illustration is not to scale. Roads, river, and woodland are simplified. Event markers are arranged for readability: town pins do not identify buildings, and road pins do not establish an encounter’s exact location along the Moonsea Ride.</p><p>Character origins will appear when they are established in the campaign. No birthplaces have been assumed.</p><details><summary>Map credits &amp; setting</summary><p>Original campaign sketch for Echo of the Abyss. Setting references: Ashabenford in Mistledale, the Moonsea Ride, the River Ashaba, and Cormanthor. <a href="https://www.dndbeyond.com/resources/1782-map-of-faerun" target="_blank" rel="noopener">Explore the official Faerûn map ↗</a></p><p>Echo of the Abyss is unofficial Fan Content permitted under the <a href="https://company.wizards.com/en/legal/fancontentpolicy" target="_blank" rel="noopener">Fan Content Policy</a>. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.</p></details></div></div>`;
  }
  function renderPins() {
    const pins=visible();
    root.querySelector('#map-pins').innerHTML=pins.map(p=>`${p.anchor?`<path class="map-leader" d="M${p.anchor.join(' ')} L${p.x} ${p.y}"/>`:''}<g class="map-pin ${p.type}" data-pin="${p.id}" transform="translate(${p.x} ${p.y})" role="button" tabindex="0" aria-label="${safe(p.name)}" aria-pressed="${p.id===state.selected}" aria-controls="map-detail"><title>${safe(p.name)} · ${safe(p.precision)}</title><circle class="pin-halo" r="25"/><circle class="pin-core" r="17"/><text text-anchor="middle" dominant-baseline="central" aria-hidden="true">${icons[p.type]}</text></g>`).join('');
    root.querySelector('#map-list').innerHTML=pins.length?pins.map(p=>`<button class="map-location" data-select="${p.id}" aria-pressed="${p.id===state.selected}" aria-controls="map-detail"><span class="map-kind ${p.type}" aria-hidden="true">${icons[p.type]}</span><span><strong>${safe(p.name)}</strong><small>${safe(p.precision)}</small></span><span aria-hidden="true">↗</span></button>`).join(''):`<p class="map-empty">${state.type==='origin'?'No character origins recorded yet. Birthplaces will be added when the campaign establishes them.':'No pins match this chapter and type. Try another filter.'}</p>`;
    root.querySelector('#map-count').textContent=`${pins.length} ${pins.length===1?'pin':'pins'}`;
    root.querySelectorAll('[data-pin]').forEach(el=>{el.onclick=()=>select(el.dataset.pin);el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();select(el.dataset.pin)}}});
    root.querySelectorAll('[data-select]').forEach(el=>el.onclick=()=>select(el.dataset.select));
  }
  function renderDetail() {
    const p=visible().find(p=>p.id===state.selected);
    root.querySelector('#map-detail').innerHTML=p?`<div class="map-detail-image" style="background-image:url('${p.type==='party'?'assets/stables-0.webp':p.id==='wagon'||p.id==='stream'||p.id==='moonsea'?'assets/forest-0.webp':'assets/stables-0.webp'}')"><span>${kinds[p.type]}</span></div><div class="map-detail-copy"><div class="eyebrow">${safe(p.precision)}</div><h2>${safe(p.name)}</h2><p>${safe(p.summary)}</p><div class="map-detail-links">${p.sessions.map(id=>`<a href="#session/${id}">Read ${id==='forest'?'Takina &amp; Yndrial':'Juan &amp; Caelen'} <span>→</span></a>`).join('')}${p.entries.map(id=>{const entry=entries.find(e=>e.id===id);return `<a href="#entry/${id}">${safe(entry.name)} <span>↗</span></a>`}).join('')}</div>${p.characters.length?`<div class="map-characters">${p.characters.map(id=>{const person=party.find(c=>c.id===id);return `<a href="#character/${id}"><img src="${person.image}" alt=""/>${safe(person.name)}</a>`}).join('')}</div>`:''}<a class="map-permalink" href="#map/${p.id}">Link to this pin ↗</a></div>`:'<div class="map-detail-copy"><div class="eyebrow">The next chapter</div><h2>More places to discover.</h2><p>Choose another filter to return to the known locations.</p></div>';
  }
  function select(id) {
    state.selected=id;
    root.querySelectorAll('[data-pin],[data-select]').forEach(el=>el.setAttribute('aria-pressed',String((el.dataset.pin||el.dataset.select)===id)));
    renderDetail();
    // Keep the selected pin shareable without rebuilding the map or losing focus.
    history.replaceState(null,'',`#map/${id}`);
  }
  function filter() {
    const pins=visible();if(!pins.some(p=>p.id===state.selected))state.selected=pins[0]?.id;
    root.querySelectorAll('[data-map-type]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.mapType===state.type)));
    if(state.selected)history.replaceState(null,'',`#map/${state.selected}`);else history.replaceState(null,'','#map');
    renderPins();renderDetail();
  }
  function applyView() {
    const scale=1100/view.w; view.x=Math.min(1100-view.w,Math.max(0,view.x));view.y=Math.min(720-view.h,Math.max(0,view.y));
    svg.setAttribute('viewBox',`${view.x} ${view.y} ${view.w} ${view.h}`);
    root.querySelector('#map-zoom').textContent=`${Math.round(scale*100)}%`;
    root.querySelector('#map-zoom-in').disabled=scale>=3.99;
    root.querySelector('#map-zoom-out').disabled=scale<=1.01;
  }
  function zoom(factor) {
    const scale=Math.max(1,Math.min(4,1100/view.w*factor));const w=1100/scale,h=720/scale;
    view={x:view.x+(view.w-w)/2,y:view.y+(view.h-h)/2,w,h};applyView();
  }
  function mount() {
    root=document.querySelector('.map-page');if(!root)return;
    svg=root.querySelector('#campaign-map');view={x:0,y:0,w:1100,h:720};drag=null;
    renderPins();renderDetail();applyView();
    root.querySelectorAll('[data-map-type]').forEach(el=>el.onclick=()=>{state.type=el.dataset.mapType;filter()});
    root.querySelector('#map-session').onchange=e=>{state.session=e.target.value;filter()};
    root.querySelector('#map-zoom-in').onclick=()=>zoom(1.35);
    root.querySelector('#map-zoom-out').onclick=()=>zoom(1/1.35);
    root.querySelector('#map-reset').onclick=()=>{view={x:0,y:0,w:1100,h:720};applyView()};
    const viewport=root.querySelector('.map-viewport');
    viewport.onkeydown=e=>{
      if(e.target.closest('[data-pin]')&&['Enter',' '].includes(e.key))return;
      if(e.target!==viewport&&!e.target.closest('[data-pin]'))return;
      if(['+','=','-','0','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){
        e.preventDefault();e.stopPropagation();
        if(e.key==='+'||e.key==='=')zoom(1.35);else if(e.key==='-')zoom(1/1.35);else if(e.key==='0'){view={x:0,y:0,w:1100,h:720};applyView()}else{const dx=e.key==='ArrowLeft'?-1:e.key==='ArrowRight'?1:0,dy=e.key==='ArrowUp'?-1:e.key==='ArrowDown'?1:0;view.x+=dx*view.w*.12;view.y+=dy*view.h*.12;applyView()}
      }
    };
    viewport.onpointerdown=e=>{
      if(e.target.closest('[data-pin]')||e.button!==0)return;
      const bounds=svg.getBoundingClientRect();const pixelsPerUnit=Math.min(bounds.width/view.w,bounds.height/view.h);
      drag={id:e.pointerId,x:e.clientX,y:e.clientY,view:{...view},pixelsPerUnit};viewport.setPointerCapture(e.pointerId);viewport.classList.add('dragging');
    };
    viewport.onpointermove=e=>{if(!drag||e.pointerId!==drag.id)return;view.x=drag.view.x-(e.clientX-drag.x)/drag.pixelsPerUnit;view.y=drag.view.y-(e.clientY-drag.y)/drag.pixelsPerUnit;applyView()};
    const end=()=>{drag=null;viewport.classList.remove('dragging')};viewport.onpointerup=end;viewport.onpointercancel=end;viewport.onlostpointercapture=end;
  }
  window.CampaignMap={page,mount};
})();
