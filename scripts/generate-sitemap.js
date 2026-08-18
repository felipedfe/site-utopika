const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.utopika.com.br';
const APP_FILE = path.join(__dirname, '..', 'src', 'App.js');
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'sitemap.xml');

const appSource = fs.readFileSync(APP_FILE, 'utf8');

const routes = [...appSource.matchAll(/path=["']([^"']+)["']/g)]
  .map((match) => match[1])
  .filter((route) => !route.includes('*') && !route.includes(':'));

const urls = routes
  .map((route) => `  <url><loc>${BASE_URL}${route === '/' ? '/' : route}</loc></url>`)
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(OUTPUT_FILE, sitemap);

console.log(`sitemap.xml gerado com ${routes.length} URLs.`);
