import { writeFileSync } from "node:fs";
import { projects } from "../src/data/projects.js";
import { SITE_URL } from "../src/siteConfig.js";

const pages = [
  "/",
  "/about",
  "/skills",
  "/experience",
  "/projects",
  "/education",
  "/cv",
  "/contact",
];
const projectPages = projects.map((project) => "/projects/" + project.slug);
const today = new Date().toISOString().slice(0, 10);

const entries = [...pages, ...projectPages].map(
  (path) =>
    "  <url>\n    <loc>" + SITE_URL + path + "</loc>\n    <lastmod>" + today + "</lastmod>\n  </url>"
);

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  entries.join("\n") +
  "\n</urlset>\n";

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log("sitemap.xml written with " + entries.length + " pages");