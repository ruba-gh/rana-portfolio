import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'data/projects.js'),'utf8'),context);
const {site,projects} = context.window.PORTFOLIO;
const ids = new Set();
const categoryIds = new Set();
const validId = id => typeof id === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id);
const file = value => {
  assert(typeof value === 'string' && value.startsWith('assets/') && !value.includes('..'), `Invalid asset path: ${value}`);
  assert(fs.statSync(path.join(root,value)).isFile(), `Missing asset: ${value}`);
};
file(site.logo);
for (const category of site.categories) {
  assert(validId(category.id) && !categoryIds.has(category.id), `Invalid/duplicate category: ${category.id}`);
  assert(category.title, 'Category needs a title');categoryIds.add(category.id);
}
const checkCategories = list => {assert(Array.isArray(list),'Categories must be an array');for (const id of list) assert(categoryIds.has(id),`Unknown category: ${id}`);};
for (const project of projects) {
  assert(validId(project.id) && !ids.has(project.id),`Invalid/duplicate project: ${project.id}`);ids.add(project.id);
  assert(project.title && project.description,`Missing project text: ${project.id}`);
  checkCategories(project.categories);assert(Array.isArray(project.media),'Media must be an array');
  const mediaIds = new Set();
  for (const media of project.media) {
    assert(validId(media.id) && !mediaIds.has(media.id),`Invalid/duplicate media ID: ${project.id}/${media.id}`);mediaIds.add(media.id);
    assert(['image','video'].includes(media.type),`Unknown media type: ${media.type}`);file(media.src);
    if(media.type==='image')assert(media.alt,'Images need alternative text');
    if(media.poster)file(media.poster);
    if(media.categories !== undefined)checkCategories(media.categories);
    assert(media.homeOrder == null || Number.isFinite(media.homeOrder),'homeOrder must be a number or null');
    if(media.type==='video' && Number.isFinite(media.homeOrder))assert(media.poster,'Featured videos need posters');
    assert(['full','wide','narrow','portrait'].includes(media.layout),'Unknown media layout');
  }
}
for (const page of ['index.html','about.html','contact.html','project.html','category.html']) {
  const html=fs.readFileSync(path.join(root,page),'utf8');
  for(const match of html.matchAll(/(?:src|href)="([^"?#]+)(?:[?#][^"]*)?"/g)) {
    const ref=match[1];if(/^(https?:|mailto:|#)/.test(ref))continue;
    assert(fs.existsSync(path.join(root,ref)),`Broken reference in ${page}: ${ref}`);
  }
}
console.log(`Validated ${projects.length} projects, ${categoryIds.size} categories, all media and page references.`);
