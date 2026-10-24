# Rana Alghamdi — Artist Portfolio

The latest artwork-led portfolio: compact navigation, original artwork, responsive galleries and individual project pages.

## Open in VS Code

1. In VS Code, open the Command Palette: **Cmd+Shift+P** on Mac or **Ctrl+Shift+P** on Windows.
2. Choose **Git: Clone**, then paste this repository’s HTTPS URL from GitHub’s **Code** button.
3. Choose a local folder, then **Open** the cloned repository.
4. Open `index.html` directly in your browser, or install the recommended **Live Server** extension and choose **Open with Live Server**.

To save online: use the Source Control panel, review changes, enter a commit message, choose **Commit**, then **Sync Changes**. Sign in to GitHub when VS Code requests it.

## Files to edit

- `index.html`: homepage / selected work.
- `characters.html`, `animation.html`, `illustration.html`: category galleries.
- Individual project `.html` files: project descriptions, images and videos.
- `about.html`, `contact.html`: biography and contact information.
- `styles.css`: layout, fonts, colors, responsiveness and animations.
- `script.js`: phone menu, full-size image viewer and motion handling.
- `assets/`: local artwork, fonts and videos.

All pages can be edited directly. Alternatively, edit `generate_pages.py` and run `python3 generate_pages.py` to regenerate HTML. **Regenerating overwrites manual HTML changes.** Python is optional; the finished website requires no build tools or installation.

## GitHub Pages

In repository **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then **Save**. Changes pushed to main publish automatically. `.nojekyll` keeps this a plain static website.

The portfolio supports phones, tablets and desktop screens, reduced-motion preferences, keyboard navigation, full-size artwork viewing and video playback. Fonts are included locally with their SIL license files. Artwork and animation belong to Rana Alghamdi.
