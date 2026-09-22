import { readFileSync, existsSync } from 'node:fs'
import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '..'))
const read = (name) => JSON.parse(readFileSync(`content/${name}.json`, 'utf8'))
const profile = read('profile')
const html = readFileSync('out/index.html', 'utf8')
const main = html.match(/<main[^>]*>(.*?)<\/main>/s)?.[1]
assert(main, 'Missing main content')
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;')
for (const id of ['hero', 'about', 'experience', 'projects', 'awards', 'contact']) assert(html.includes(`id="${id}"`), `Missing ${id} anchor`)
for (const item of read('navigation')) assert(html.includes(`id="${item.href.slice(1)}"`), `Broken navigation: ${item.href}`)
for (const project of read('projects').filter((p) => p.selected)) assert(main.includes(escape(project.title)), `Missing project: ${project.title}`)
assert(main.includes(`href="${profile.resumePath}"`), 'CV link missing')
for (const award of read('awards')) assert(main.includes(escape(award.title)), `Missing award: ${award.title}`)
for (const role of read('experience')) assert(main.includes(escape(role.organization)), `Missing organization: ${role.organization}`)
assert.deepEqual(readFileSync(`out${profile.resumePath}`), readFileSync(`public${profile.resumePath}`), 'Exported PDF differs')
assert(existsSync(`out${profile.portrait}`))
assert(existsSync('out/404.html'))
assert.equal(readFileSync('out/CNAME', 'utf8').trim(), new URL(profile.siteUrl).hostname)
assert(readFileSync('out/robots.txt', 'utf8').includes(`${profile.siteUrl}/sitemap.xml`))
assert(readFileSync('out/sitemap.xml', 'utf8').includes(profile.siteUrl))
const match = html.match(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)
assert(match, 'Missing structured data')
const graph = JSON.parse(match[1])['@graph']
assert.equal(graph.find((item) => item['@type'] === 'Person').description, profile.summary)
assert.equal(graph.find((item) => item['@type'] === 'ItemList').itemListElement.length, read('projects').filter((p) => p.selected).length)
assert(!html.includes('2.5+ years') && !html.includes('X-hack 3.0'), 'Superseded claims remain')
console.log('Static export verified: sections, selected projects, PDF bytes, portrait, 404, domain, SEO and structured data.')
