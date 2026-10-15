# MyPersoVidRev on your phone (PWA)

## 1. Put the folder online (free, one time, ~5 minutes)
Pick ONE option. Screens may look slightly different from these steps.

**Netlify Drop (easiest)**
1. Unzip `MyPersoVidRev-PWA.zip` on a computer (or use a phone file manager).
2. Open https://app.netlify.com/drop in a browser and sign up / log in (free).
3. Drag the unzipped folder (the one containing index.html) onto the page.
4. Netlify gives you an address ending in `.netlify.app`. Open it on your phone.

**GitHub Pages**
1. Create a free GitHub account and a new public repository.
2. Upload all the files from the folder (index.html, manifest.webmanifest, sw.js, the three icons).
3. In the repository: Settings > Pages > deploy from the main branch, root folder.
4. Open the address GitHub shows you (https://yourname.github.io/reponame/) on your phone.

## 2. Install it on Android
1. Open the address in **Chrome** on your phone.
2. Tap the three-dot menu, then **Install app** (or **Add to Home screen**).
3. Open **VidRev** from your home screen. It launches full screen like a normal app.
4. Tap Settings, paste your Gemini API key, check the model names, and tap Save (once).

## 3. Everyday use
Edit in CapCut, export, open VidRev, tap the upload box (your gallery opens), pick the video, review.

## Updating later
Replace index.html in your hosting with the new version. In sw.js change the cache version (`mpvr-v2` to `mpvr-v3`, and so on) so phones pick up the new copy. Your key and saved prompts stay on the phone.

## Good to know
- Your API key is not inside any file. Each device enters its own key in Settings.
- Settings and saved prompt versions live in that phone's Chrome. Clearing Chrome's data erases them, so keep a copy of prompts you like.
- Anyone who finds your web address can open the app, but it does nothing without their own key.

## New in this version
- **Copy caption** button under the caption in Draft review.
- **Model fallback list** in Settings: one model ID per line; the app moves to the next one when a model is out of quota, busy or retired.
- **Export / Import versions** in Settings. Leave "Include API key" unticked unless you really need it, and never upload a backup file to GitHub.
- **Share to VidRev** (optional): in your gallery or CapCut, tap Share and pick VidRev. After updating the files on GitHub, uninstall VidRev from your phone and install it again from Chrome once, so Android registers the Share option.
