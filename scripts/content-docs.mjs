import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { createHash } from 'node:crypto'
import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '..'))
const write = process.argv.includes('--write')
const read = (name) => JSON.parse(readFileSync(`content/${name}.json`, 'utf8'))
const profile = read('profile')
const source = read('sources')
const digest = createHash('sha256').update(readFileSync(`public${profile.resumePath}`)).digest('hex')
assert.equal(digest, source.resume.sha256, 'Resume changed: update source provenance and review content.')
assert.equal(profile.resumePath, source.resume.publicPath)
assert(existsSync(`public${profile.portrait}`), 'Missing portrait')
const contact = read('contact')
assert.equal(contact.items.find((item) => item.label === 'Email').value, profile.email, 'Contact email differs from profile')
assert.equal(contact.items.find((item) => item.label === 'Phone').value, profile.phone, 'Contact phone differs from profile')
const projects = read('projects')
assert.equal(new Set(projects.map((p) => p.title)).size, projects.length, 'Duplicate project titles')
for (const project of projects) {
  for (const field of ['title', 'description', 'period', 'category', 'icon']) assert.equal(typeof project[field], 'string', `Project requires ${field}`)
  assert.equal(typeof project.selected, 'boolean')
  assert(Array.isArray(project.technologies) && Array.isArray(project.highlights))
  if (project.github) assert(new URL(project.github).protocol === 'https:')
}
const iconSource = readFileSync('components/content-icons.ts', 'utf8')
function validate(value) {
  if (Array.isArray(value)) return value.forEach(validate)
  if (!value || typeof value !== 'object') return
  for (const [key, item] of Object.entries(value)) {
    if (key === 'icon') assert(iconSource.includes(item), `Missing presentation icon ${item}`)
    if (typeof item === 'string' && /^(https?:|mailto:|tel:)/.test(item)) new URL(item)
    validate(item)
  }
}
const names = readdirSync('content').filter((name) => name.endsWith('.json')).map((name) => name.slice(0, -5)).sort()
const humanize = (key) => key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase())
function render(value, depth = 2) {
  if (Array.isArray(value)) {
    if (value.every((item) => typeof item !== 'object')) return value.map((item) => `- ${item}`).join('\n') + '\n'
    return value.map((item, index) => `${'#'.repeat(Math.min(depth, 6))} ${item.title || item.name || item.category || item.degree || item.label || `Record ${index + 1}`}\n\n${render(item, depth + 1)}`).join('\n')
  }
  if (value && typeof value === 'object') return Object.entries(value).map(([key, item]) => {
    if (typeof item === 'object') return `\n${'#'.repeat(Math.min(depth, 6))} ${humanize(key)}\n\n${render(item, depth + 1)}`
    return `- **${humanize(key)}:** ${item === '' ? 'Not specified; do not infer.' : item}\n`
  }).join('')
  return String(value) + '\n'
}
for (const name of names) {
  const data = read(name)
  validate(data)
  const markdown = `# ${humanize(name)}\n\n[Master index](../README.md) · [Runtime data](../../content/${name}.json)\n\nGenerated from runtime data by \`npm run docs:sync\`. Edit the JSON and regenerate; do not edit this snapshot independently. Factual basis and unresolved details: [source policy](../source-policy.md).\n\n${render(data)}`
  const path = `docs/sections/${name}.md`
  if (write) writeFileSync(path, markdown)
  else assert.equal(readFileSync(path, 'utf8'), markdown, `${path} is stale; run npm run docs:sync`)
}
console.log(`Validated ${names.length} content files, resume fingerprint, asset paths and ${write ? 'updated' : 'synchronized'} section documentation.`)
