# A little birthday universe for Moon ☾

A responsive, static birthday surprise website for a long-distance partner. It includes a typewriter letter, animated star field, photo placeholders, local photo preview uploads, a hidden birthday wish with confetti, and a music toggle ready for your own MP3.

## Preview it on your computer

1. Extract the ZIP file.
2. Open `index.html` in Chrome, Edge, Firefox, or Safari.
3. Scroll through the page and try the surprise button. Select photos from the gallery cards to preview them.

## Add your photos so everyone who opens the public link sees them

The on-page photo chooser is a local preview: it reads your selected image in your current browser, but it does not upload it to the website. For the photos to be included in the shareable website:

1. Put your chosen image files in the `assets` folder, e.g. `moon-1.jpg`, `moon-2.jpg`, `moon-3.jpg`.
2. Open `index.html` in a text editor.
3. Find the three image tags with `id="preview1"`, `id="preview2"`, and `id="preview3"`.
4. Change their `src` values to your filenames, for example:
   - `<img id="preview1" src="assets/moon-1.jpg" alt="A favourite memory">`
   - `<img id="preview2" src="assets/moon-2.jpg" alt="A favourite memory">`
   - `<img id="preview3" src="assets/moon-3.jpg" alt="A favourite memory">`
5. Save the file. The gallery cards still let visitors choose local images for their own preview, but the images you set here will be the default photos everyone sees.

You can replace the captions in the `<span class="photo-caption">...</span>` elements too.

## Add your own music

Only use music you have permission to share. Put an MP3 called `our-song.mp3` in the `assets` folder. In `index.html`, find the audio element near the bottom and uncomment this line:

`<source src="assets/our-song.mp3" type="audio/mpeg">`

The music starts only when the visitor presses **Play our song**, because browsers block autoplay audio. You may rename the file and update the path to match.

## Personalise the letter and hidden message

- In `script.js`, edit the `const letter = \`...\`;` text.
- In `index.html`, edit the final hidden wish inside `<div class="secret-message" id="secretMessage" ...>`.
- To change the displayed sender, search for `Chaand` in `index.html`.
- The design is in `style.css`; colours are at the top inside `:root`.

## Publish free and get a shareable link

### Option A — Netlify Drop (quickest for a static site)
1. Make your edits and place your photos/music in the right folders.
2. Visit **https://app.netlify.com/drop**.
3. Sign in or create a free Netlify account if prompted.
4. Drag the **extracted folder's contents** (the files `index.html`, `style.css`, `script.js`, and the `assets` folder) onto the page. If the page rejects a folder, zip the site contents and follow the current upload instructions shown by Netlify.
5. Netlify will publish the site and show you a public URL ending in `netlify.app`. Copy that link and send it to Moon.
6. Keep your project folder safe. If you change the website later, redeploy the updated site through Netlify.

### Option B — GitHub Pages
1. Create/sign in to GitHub and create a new public repository.
2. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder contents to the repository root.
3. Open **Settings → Pages** and choose deployment from the `main` branch and root folder.
4. Save and wait for the published `github.io` URL to appear. Share that URL.

Free hosting plans and interfaces can change. A hosted link is not created by this ZIP itself; you must publish it using one of these services. Avoid putting private information in a public site, and remember anyone with the link may be able to view the page.

## Files

- `index.html` — page structure and birthday copy
- `style.css` — responsive styling and animations
- `script.js` — star field, typewriter effect, photo previews, hidden surprise and confetti
- `assets/photo-1.svg` etc. — replaceable gallery placeholders
