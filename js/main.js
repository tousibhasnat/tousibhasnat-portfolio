/* ===== Content config — edit here only. null = hidden or disabled. ===== */
const SITE = {
  github: "https://github.com/tousibhasnat",
  linkedin: "https://www.linkedin.com/in/tousibhasnat/",
  email: "tousibhasnat@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1fgaR2INBaN4UtemCXOIFGe3j1GwQXEdL/view?usp=drive_link",
  openToInternships: true,
  profileImage: "assets/profile.jpg",
  skills: [
    { group: "Mobile development", items: [{n:"Flutter",focus:true},{n:"Dart",focus:true}] },
    { group: "Programming languages", items: [{n:"C"},{n:"C++"}] },
    { group: "Data & backend", items: [{n:"Firebase"},{n:"SQLite"},{n:"REST API integration"}] }
  ],
  projects: [
    { title: "Task Manager App",
      /* Edit after the repo README is written. Do not add features that are not in the code. */
      description: "A Flutter task manager app that demonstrates state management with the Provider package.",
      tags: ["Flutter","Dart","Provider"],
      repo: "https://github.com/tousibhasnat/Task-Manager-app",
      live: null, screenshots: [], highlights: [] },
    { title: "Student Attendance Tracker",
      /* Edit after the repo README is written. Do not add features that are not in the code. */
      description: "A Flutter app for tracking student attendance, built with Provider for state management.",
      tags: ["Flutter","Dart","Provider"],
      repo: "https://github.com/tousibhasnat/Student-Attendance-Tracker",
      live: null, screenshots: [], highlights: [] }
  ]
};

const ok = u => typeof u === "string" && u.trim() && u.trim() !== "#";
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const NEW = '<span class="sr"> (opens in new tab)</span>';
const ICON = {
  gh: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.500.1-3.100 0 0 1-.3 3.200 1.200a11 11 0 0 1 5.800 0C17.300 4.900 18.300 5.200 18.300 5.200c.6 1.600.2 2.800.1 3.100.8.8 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.4.8 1.100.8 2.200v3.200c0 .3.2.7.8.6A11.500 11.500 0 0 0 23.500 12 11.500 11.500 0 0 0 12 .5z"/></svg>',
  li: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 20.5h-3.600v-5.600c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900v5.700H9.300V9h3.400v1.600h.1c.5-.9 1.600-1.800 3.400-1.800 3.600 0 4.300 2.400 4.300 5.500v6.200zM5.300 7.400a2.100 2.100 0 1 1 0-4.200 2.100 2.100 0 0 1 0 4.200zM7.100 20.500H3.600V9h3.500v11.500zM22.200 0H1.800C.8 0 0 .8 0 1.700v20.600c0 .9.8 1.700 1.800 1.700h20.400c1 0 1.800-.8 1.800-1.700V1.700C24 .8 23.200 0 22.200 0z"/></svg>',
  mail: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5h20v14H2V5zm2 2v.5l8 5.500 8-5.500V7H4zm16 3-8 5.500L4 10v7h16v-7z"/></svg>'
};
const SECTIONS = [["about","About"],["skills","Skills"],["projects","Projects"],["education","Education"],["contact","Contact"]];

/* nav */
const navLinks = SECTIONS.map(([id,l]) => `<a href="#${id}">${l}</a>`);
document.getElementById("dnav").innerHTML = navLinks.map(a => `<li>${a}</li>`).join("");
document.getElementById("mnav").innerHTML = navLinks.join("");
const btn = document.getElementById("menuBtn"), mnav = document.getElementById("mnav");
const closeMenu = (refocus) => { mnav.classList.remove("open"); btn.setAttribute("aria-expanded","false"); if (refocus) btn.focus(); };
btn.addEventListener("click", () => { const o = mnav.classList.toggle("open"); btn.setAttribute("aria-expanded", String(o)); });
mnav.addEventListener("click", e => { if (e.target.closest("a")) closeMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && mnav.classList.contains("open")) closeMenu(true); });

/* scroll-spy */
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) document.querySelectorAll("nav a[href^='#']").forEach(a => {
    if (a.getAttribute("href") === "#" + e.target.id) a.setAttribute("aria-current","location"); else a.removeAttribute("aria-current");
  });
}), { rootMargin: "-45% 0px -50% 0px" });
SECTIONS.forEach(([id]) => spy.observe(document.getElementById(id)));

