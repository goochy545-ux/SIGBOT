(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{firstName:`Marcus`,lastName:`Holloway`,email:`marcus.h@westpointeng.com`,company:`Westpoint Engineering`,jobTitle:`Senior Estimator`,phone:`+1 (604) 312-8847`,location:`—`,source:`OUTLOOK`,latitude:53.5461,longitude:-113.4938,createdAt:new Date(Date.now()-22*36e5).toISOString()},{firstName:`Priya`,lastName:`Kavanaugh`,email:`priya.k@clearwaterind.com`,company:`Clearwater Industries`,jobTitle:`Project Manager`,phone:`+1 (778) 509-3321`,location:`—`,source:`OUTLOOK`,latitude:49.2827,longitude:-123.1207,createdAt:new Date(Date.now()-22*36e5).toISOString()},{firstName:`Elena`,lastName:`Driscoll`,email:`elena.d@summitgroupco.com`,company:`Summit Group Companies`,jobTitle:`Estimating Manager`,phone:`+1 (250) 614-9982`,location:`—`,source:`OUTLOOK`,latitude:48.4284,longitude:-123.3656,createdAt:new Date(Date.now()-22*36e5).toISOString()},{firstName:`Owen`,lastName:`Beckett`,email:`owen.b@arclightmech.com`,company:`Arclight Mechanical`,jobTitle:`Operations Lead`,phone:`+1 (416) 773-2201`,location:`—`,source:`OUTLOOK`,latitude:45.5017,longitude:-73.5673,createdAt:new Date(Date.now()-22*36e5).toISOString()},{firstName:`Nadia`,lastName:`Weston`,email:`nadia.w@ironbridgefab.com`,company:`Iron Bridge Fabrication`,jobTitle:`Quality Manager`,phone:`+1 (250) 487-6613`,location:`—`,source:`OUTLOOK`,latitude:48.4284,longitude:-123.3656,createdAt:new Date(Date.now()-22*36e5).toISOString()},{firstName:`Liam`,lastName:`Ashford`,email:`liam.a@cedarstonedev.com`,company:`Cedarstone Developments`,jobTitle:`CFO`,phone:`+1 (604) 883-4156`,location:`—`,source:`OUTLOOK`,latitude:48.7767,longitude:-123.7058,createdAt:new Date(Date.now()-23*36e5).toISOString()},{firstName:`Tessa`,lastName:`Langford`,email:`tessa.l@northshoreroof.com`,company:`North Shore Roofing Co`,jobTitle:`Director`,phone:`+1 (250) 671-3390`,location:`—`,source:`OUTLOOK`,latitude:49.1666,longitude:-123.9401,createdAt:new Date(Date.now()-23*36e5).toISOString()},{firstName:`Derek`,lastName:`Malone`,email:`derek.m@horizonbuild.com`,company:`Horizon Builders`,jobTitle:`Preconstruction Manager`,phone:`+1 (604) 442-8871`,location:`—`,source:`OUTLOOK`,latitude:49.1044,longitude:-122.6609,createdAt:new Date(Date.now()-24*36e5).toISOString()},{firstName:`Rachel`,lastName:`Thornton`,email:`rachel.t@bayviewconst.com`,company:`Bayview Construction`,jobTitle:`Contracts Manager`,phone:`+1 (250) 519-7742`,location:`—`,source:`OUTLOOK`,latitude:48.7438,longitude:-123.7088,createdAt:new Date(Date.now()-24*36e5).toISOString()},{firstName:`Victor`,lastName:`Sandoval`,email:`victor.s@ridgelineltd.com`,company:`Ridgeline Limited`,jobTitle:`Preconstruction Manager`,phone:`+1 (250) 603-1198`,location:`—`,source:`OUTLOOK`,latitude:48.8612,longitude:-123.6523,createdAt:new Date(Date.now()-25*36e5).toISOString()},{firstName:`Sophie`,lastName:`Callahan`,email:`sophie.c@ridgelineltd.com`,company:`Ridgeline Limited`,jobTitle:`Project Manager`,phone:`+1 (604) 288-5541`,location:`—`,source:`OUTLOOK`,latitude:49.2488,longitude:-122.9805,createdAt:new Date(Date.now()-25*36e5).toISOString()},{firstName:`Marco`,lastName:`Reeves`,email:`marco.r@sentinelfire.com`,company:`Sentinel Fire Protection`,jobTitle:`Representative`,phone:`+1 (604) 791-3364`,location:`—`,source:`OUTLOOK`,latitude:49.227,longitude:-123.0032,createdAt:new Date(Date.now()-26*36e5).toISOString()},{firstName:`Aisha`,lastName:`Brennan`,email:`aisha.b@westvalleyeng.com`,company:`West Valley Engineering`,jobTitle:`Engineer`,phone:`+1 (415) 209-4418`,location:`San Francisco, CA`,source:`OUTLOOK`,latitude:37.7749,longitude:-122.4194,createdAt:new Date(Date.now()-48*36e5).toISOString()},{firstName:`Nathan`,lastName:`Whitmore`,email:`nathan.w@novatech.com`,company:`NovaTech Solutions`,jobTitle:`VP Engineering`,phone:`+1 (512) 334-7720`,location:`Austin, TX`,source:`OUTLOOK`,latitude:30.2672,longitude:-97.7431,createdAt:new Date(Date.now()-72*36e5).toISOString()},{firstName:`Carmen`,lastName:`Ellison`,email:`carmen.e@blueshoredev.com`,company:`Blueshore Developments`,jobTitle:`Operations Manager`,phone:`+1 (305) 621-8803`,location:`Miami, FL`,source:`OUTLOOK`,latitude:25.7617,longitude:-80.1918,createdAt:new Date(Date.now()-96*36e5).toISOString()},{firstName:`Ian`,lastName:`Mercer`,email:`ian.m@pacificedge.ca`,company:`Pacific Edge Projects`,jobTitle:`Site Manager`,phone:`+1 (604) 553-1192`,location:`Vancouver, BC`,source:`OUTLOOK`,latitude:49.2827,longitude:-123.1207,createdAt:new Date(Date.now()-120*36e5).toISOString()},{firstName:`Julia`,lastName:`Pearce`,email:`julia.p@northstarbc.ca`,company:`Northstar Building Co`,jobTitle:`Estimator`,phone:`+1 (604) 417-6638`,location:`Surrey, BC`,source:`OUTLOOK`,latitude:49.1913,longitude:-122.849,createdAt:new Date(Date.now()-144*36e5).toISOString()},{firstName:`Raj`,lastName:`Kensington`,email:`raj.k@coastalpower.ca`,company:`Coastal Power Electric`,jobTitle:`Electrician`,phone:`+1 (604) 209-3314`,location:`Burnaby, BC`,source:`OUTLOOK`,latitude:49.2488,longitude:-122.9805,createdAt:new Date(Date.now()-168*36e5).toISOString()},{firstName:`Megan`,lastName:`Harwood`,email:`megan.h@islandsurfacing.ca`,company:`Island Surfacing Inc`,jobTitle:`Admin Manager`,phone:`+1 (250) 331-8807`,location:`Nanaimo, BC`,source:`OUTLOOK`,latitude:49.1659,longitude:-123.9401,createdAt:new Date(Date.now()-192*36e5).toISOString()},{firstName:`Connor`,lastName:`Blackwell`,email:`connor.b@solidgroundca.com`,company:`Solid Ground Concrete`,jobTitle:`Foreman`,phone:`+1 (604) 882-4419`,location:`Langley, BC`,source:`OUTLOOK`,latitude:49.1044,longitude:-122.6609,createdAt:new Date(Date.now()-216*36e5).toISOString()},...Array.from({length:41},(e,t)=>({firstName:`Alex.Chris.Jordan.Taylor.Morgan.Casey.Riley.Drew.Blake.Quinn.Avery.Cameron.Dakota.Emery.Finley.Harper.Hayden.Jamie.Jesse.Kelly.Lane.Logan.Marley.Nico.Oakley.Parker.Peyton.Reese.Rowan.Sage.Sawyer.Skyler.Spencer.Sydney.Tatum.Toby.Val.Wesley.Wren.Zion.Ash`.split(`.`)[t],lastName:`Merritt.Colton.Vega.Stirling.Prescott.Henley.Wakefield.Carver.Donovan.Pemberton.Aldridge.Fairfax.Stratton.Lockwood.Ramsey.Whitfield.Clayborne.Everett.Hargrove.Sinclair.Dalton.Ashworth.Beaumont.Hartley.Ellsworth.Bancroft.Trenton.Courtland.Marsden.Sutherland.Halstead.Blackmore.Castleton.Waverly.Montrose.Kingsley.Landon.Crawford.Pembroke.Thornfield.Redmond`.split(`.`)[t],email:`${`alex.chris.jordan.taylor.morgan.casey.riley.drew.blake.quinn.avery.cameron.dakota.emery.finley.harper.hayden.jamie.jesse.kelly.lane.logan.marley.nico.oakley.parker.peyton.reese.rowan.sage.sawyer.skyler.spencer.sydney.tatum.toby.val.wesley.wren.zion.ash`.split(`.`)[t]}@${`crestline.crestline.crestline.crestline.crestline.edgemont.edgemont.silverlake.silverlake.grandview.fieldstone.stonebridge.arrowhead.ridgepoint.clearwater.highline.trailmark.vertex.cascade.alpine.skyward.matrix.pinnacle.nova.atlas.forge.keystone.sterling.patriot.vanguard.titan.apex.nexus.prism.crown.delta.echo.falcon.griffin.harbor.ironworks`.split(`.`)[t]}.com`,company:`Crestline.Crestline.Crestline.Crestline.Crestline.Edgemont.Edgemont.Silverlake.Silverlake.Grandview.Fieldstone.Stonebridge.Arrowhead.Ridgepoint.Clearwater.Highline.Trailmark.Vertex.Cascade.Alpine.Skyward.Matrix.Pinnacle.Nova.Atlas.Forge.Keystone.Sterling.Patriot.Vanguard.Titan.Apex.Nexus.Prism.Crown.Delta.Echo.Falcon.Griffin.Harbor.Ironworks`.split(`.`)[t],jobTitle:`Project Manager.Project Manager.Project Manager.Estimator.Estimator.Project Manager.Superintendent.Estimator.Project Manager.Project Manager.Coordinator.Engineer.Designer.Foreman.Inspector.Planner.Analyst.Director.Manager.Supervisor.Consultant.Advisor.Specialist.Lead.Coordinator.Technician.Operator.Assistant.Associate.Senior PM.VP Operations.Site Lead.QC Manager.Safety Officer.Scheduler.Procurement.Contracts.BIM Lead.Surveyor.Drafter.Laborer`.split(`.`)[t],phone:`+1 (${600+t}) 555-${String(1e3+t).slice(-4)}`,location:`—`,source:`OUTLOOK`,latitude:49.2+(Math.random()-.5)*2,longitude:-123.1+(Math.random()-.5)*2,createdAt:new Date(Date.now()-(240+t*24)*36e5).toISOString()}))];function t(){let t={};return e.forEach(e=>{t[e.company]=(t[e.company]||0)+1}),Object.entries(t).sort((e,t)=>t[1]-e[1])[0]?.[0]||`—`}function n(){let t={};return e.forEach(e=>{e.jobTitle&&e.jobTitle!==`—`&&(t[e.jobTitle]=(t[e.jobTitle]||0)+1)}),Object.entries(t).sort((e,t)=>t[1]-e[1])[0]?.[0]||`—`}function r(e){let t=Date.now()-new Date(e).getTime(),n=Math.floor(t/36e5);if(n<1)return`just now`;if(n<24)return`${n} hours ago`;let r=Math.floor(n/24);return`${r} day${r>1?`s`:``} ago`}function i(e){return((e.firstName?.[0]||``)+(e.lastName?.[0]||``)).toUpperCase()}var a=[`#4ade80`,`#f472b6`,`#60a5fa`,`#fbbf24`,`#a78bfa`,`#34d399`,`#fb923c`,`#818cf8`,`#f87171`,`#2dd4bf`];function o(e){let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return a[Math.abs(t)%a.length]}function s(a){let s=[...e].sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()).slice(0,5),l=t(),u=n();a.innerHTML=`
    <div class="dashboard-view">
      <!-- Stat Cards -->
      <div class="stat-cards">
        <div class="stat-card">
          <div class="stat-label">TOTAL CONTACTS</div>
          <div class="stat-value">${e.length}</div>
          <div class="stat-trend positive">↑ 100% this week</div>
          <div class="stat-icon">👥</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">TOP COMPANY</div>
          <div class="stat-value company-name">${l}</div>
          <div class="stat-trend">Most frequent</div>
          <div class="stat-icon">🏢</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">TOP ROLE</div>
          <div class="stat-value role-name">${u}</div>
          <div class="stat-trend">Most frequent</div>
          <div class="stat-icon">💼</div>
        </div>
      </div>

      <!-- Recently Added -->
      <div class="widget recently-added">
        <h3>RECENTLY ADDED</h3>
        <div class="recent-list">
          ${s.map(e=>{let t=i(e);return`
              <div class="recent-item">
                <div class="recent-left">
                  <div class="avatar" style="background: ${o(e.firstName+e.lastName)}">${t}</div>
                  <div class="recent-info">
                    <div class="recent-name">${e.firstName+` `+e.lastName}</div>
                    <div class="recent-meta">${e.company} · ${r(e.createdAt)}</div>
                  </div>
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>

      <!-- Growth Timeline -->
      <div class="widget growth-timeline">
        <h3>GROWTH TIMELINE</h3>
        <div class="chart-container">
          <canvas id="growth-chart"></canvas>
        </div>
      </div>
    </div>
  `,requestAnimationFrame(()=>c())}function c(){let t=document.getElementById(`growth-chart`);if(!t)return;t.width=t.parentElement.clientWidth,t.height=200;let n=t.getContext(`2d`),r=t.width,i=t.height,a={top:20,right:20,bottom:30,left:40},o=Date.now(),s=[];for(let t=30;t>=0;t--){let n=o-t*864e5,r=e.filter(e=>new Date(e.createdAt).getTime()<=n).length;s.push(r)}let c=Math.max(...s,10),l=[0,Math.round(c*.25),Math.round(c*.5),Math.round(c*.75),c];n.strokeStyle=`#e5e7eb`,n.lineWidth=1,n.font=`11px Inter, sans-serif`,n.fillStyle=`#9ca3af`,n.textAlign=`right`,l.forEach(e=>{let t=a.top+(1-e/c)*(i-a.top-a.bottom);n.beginPath(),n.moveTo(a.left,t),n.lineTo(r-a.right,t),n.stroke(),n.fillText(String(e),a.left-8,t+4)});let u=(r-a.left-a.right)/(s.length-1);n.beginPath(),s.forEach((e,t)=>{let r=a.left+t*u,o=a.top+(1-e/c)*(i-a.top-a.bottom);t===0?n.moveTo(r,o):n.lineTo(r,o)}),n.lineTo(a.left+(s.length-1)*u,i-a.bottom),n.lineTo(a.left,i-a.bottom),n.closePath(),n.fillStyle=`rgba(74, 222, 128, 0.08)`,n.fill(),n.beginPath(),s.forEach((e,t)=>{let r=a.left+t*u,o=a.top+(1-e/c)*(i-a.top-a.bottom);t===0?n.moveTo(r,o):n.lineTo(r,o)}),n.strokeStyle=`#4ade80`,n.lineWidth=2,n.stroke(),s.forEach((e,t)=>{if(t%5!=0&&t!==s.length-1)return;let r=a.left+t*u,o=a.top+(1-e/c)*(i-a.top-a.bottom);n.beginPath(),n.arc(r,o,3,0,Math.PI*2),n.fillStyle=`#4ade80`,n.fill()})}function l(e){e.innerHTML=`
    <div class="contacts-view">
      <div class="contacts-toolbar">
        <button class="columns-btn" id="columns-btn">Columns ▾</button>
        <div class="toolbar-right">
          <button class="export-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export ▾
          </button>
          <button class="more-btn">⋯</button>
        </div>
      </div>

      <div class="table-wrapper">
        <table class="contacts-table" id="contacts-table">
          <thead>
            <tr>
              <th class="th-check"><input type="checkbox" id="select-all" /></th>
              ${[{key:`name`,label:`NAME`},{key:`email`,label:`EMAIL`},{key:`company`,label:`COMPANY`},{key:`jobTitle`,label:`JOB ROLE`},{key:`phone`,label:`PHONE`},{key:`location`,label:`LOCATION`}].map(e=>`<th class="th-${e.key}">${e.label}</th>`).join(``)}
            </tr>
          </thead>
          <tbody id="contacts-tbody">
          </tbody>
        </table>
      </div>
    </div>
  `,u(),d()}function u(){let t=document.getElementById(`contacts-tbody`);t&&(t.innerHTML=e.map((e,t)=>{let n=i(e);return`
      <tr data-idx="${t}">
        <td class="td-check"><input type="checkbox" class="row-check" /></td>
        <td class="td-name">
          <div class="name-cell">
            <div class="avatar-sm" style="background: ${o(e.firstName+e.lastName)}">${n}</div>
            <div class="name-info">
              <span class="contact-name">${e.firstName+` `+e.lastName}</span>
              <span class="source-badge">${e.source}</span>
            </div>
          </div>
        </td>
        <td class="td-email">${e.email}</td>
        <td class="td-company">${e.company}</td>
        <td class="td-job">${e.jobTitle}</td>
        <td class="td-phone">${e.phone}</td>
        <td class="td-location">${e.location}</td>
      </tr>
    `}).join(``))}function d(){let e=document.getElementById(`select-all`);e&&e.addEventListener(`change`,()=>{document.querySelectorAll(`.row-check`).forEach(t=>t.checked=e.checked)})}var f=null,p=null;function m(e){e.innerHTML=`
    <div class="map-view">
      <div id="map-container"></div>
      <div class="map-controls">
        <button class="map-control-btn active" id="heatmap-btn">🔥 Heatmap</button>
        <button class="map-control-btn" id="home-btn">home</button>
      </div>
    </div>
  `,requestAnimationFrame(()=>h())}function h(){let t=document.getElementById(`map-container`);if(!t)return;f&&(f.remove(),f=null,p=null),f=L.map(t,{center:[49,-105],zoom:4,zoomControl:!1}),L.tileLayer(`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`,{attribution:`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>`,subdomains:`abcd`,maxZoom:19}).addTo(f),L.control.zoom({position:`bottomright`}).addTo(f),p=L.markerClusterGroup({maxClusterRadius:50,spiderfyOnMaxZoom:!0,showCoverageOnHover:!1,iconCreateFunction:e=>{let t=e.getChildCount();return L.divIcon({html:`<div class="cluster-icon">${t}</div>`,className:`custom-cluster`,iconSize:L.point(40,40)})}});let n=L.divIcon({html:`<div class="marker-dot"></div>`,className:`custom-marker`,iconSize:[14,14],iconAnchor:[7,7]});e.forEach(e=>{if(e.latitude&&e.longitude){let t=L.marker([e.latitude,e.longitude],{icon:n});t.bindPopup(`
        <div class="map-popup">
          <strong>${e.firstName} ${e.lastName}</strong><br>
          <span>${e.company}</span><br>
          <span>${e.jobTitle}</span>
        </div>
      `),p.addLayer(t)}}),f.addLayer(p),document.getElementById(`home-btn`)?.addEventListener(`click`,()=>{f.setView([49,-105],4)})}function g(){let e=document.getElementById(`add-contact-modal`);e&&e.remove();let t=document.createElement(`div`);t.id=`add-contact-modal`,t.className=`modal-overlay`,t.innerHTML=`
    <div class="modal-content">
      <div class="modal-header">
        <h2>Add Contact</h2>
        <button class="modal-close" id="modal-close-btn">✕</button>
      </div>
      <div class="modal-body">
        <div class="form-row">
          <div class="form-group">
            <label>FIRST NAME</label>
            <input type="text" placeholder="John" />
          </div>
          <div class="form-group">
            <label>LAST NAME</label>
            <input type="text" placeholder="Doe" />
          </div>
        </div>
        <div class="form-group full">
          <label>EMAIL</label>
          <input type="email" placeholder="john@example.com" />
        </div>
        <div class="form-group full">
          <label>COMPANY</label>
          <input type="text" placeholder="Acme Inc" />
        </div>
        <div class="form-group full">
          <label>JOB TITLE</label>
          <input type="text" placeholder="Software Engineer" />
        </div>
        <div class="form-group full">
          <label>WEBSITE <span class="auto-scan-badge">✨ Auto-Scan</span></label>
          <input type="url" placeholder="www.example.com" />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>PHONE</label>
            <input type="tel" placeholder="+1 555-0199" />
          </div>
          <div class="form-group">
            <label>MOBILE</label>
            <input type="tel" placeholder="+1 555-9999" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>SECTOR</label>
            <input type="text" placeholder="e.g. Construction" />
          </div>
          <div class="form-group">
            <label>BUSINESS TYPE</label>
            <input type="text" placeholder="e.g. Security Firm" />
          </div>
        </div>
        <div class="form-group full">
          <label>LOCATION / ADDRESS</label>
          <input type="text" placeholder="123 Main St, City" />
        </div>
        <div class="form-group full">
          <label>TAGS</label>
          <input type="text" placeholder="Add tags separated by commas (e.g. VIP, Client, Lead)" />
        </div>
        <div class="form-group full">
          <label>NOTES</label>
          <textarea placeholder="Add notes about this contact..." rows="3"></textarea>
        </div>
      </div>
    </div>
  `,document.body.appendChild(t),document.getElementById(`modal-close-btn`)?.addEventListener(`click`,_),t.addEventListener(`click`,e=>{e.target===t&&_()}),document.addEventListener(`keydown`,v)}function _(){let e=document.getElementById(`add-contact-modal`);e&&(e.classList.add(`closing`),setTimeout(()=>e.remove(),200)),document.removeEventListener(`keydown`,v)}function v(e){e.key===`Escape`&&_()}function y(){let e=document.getElementById(`app`);e.innerHTML=`
    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-brand">SIGBOT</div>
      <nav class="sidebar-nav">
        <a href="#" class="nav-link active" data-view="dashboard">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          Dashboard
        </a>
        <a href="#" class="nav-link" data-view="contacts">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          Contacts
          <span class="nav-badge">+</span>
        </a>
        <a href="#" class="nav-link" data-view="map">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 7 8 11.7z"/></svg>
          Map
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="sidebar-section">
          <div class="section-title">EMAIL PROVIDERS</div>
          <div class="provider-list">
            <span class="provider-dot outlook"></span> Outlook
            <span class="provider-dot gmail"></span> Gmail
            <span class="provider-dot imap"></span> IMAP
          </div>
        </div>
        <div class="sidebar-link">✉ Feedback</div>
        <div class="sidebar-link">★ Light</div>
      </div>
    </aside>

    <!-- Main content area -->
    <main class="main-area">
      <header class="top-bar">
        <div class="top-bar-left">
          <button class="hamburger" id="hamburger-btn">☰</button>
          <span class="page-label" id="page-label">DASHBOARD</span>
          <div class="search-wrapper">
            <input type="text" placeholder="Search contacts.." class="search-input" />
          </div>
        </div>
        <div class="top-bar-right">
          <button class="btn-add-contact" id="btn-add-contact">+ Add Contact</button>
          <button class="btn-secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Add Data ▾
          </button>
          <div class="user-avatar">AG</div>
        </div>
      </header>

      <div class="content" id="content">
        <!-- Views render here -->
      </div>
    </main>
  `,document.querySelectorAll(`.nav-link`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.view;b(n)})}),document.getElementById(`btn-add-contact`)?.addEventListener(`click`,()=>{g()}),document.getElementById(`hamburger-btn`)?.addEventListener(`click`,()=>{document.getElementById(`sidebar`)?.classList.toggle(`open`)}),b(`dashboard`)}function b(e){let t=document.getElementById(`content`),n=document.getElementById(`page-label`);switch(document.querySelectorAll(`.nav-link`).forEach(t=>{t.classList.toggle(`active`,t.dataset.view===e)}),n.textContent=e.toUpperCase(),document.getElementById(`sidebar`)?.classList.remove(`open`),e){case`dashboard`:s(t);break;case`contacts`:l(t);break;case`map`:m(t);break}}document.addEventListener(`DOMContentLoaded`,y);