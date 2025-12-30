const https = require('https');
const http = require('http');
const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');

const cssUrl = 'https://fonts.googleapis.com/css2?family=Space+Mono&display=swap';
const destDir = path.join(__dirname, '..', 'public', 'fonts', 'SpaceMono');

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, { headers: { 'User-Agent': 'node' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(fetchText(res.headers.location));
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${url} - Status ${res.statusCode}`));
        return;
      }
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
  });
}

function downloadFile(url, outPath) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(downloadFile(res.headers.location, outPath));
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url} - Status ${res.statusCode}`));
        return;
      }
      const fileStream = fsSync.createWriteStream(outPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => fileStream.close(resolve));
      fileStream.on('error', (err) => reject(err));
    });
    req.on('error', reject);
  });
}

async function main() {
  try {
    await fs.mkdir(destDir, { recursive: true });
    console.log(`Fetching CSS from ${cssUrl}`);
    const css = await fetchText(cssUrl);

    const urlRegex = /url\((https?:[^)]+)\)/g;
    const matches = Array.from(css.matchAll(urlRegex));
    let localCss = css;

    for (let i = 0; i < matches.length; i++) {
      const full = matches[i][1].trim().replace(/^["']|["']$/g, '');
      const u = new URL(full);
      let fileName = path.basename(u.pathname) || `font-${i}`;
      const outPath = path.join(destDir, fileName);
      console.log(`Downloading ${full} -> ${outPath}`);
      await downloadFile(full, outPath);
      localCss = localCss.split(full).join(`/fonts/SpaceMono/${fileName}`);
    }

    const cssOut = path.join(destDir, 'space-mono.css');
    await fs.writeFile(cssOut, localCss, 'utf8');
    console.log(`Wrote local CSS to ${cssOut}`);
    console.log('Done.');
  } catch (err) {
    console.error('Error:', err);
    process.exitCode = 1;
  }
}

if (require.main === module) main();