/* hero */
if (!SITE.openToInternships) document.getElementById("status").remove();
const gh = document.getElementById("ghHero"); gh.href = SITE.github;
if (ok(SITE.profileImage)) {
  const t = document.getElementById("tag");
  t.classList.add("photo");
  t.innerHTML = `<img src="${esc(SITE.profileImage)}" alt="Photo of Mohammed Tousib Hasnat" width="96" height="96">`;
  const cc = document.querySelector(".codecard");
  cc.removeAttribute("aria-hidden");
  cc.querySelector(".cbar").setAttribute("aria-hidden", "true");
  cc.querySelector("pre").setAttribute("aria-hidden", "true");
}
document.getElementById("resumeSlot").innerHTML = ok(SITE.resumeUrl)
  ? `<a class="btn ghost" href="${esc(SITE.resumeUrl)}" target="_blank" rel="noopener noreferrer">Get My Resume${NEW}</a>`
  : `<button class="btn ghost" type="button" aria-disabled="true" title="Resume coming soon">Resume coming soon</button>`;
document.querySelector("[aria-disabled=true]")?.addEventListener("click", e => e.preventDefault());

/* skills */
document.getElementById("skillGrid").innerHTML = SITE.skills.map(g =>
  `<div class="card"><h3>${esc(g.group)}</h3><ul class="chips">${g.items.map(i =>
    `<li>${esc(i.n)}${i.focus ? "<small>Current focus</small>" : ""}</li>`).join("")}</ul></div>`).join("");

/* projects */
document.getElementById("projGrid").innerHTML = SITE.projects.map(p => {
  const media = p.screenshots.length
    ? `<div class="shots" tabindex="0" role="group" aria-label="${esc(p.title)} screenshots">${p.screenshots.map(s => `<img src="${esc(s.src)}" alt="${esc(s.alt)}" width="1280" height="800" loading="lazy">`).join("")}</div>`
    : `<div class="shot">Screenshots coming soon</div>`;
  const hl = p.highlights.length ? `<ul class="hl">${p.highlights.map(h => `<li>${esc(h)}</li>`).join("")}</ul>` : "";
  const live = ok(p.live) ? `<a class="btn primary" href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">Live demo${NEW}</a>` : "";
  return `<article class="card proj">${media}<h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>
    <ul class="chips">${p.tags.map(t => `<li>${esc(t)}</li>`).join("")}</ul>${hl}
    <div class="acts"><a class="btn ghost" href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer">${ICON.gh}View on GitHub${NEW}</a>${live}</div></article>`;
}).join("");

/* contact */
const links = [`<a class="card clink" href="${esc(SITE.github)}" target="_blank" rel="noopener noreferrer">${ICON.gh}<div>GitHub<span>@tousibhasnat</span></div>${NEW}</a>`];
if (ok(SITE.linkedin)) links.push(`<a class="card clink" href="${esc(SITE.linkedin)}" target="_blank" rel="noopener noreferrer">${ICON.li}<div>LinkedIn<span>@tousibhasnat</span></div>${NEW}</a>`);
if (ok(SITE.email)) links.push(`<div class="card clink">${ICON.mail}<div class="copyrow"><div>Email<span><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></span></div><button type="button" id="copyBtn">Copy email</button><span class="sr" id="copyMsg" aria-live="polite"></span></div></div>`);
document.getElementById("contactLinks").innerHTML = links.join("");
document.getElementById("copyBtn")?.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(SITE.email); document.getElementById("copyMsg").textContent = "Email copied"; }
  catch { document.getElementById("copyMsg").textContent = "Copy failed. Select the email text instead."; }
});

/* scroll reveal + card spotlight */
document.documentElement.classList.add("js");
const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll("h2, .lede, .card, .about p").forEach((el, i) => { el.classList.add("rv"); el.style.transitionDelay = (i % 3) * 80 + "ms"; rv.observe(el); });
document.querySelectorAll(".card").forEach(c => c.addEventListener("pointermove", e => { const r = c.getBoundingClientRect(); c.style.setProperty("--mx", (e.clientX - r.left) + "px"); c.style.setProperty("--my", (e.clientY - r.top) + "px"); }));

document.getElementById("copy").textContent = "© " + new Date().getFullYear() + " Mohammed Tousib Hasnat";
