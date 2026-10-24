# Rana Alghamdi portfolio

A buildless HTML/CSS/JavaScript portfolio. Hosted by GitHub Pages. Open `index.html` locally or use VS Code Live Server. No npm install or page generator is needed.

## Where to edit

| File / folder | Purpose |
| --- | --- |
| `data/projects.js` | **All projects, media, categories, homepage selection, and shared identity** |
| `project.html` | One shared project detail page: `project.html?id=doppelganger` |
| `category.html` | One shared category gallery: `category.html?id=characters` |
| `index.html` | Homepage shell; selected artwork comes from the data file |
| `about.html`, `contact.html` | Editable About and Contact text |
| `js/portfolio.js` | Shared header, navigation, galleries, and project renderer |
| `js/interactions.js` | Mobile menu, image viewer, fade-in, video behavior |
| `css/styles.css` | All styling and responsive rules |
| `assets/projects/<project-id>/` | Each project's images, videos, and posters |
| `assets/brand/` | Logo and icon assets |
| `assets/fonts/` | Local font files |
| `assets/archive/` | Retained original artwork that is not currently displayed |
| `scripts/validate.mjs` | Check the data and file references with `node scripts/validate.mjs` |

The small old project/category HTML files are compatibility redirects. Keep them so old bookmarks continue to work. There is no need to copy them for new projects. `CNAME` preserves the custom domain.

## Add a project

1. Create `assets/projects/my-project/` and put the artwork there.
2. Open `data/projects.js` and add an object inside `projects` (separate objects with commas):

```js
{
  "id": "my-project",
  "title": "My project",
  "subtitle": "Visual development",
  "year": "2026",
  "description": "A short introduction to this project.",
  "published": true,
  "categories": ["characters", "illustration"],
  "media": [
    {
      "id": "character-sheet",
      "type": "image",
      "src": "assets/projects/my-project/character-sheet.webp",
      "alt": "Character poses and expression studies",
      "caption": "Character development",
      "homeOrder": 10,
      "layout": "full"
    },
    {
      "id": "animation",
      "type": "video",
      "src": "assets/projects/my-project/animation.mp4",
      "poster": "assets/projects/my-project/poster.jpg",
      "caption": "Animation test",
      "categories": ["animation"],
      "homeOrder": null,
      "layout": "full"
    }
  ]
}
```

The new page and navigation link appear automatically at `project.html?id=my-project`. Project array order controls project navigation; media array order controls artwork order on the project page.

## Choose where artwork appears

- **Which project?** Place the media object inside that project's `media` array. Move it to another project by moving the object. Update `src` if you also move the asset file.
- **Which categories?** Project `categories` supplies the defaults. A media object's `categories` overrides them: `["characters"]`, `["illustration", "characters"]`, or `[]` to hide that item from category galleries. It still appears inside its project. Existing media has explicit categories so videos and still images can be placed separately.
- **Homepage?** Set media `homeOrder` to a number, smallest first. Set it to `null` to remove it from the homepage. A featured video uses its poster on the homepage and plays inside its project/category.
- **Tile title?** Optional media `title` overrides the project title in galleries.
- **Layout?** `full` is full width; `wide` and `narrow` form an asymmetric 7/5 pair; `portrait` is centered and narrower. On phones all tiles become one column.
- **Hide an entire project?** Set `published` to `false`; it disappears from navigation, galleries, and public project rendering. The files still exist in this public repo, so this is not private storage.
- **Add a category?** Add `{ "id": "environments", "title": "Environments" }` to `site.categories`, then use that ID in project/media categories. A navigation item and gallery appear automatically.
- **Logo, name, role, shared email?** Edit `site` at the top of the file. Favicon links live in each of the five page shells. About/Contact text remains in their HTML files.

IDs must be unique, lowercase, and use letters/numbers/hyphens. Paths are relative to the repository root, with exact capitalization. Preserve the `window.PORTFOLIO =` line and closing semicolon.

## Publish changes

Run `node scripts/validate.mjs` if Node.js is available, then commit and push to `main`. GitHub Pages serves the files directly. Before local edits, run `git pull origin main` to get the latest structure.
