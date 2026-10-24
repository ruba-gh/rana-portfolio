'use strict';
const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#portfolio-navigation');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation?.classList.contains('open')){navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.focus();}});
const activeProject=navigation?.querySelector('.project-navigation [aria-current="page"]');if(activeProject)activeProject.closest('details').open=true;
const lightbox=document.querySelector('.lightbox');let imageTrigger=null;
document.querySelectorAll('[data-fullsize]').forEach(button=>button.addEventListener('click',()=>{imageTrigger=button;const image=lightbox.querySelector('img');image.src=button.dataset.fullsize;image.alt=button.dataset.caption;lightbox.querySelector('.lightbox-caption').textContent=button.dataset.caption;lightbox.showModal();document.body.classList.add('lightbox-open');}));
lightbox?.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',event=>{if(event.target===lightbox){const r=lightbox.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)lightbox.close();}});
lightbox?.addEventListener('close',()=>{document.body.classList.remove('lightbox-open');imageTrigger?.focus({preventScroll:true});});
if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.025,rootMargin:'0px 0px 65px 0px'});document.documentElement.classList.add('motion-enabled');document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();})));
