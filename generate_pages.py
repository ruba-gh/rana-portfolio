"""Rebuild the static HTML portfolio. No dependency installation required."""
from pathlib import Path
from html import escape
ROOT=Path(__file__).resolve().parent
MAIL='rna23.gh@gmail.com'
PROJECTS={
'doppelganger':dict(title='Doppelgänger',category='Frame-by-frame animation & character design',year='2022 / 2024',description='Character design and hand-drawn animation from the Doppelgänger project.',media=[('image','art-9.webp','A moonlit forest, painted in deep blues and violet.'),('image','art-2.webp','Character lineup · 2024'),('video','film-4.mp4','art-9.webp')]),
'backrooms':dict(title='The Backrooms',category='Frame-by-frame animation & character design',year='2022',description='Character design and frame-by-frame animation for a class project.',media=[('image','art-3.webp','Character design · 2022'),('video','film-3.mp4','film-3.jpg')]),
'beezy':dict(title='Beezy',category='Frame-by-frame animation',year='2024',description='A personal animation project exploring hand-drawn character movement.',media=[('video','film-5.mp4','film-5.jpg')]),
'who-to-drown-with':dict(title='Who to drown with',category='Animatic',year='2022',description='A personal animatic, told through drawn frames.',media=[('video','film-0.mp4','film-0.jpg')]),
'salty':dict(title='Salty',category='Animatic',year='2023',description='An animatic created as a class project.',media=[('video','film-2.mp4','film-2.jpg')]),
'black-death':dict(title='Black Death',category='Illustration',year='',description='A personal illustrated poster.',media=[('image','art-1.webp','Black Death · Personal project')]),
'sketchbook':dict(title='Sketchbook',category='Character exploration & illustration',year='',description='A collection of personal illustration, silhouette practice and character studies.',media=[('image','art-5.webp','Costume and silhouette exploration · 2024'),('image','art-4.webp','Character exploration'),('video','film-6.mp4','art-11.webp'),('image','art-0.webp','A canvas of characters')]),
'social-animatic':dict(title='Social media animatic',category='Animatic',year='2022',description='A short character animatic created around a TikTok sound.',media=[('video','film-1.mp4','film-1.jpg')]),
}

def sidebar(active):
 def nav(label,href,key):return f'<a href="{href}"'+(' aria-current="page"' if active==key else '')+f'>{label}</a>'
 return '''<header class="artist-sidebar"><div class="artist-heading"><a class="artist-identity" href="index.html" aria-label="Rana Alghamdi home"><span class="brand-symbol" aria-hidden="true"><img src="assets/logo.png" alt=""></span><h1>Rana <br>Alghamdi</h1></a><p class="artist-role">Visual development<br>& concept creation</p><a class="artist-email" href="mailto:'''+MAIL+'''">'''+MAIL+'''</a></div><button class="menu-toggle" aria-expanded="false" aria-controls="portfolio-navigation">Menu <span aria-hidden="true">☰</span></button><nav id="portfolio-navigation" aria-label="Portfolio navigation"><div class="category-navigation">'''+''.join([nav('Selected work','index.html','home'),nav('Character design','characters.html','characters'),nav('Animation & animatics','animation.html','animation'),nav('Illustration','illustration.html','illustration')])+'''</div><details class="project-navigation"><summary>Browse by project</summary><div>'''+''.join(nav(p['title'],slug+'.html',slug) for slug,p in PROJECTS.items())+'''</div></details><div class="personal-navigation">'''+nav('About','about.html','about')+nav('Contact','contact.html','contact')+'''</div><div class="social-navigation"><a href="mailto:'''+MAIL+'''" aria-label="Email Rana"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/></svg></a><a href="https://www.instagram.com/cream_peach_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7"/></svg></a><a href="https://www.tiktok.com/@cream_peach_" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v12a5 5 0 1 1-5-5M14 3c0 5 4 6 7 6M14 3h3"/></svg></a></div></nav></header>'''

def image_link(slug,file,alt,title=None,caption=True,cls=''):
 p=PROJECTS[slug]
 return f'''<figure class="gallery-item reveal {cls}"><a class="art-link" href="{slug}.html"><img src="assets/{file}" alt="{escape(alt)}" loading="lazy"><span class="art-hover">{escape(title or p['title'])}<span>View project</span></span></a>'''+(f'''<figcaption><a href="{slug}.html">{escape(title or p['title'])}</a><span>{escape(p['category'])}</span></figcaption>''' if caption else '')+'</figure>'

def video(file,poster,label):return f'<video controls playsinline preload="none" poster="assets/{poster}" aria-label="{escape(label)}"><source src="assets/{file}" type="video/mp4">Your browser does not support video playback. <a href="assets/{file}">Download the animation</a>.</video>'

def write_page(name,title,active,content,mainclass=''):
 html=f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#ffffff"><title>{escape(title)} — Rana Alghamdi</title><meta name="description" content="Visual development, character design and hand-drawn animation by Saudi concept creator Rana Alghamdi."><link rel="icon" type="image/png" href="assets/logo.png?v=2">
<link rel="apple-touch-icon" href="assets/logo.png?v=2"><link rel="preload" href="assets/fonts/manrope-normal-400.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="styles.css"><script src="script.js" defer></script></head><body><a class="skip-link" href="#content">Skip to artwork</a>{sidebar(active)}<main id="content" class="portfolio-content {mainclass}" tabindex="-1">{content}<footer class="site-footer"><span>© <span class="year">2026</span> Rana Alghamdi</span><a href="#content">Back to top ↑</a></footer></main><dialog class="lightbox" aria-label="Full-size artwork"><button class="lightbox-close" aria-label="Close full-size artwork">Close ×</button><img alt=""><p class="lightbox-caption"></p></dialog></body></html>'''
 (ROOT/name).write_text(html)

