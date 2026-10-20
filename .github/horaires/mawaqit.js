// Récupère le calendrier des prières de la mosquée Ettaouba (Evere) sur Mawaqit
// et l'enregistre dans adhkar/horaires.json pour l'app Mes Adhkar.
const fs = require("fs");
const WORDS = ["ettaouba", "evere", "tawba", "taouba"]; // recherche de la mosquée sur Mawaqit
const UA = { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1", "Accept-Language": "fr-BE,fr;q=0.9" };
async function findSlug(log) {
  let old = null; try { old = JSON.parse(fs.readFileSync(OUT, "utf8")).slug } catch (e) {}
  const found = [];
  for (const w of WORDS) {
    try {
      const r = await fetch("https://mawaqit.net/api/2.0/mosque/search?word=" + encodeURIComponent(w), { headers: UA });
      const j = await r.json();
      for (const m of (Array.isArray(j) ? j : [])) found.push({ w, slug: m.slug, name: m.name, loc: m.localisation || m.label || "" });
    } catch (e) { log.push(w + ": " + e) }
  }
  log.push(...found.map(f => [f.w, f.slug, f.name, f.loc].join(" | ")));
  const ok = found.find(f => /evere/i.test(f.loc + " " + f.name + " " + f.slug) && /ta[ow]u?ba|tawb/i.test(f.name + " " + f.slug))
    || found.find(f => /evere/i.test(f.loc + " " + f.slug) && /1140/.test(f.loc + f.slug));
  return ok ? ok.slug : old;
}
const OUT = "adhkar/horaires.json";

function grab(html, name) { // extrait l'objet JSON qui suit « name = »
  const i = html.search(new RegExp("\\b" + name + "\\s*=\\s*\\{"));
  if (i < 0) return null;
  let j = html.indexOf("{", i), depth = 0, str = null, esc = false;
  for (let k = j; k < html.length; k++) {
    const c = html[k];
    if (str) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === str) str = null; continue; }
    if (c === '"' || c === "'") str = c;
    else if (c === "{") depth++;
    else if (c === "}" && --depth === 0) return JSON.parse(html.slice(j, k + 1));
  }
  return null;
}

(async () => {
  const log = [];
  const SLUG = await findSlug(log);
  let res = { slug: SLUG, checked: new Date().toISOString() };
  try {
    if (!SLUG) throw new Error("mosquée introuvable");
    const r = await fetch("https://mawaqit.net/fr/" + SLUG, { headers: UA });
    const html = await r.text();
    const conf = grab(html, "confData");
    if (!conf || !Array.isArray(conf.calendar) || conf.calendar.length !== 12) {
      res.error = "calendrier introuvable";
      res.status = r.status; res.len = html.length;
      res.keys = conf ? Object.keys(conf) : null;
      const t = html.match(/<title>([^<]*)<\/title>/); res.title = t && t[1];
      const at = html.indexOf("confData"); res.snippet = at >= 0 ? html.slice(at, at + 600) : html.slice(0, 600);
    } else {
      res = { mosque: conf.name || "Mosquée Ettaouba", slug: SLUG, checked: res.checked, calendar: conf.calendar, jumua: conf.jumua || null, sample: conf.times || null, shuruq: conf.shuruq || null };
    }
  } catch (e) { res.error = String(e); }
  if (res.error) res.search = log.slice(0, 60);
  // On ne remplace pas un bon calendrier par une erreur
  if (res.error && fs.existsSync(OUT)) { try { if (JSON.parse(fs.readFileSync(OUT, "utf8")).calendar) { console.log("Erreur, ancien calendrier gardé :", res); return; } } catch (e) {} }
  const old = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : "";
  const strip = s => s.replace(/"checked":"[^"]*",?/, "");
  const next = JSON.stringify(res);
  if (strip(old) !== strip(next)) fs.writeFileSync(OUT, next);
  console.log(res.error ? res : "Calendrier OK : " + res.mosque);
})();
