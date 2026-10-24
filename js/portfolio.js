'use strict';
(() => {
  const data = window.PORTFOLIO;
  const content = document.querySelector('#content');
  const page = document.body.dataset.page;
  const id = new URLSearchParams(location.search).get('id');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  if (!data?.site || !Array.isArray(data.projects)) {
    content.innerHTML = '<h2 class="page-title">Portfolio unavailable</h2><p>Please reload the page.</p>';
    return;
  }
  const {site} = data;
  const projects = data.projects.filter(project => project.published !== false);
  const projectURL = project => `project.html?id=${encodeURIComponent(project.id)}`;
  const categoryURL = category => `category.html?id=${encodeURIComponent(category.id)}`;
  const link = (title, href, active = false) => `<a href="${esc(href)}"${active ? ' aria-current="page"' : ''}>${esc(title)}</a>`;
  const nav = site.categories.map(category => link(category.title, categoryURL(category), page === 'category' && id === category.id)).join('');
  const social = `<div class="social-navigation"><a href="mailto:${esc(site.email)}" aria-label="Email Rana"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/></svg></a><a href="https://www.instagram.com/cream_peach_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7"/></svg></a><a href="https://www.tiktok.com/@cream_peach_" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v12a5 5 0 1 1-5-5M14 3c0 5 4 6 7 6M14 3h3"/></svg></a></div>`;
  const name = esc(site.name).replace(' ', ' <br>');
  document.querySelector('#site-header').innerHTML = `<header class="artist-sidebar"><div class="artist-heading"><a class="artist-identity" href="index.html" aria-label="${esc(site.name)} home"><span class="brand-symbol" aria-hidden="true"><img src="${esc(site.logo)}" alt=""></span><h1>${name}</h1></a><p class="artist-role">${esc(site.role).replace(' &amp; ', '<br>&amp; ')}</p><a class="artist-email" href="mailto:${esc(site.email)}">${esc(site.email)}</a></div><button class="menu-toggle" aria-expanded="false" aria-controls="portfolio-navigation">Menu <span aria-hidden="true">☰</span></button><nav id="portfolio-navigation" aria-label="Portfolio navigation"><div class="category-navigation">${link('Selected work', 'index.html', page === 'home')}${nav}</div><details class="project-navigation"><summary>Browse by project</summary><div>${projects.map(p => link(p.title, projectURL(p), page === 'project' && id === p.id)).join('')}</div></details><div class="personal-navigation">${link('About', 'about.html', page === 'about')}${link('Contact', 'contact.html', page === 'contact')}</div>${social}</nav></header>`;
  const video = (project, media) => `<video controls playsinline preload="none"${media.poster ? ` poster="${esc(media.poster)}"` : ''} aria-label="${esc(media.caption || project.title)}"><source src="${esc(media.src)}" type="video/mp4">Your browser does not support video playback. <a href="${esc(media.src)}">Download animation</a>.</video>`;
  function tile(project, media, showVideo) {
    const title = media.title || project.title;
    const layout = ['full','wide','narrow','portrait'].includes(media.layout) ? media.layout : 'full';
    const visual = media.type === 'video' && showVideo ? video(project, media) : `<a class="art-link" href="${esc(projectURL(project))}"><img src="${esc(media.type === 'video' ? media.poster : media.src)}" alt="${esc(media.alt || media.caption || title)}" loading="lazy"><span class="art-hover">${esc(title)}<span>View project</span></span></a>`;
    return `<figure class="gallery-item reveal work-${layout}">${visual}<figcaption>${link(title, projectURL(project))}<span>${esc(project.subtitle)}${showVideo && project.year ? ` · ${esc(project.year)}` : ''}</span></figcaption></figure>`;
  }
  function missing(title, text) {
    document.title = `${title} — ${site.name}`;
    content.innerHTML = `<section class="empty-state"><h2 class="page-title">${esc(title)}</h2><p>${esc(text)}</p>${link('View selected work →', 'index.html')}</section>`;
  }
  if (page === 'home') {
    const selected = projects.flatMap(project => project.media.filter(media => Number.isFinite(media.homeOrder)).map(media => ({project, media}))).sort((a,b) => a.media.homeOrder - b.media.homeOrder);
    content.innerHTML = selected.length ? `<div class="work-gallery">${selected.map(({project,media}) => tile(project,media,false)).join('')}</div>` : '<p class="empty-state">Selected work is coming soon.</p>';
  }
  if (page === 'category') {
    const category = site.categories.find(c => c.id === id);
    if (!category) missing('Category not found', 'This category is unavailable.');
    else {
      document.title = `${category.title} — ${site.name}`;
      const matches = projects.flatMap(project => project.media.filter(media => (media.categories ?? project.categories).includes(id)).map(media => ({project,media})));
      content.innerHTML = `<h2 class="page-title">${esc(category.title)}</h2>` + (matches.length ? `<div class="work-gallery">${matches.map(({project,media}) => tile(project,media,true)).join('')}</div>` : '<p class="empty-state">New work is coming soon.</p>');
    }
  }
  if (page === 'project') {
    const project = projects.find(p => p.id === id);
    if (!project) missing('Project not found', 'This project is unavailable or has not been published yet.');
    else {
      content.classList.add('project-page');
      document.title = `${project.title} — ${site.name}`;
      document.querySelector('meta[name="description"]').content = project.description;
      const items = project.media.map(media => media.type === 'video' ? `<figure class="film-section reveal">${video(project,media)}<figcaption class="media-caption">${esc(media.caption)}</figcaption></figure>` : `<figure class="project-art reveal${media.layout === 'portrait' ? ' narrow-art' : ''}"><button class="enlarge-image" data-fullsize="${esc(media.src)}" data-caption="${esc(media.caption || media.alt)}" aria-label="Enlarge ${esc(media.alt || media.caption)}"><img src="${esc(media.src)}" alt="${esc(media.alt || media.caption)}" loading="lazy"><span>View full size</span></button><figcaption>${esc(media.caption)}</figcaption></figure>`).join('');
      const current = projects.indexOf(project);
      const previous = projects[(current - 1 + projects.length) % projects.length];
      const next = projects[(current + 1) % projects.length];
      content.innerHTML = `<header class="project-header"><h2>${esc(project.title)}</h2><p>${esc(project.description)}</p></header>${items || '<p>New work is coming soon.</p>'}<nav class="project-pagination" aria-label="More projects">${projects.length > 1 ? link('← ' + previous.title, projectURL(previous)) : ''}${link('All work', 'index.html')}${projects.length > 1 ? link(next.title + ' →', projectURL(next)) : ''}</nav>`;
    }
  }
  content.insertAdjacentHTML('beforeend', `<footer class="site-footer"><span>© <span class="year">${new Date().getFullYear()}</span> ${esc(site.name)}</span><a href="#content">Back to top ↑</a></footer>`);
})();