home=image_link('doppelganger','art-9.webp','Moonlit forest environment from Doppelgänger',caption=True,cls='opening-art')
home+='<div class="gallery-pair wide-left">'+image_link('doppelganger','art-2.webp','Doppelgänger character lineup',title='Doppelgänger — characters')+image_link('black-death','art-1.webp','Black Death illustrated poster')+'</div>'
home+=image_link('backrooms','art-3.webp','Two views of The Backrooms character',cls='drawing-sheet')
home+='<div class="gallery-pair wide-right">'+image_link('sketchbook','art-5.webp','Costume and helmet concept studies',title='Character explorations')+image_link('who-to-drown-with','film-0.jpg','Greyscale ocean storyboard',title='Who to drown with')+'</div>'
home+=image_link('sketchbook','art-0.webp','A detailed illustrated canvas of characters',title='A canvas of characters',cls='portrait-work')
write_page('index.html','Selected work','home',home)

chars='<h2 class="page-title">Character design</h2>'+image_link('doppelganger','art-2.webp','Doppelgänger character lineup')+image_link('backrooms','art-3.webp','The Backrooms character designs')+'<div class="gallery-pair wide-left">'+image_link('sketchbook','art-5.webp','Helmet and costume exploration',title='Shape & silhouette')+image_link('sketchbook','art-4.webp','A character in a dark purple dress',title='Character study')+'</div>'+image_link('sketchbook','art-11.webp','Character head shape and expression sketches',title='Sketchbook')
write_page('characters.html','Character design','characters',chars)
anim='<h2 class="page-title">Animation & animatics</h2>'
for slug,file,poster in [('doppelganger','film-4.mp4','art-9.webp'),('beezy','film-5.mp4','film-5.jpg'),('backrooms','film-3.mp4','film-3.jpg'),('who-to-drown-with','film-0.mp4','film-0.jpg'),('salty','film-2.mp4','film-2.jpg'),('social-animatic','film-1.mp4','film-1.jpg')]:
 p=PROJECTS[slug];anim+=f'<section class="film-section reveal"><h3><a href="{slug}.html">{p["title"]}</a></h3>'+video(file,poster,p['title'])+f'<p class="media-caption">{p["category"]} · {p["year"]}</p></section>'
write_page('animation.html','Animation & animatics','animation',anim)
write_page('illustration.html','Illustration','illustration','<h2 class="page-title">Illustration</h2>'+image_link('black-death','art-1.webp','Black Death poster',cls='portrait-work')+image_link('sketchbook','art-0.webp','Rana’s detailed character doodle canvas',title='A canvas of characters',cls='portrait-work'))

for i,(slug,p) in enumerate(PROJECTS.items()):
 content=f'<header class="project-header"><h2>{escape(p["title"])}</h2><p>{escape(p["description"])}</p></header>'
 for typ,file,cap in p['media']:
  if typ=='image':
   narrow=' narrow-art' if file in ['art-1.webp','art-0.webp','art-4.webp'] else ''
   content+=f'<figure class="project-art reveal{narrow}"><button class="enlarge-image" data-fullsize="assets/{file}" data-caption="{escape(cap)}" aria-label="Enlarge {escape(cap)}"><img src="assets/{file}" alt="{escape(cap)}" loading="lazy"><span>View full size</span></button><figcaption>{escape(cap)}</figcaption></figure>'
  else:content+='<div class="film-section reveal">'+video(file,cap,p['title'])+'</div>'
 slugs=list(PROJECTS);prev=slugs[(i-1)%len(slugs)];nxt=slugs[(i+1)%len(slugs)]
 content+=f'<nav class="project-pagination" aria-label="More projects"><a href="{prev}.html">← {escape(PROJECTS[prev]["title"])}</a><a href="index.html">All work</a><a href="{nxt}.html">{escape(PROJECTS[nxt]["title"])} →</a></nav>'
 write_page(slug+'.html',p['title'],slug,content,'project-page')

about='''<section class="about-layout"><div class="about-drawing"><img src="assets/art-0.webp" alt="Rana’s illustrated canvas of imaginative characters"></div><div class="about-text"><h2>Hi, I’m Rana.</h2><p>I’m a Saudi concept creator with a love for visual storytelling, character design and frame-by-frame animation.</p><p>Growing up across Indonesia, Austria and Italy, I discovered that cartoons, toys and imagination could connect us long before words did. Those experiences still find their way into the worlds and characters I create.</p><p>With every new project, I bring my own perspective—and leave a little trace of my story behind.</p><p><a class="inline-link" href="mailto:rna23.gh@gmail.com">rna23.gh@gmail.com</a></p></div></section>'''
write_page('about.html','About','about',about)
contact='''<section class="contact-page"><h2>Let’s make something.</h2><p>For projects, collaborations or just to say hello:</p><a class="email-link" href="mailto:rna23.gh@gmail.com">rna23.gh@gmail.com ↗</a><div class="contact-links"><a href="https://www.instagram.com/cream_peach_/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/@cream_peach_" target="_blank" rel="noopener noreferrer">TikTok ↗</a></div><p class="closing-line">Let’s bring back magic, frame by frame.</p></section>'''
write_page('contact.html','Contact','contact',contact)
print('Generated',len(list(ROOT.glob('*.html'))),'static pages.')
