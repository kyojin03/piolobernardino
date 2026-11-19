# Piolo L. Bernardino — Portfolio

A light-first, dependency-free HTML/CSS/JavaScript portfolio for the existing `/piolobernardino/` GitHub Pages site. Dark mode remains fully styled and the selected theme persists.

## Deploy to the existing repository

1. Extract the **entire ZIP**, preserving the `assets/projects/` folders. The ZIP contains `index.html` at its root.
2. Copy the extracted files into the root of `kyojin03/piolobernardino`, replacing the website files. Keep the original PDF and photo filenames unchanged.
3. Review locally. When you decide to publish, commit and push to the branch used by your existing GitHub Pages configuration.
4. Keep the existing working Pages setup. For branch-based publishing, Settings → Pages should use that branch and `/ (root)`; the inspected repository branch is `main`.
5. After deployment completes, check `https://kyojin03.github.io/piolobernardino/` and verify the screenshots, links, theme, gallery, and downloads.

No commit, push, publication, or changes to the external project applications were performed. Live deployment has not been verified.

## Local preview

Open `index.html`, or run `python -m http.server 8000` inside the extracted directory and visit `http://localhost:8000/`. There is no install or build step. All local asset paths are relative and work under `/piolobernardino/`.

## Included files

- `index.html`: page content, four projects, About, Experience, Education, Certificates, and Contact.
- `styles.css`: light/dark palettes, responsive layout, focus states, and reduced-motion support.
- `script.js`: persistent theme selection, subtle entrance effects, project details, and image gallery.
- `favicon.svg`: personal monogram.
- `assets/projects/`: all four original screenshots, unchanged.
- `profile.jfif`: original profile photo, unchanged.
- `Piolo Bernardino CV.pdf`, `CSC_Certificate.pdf`, `Certiport_Certificate.pdf`, `pio.pdf`: original PDFs, unchanged.

## Exact project mapping

| Project | Local screenshot | Supplied live URL |
| --- | --- | --- |
| eRFA | `assets/projects/erfa-sign-in.png` | https://erfa.gsc.edu.ph/#/login |
| OVPAA PaperPulse | `assets/projects/paperpulse-dashboard.png` | https://kyojin03.github.io/Paperpulse/ |
| Faculty eLog | `assets/projects/faculty-elog-logbook.png` | https://kyojin03.github.io/kyojin03-faculty-elog-v2/ |
| Laboratory Borrowing Management | `assets/projects/laboratory-borrower-slip.png` | https://kyojin03.github.io/Laboratory-borrowing-management/ |

No repository URLs, statistics, or project outcomes were invented. The borrowing application's HTML, CSS, JavaScript, and Google Apps Script integration were verified from its publicly supplied page source.

## Screenshot handling

All four screenshots preserve the supplied pixels, proportions, and application content. No browser tabs or bookmarks were present, so no cropping was needed. Portfolio frames sit outside the images. Below-the-fold images are lazy-loaded.

Privacy details flagged before inclusion: the eRFA screenshot displays an institutional sign-in email; PaperPulse displays document IDs, subjects, office details, names, dates, and aggregate counts. The subsequent brief explicitly requested all four named screenshot files, and this version includes them unchanged. These details will be publicly visible if this version is deployed. They were not silently redacted or turned into portfolio performance claims.

## Content provenance

- The latest supplied brief establishes the current role: Learning Management Associate | Technical Lead | LMS Lead — Open Learning, Good Samaritan Colleges.
- Laboratory Custodian / Systems Support is a separate former role. Its confirmed August 2025 start is retained. No transition date or current-role start date was supplied, so none is invented. The original résumé still contains older role information and is intentionally unchanged.
- Optum employment retains November 2024–January 2025 and the prior factual responsibilities.
- BSIT institution and study years (Nueva Ecija University of Science and Technology, 2020–2024) are confirmed in the original résumé.
- Professional Education is described as **18 completed units at Good Samaritan Colleges**, without an invented completion date, degree, teaching license, or LET claim.
- Existing site email, phone, GitHub, photo, certificate links, and résumé filename are preserved.

## Gallery and accessibility

Selecting a main screenshot or a project-dialog screenshot opens a gallery of the four actual screenshots. Thumbnails and previous/next buttons select images. Left/right arrow keys navigate while images are fitted. Actual Size preserves original pixels and allows native scrolling or swiping; arrow keys scroll the image region when it has focus. Fit image restores the full preview. Escape closes the uppermost dialog and restores focus to its trigger; closing the image viewer leaves an underlying project dialog open.

Without JavaScript, content and native expandable project details remain readable, and screenshot links open the original local images. Navigation, downloads, and live links work. Theme controls are hidden when scripting is unavailable. No form, tracking, external fonts, or runtime dependencies were added.

## Validation performed

- Chromium at 320, 390, 768, and 1440px in **both** themes: no horizontal document overflow or out-of-bounds content.
- All four screenshot assets loaded with their original proportions.
- Desktop and mobile screenshots visually inspected in light and dark themes.
- Default light theme and persistent light/dark preference verified after reload.
- All four project detail dialogs and the four-image gallery verified: thumbnails, previous/next via arrow keys, Actual Size, scrolling, keyboard focus containment, nested Escape, close buttons, and focus restoration.
- Résumé download completed with its original filename. All certificate links resolved to valid PDFs.
- All internal anchors, relative assets, and exact live-link mappings checked.
- All four external project entry pages returned HTTP 200; authenticated/internal application behavior was not exercised.
- No JavaScript errors or failed local requests.
- No-JavaScript content/details and reduced-motion behavior checked.
- Original image/PDF assets and all four supplied screenshots verified unchanged.
- Full ZIP extraction checked; the extracted website is served under `/piolobernardino/` for a final browser smoke test.

Limitations: testing used Chromium emulation, not physical phones, Safari, Firefox, or a screen reader. Actual GitHub Pages publication and authenticated project functionality were not tested.
