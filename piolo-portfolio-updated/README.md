# Piolo L. Bernardino — Portfolio

A dependency-free HTML, CSS, and JavaScript redesign for the existing `/piolobernardino/` GitHub Pages site.

## Files

- `index.html`: semantic page content with real project screenshots in browser frames.
- `assets/projects/`: local screenshots — `erfa-sign-in.png`, `paperpulse-dashboard.png`, `faculty-elog-logbook.png`, `laboratory-borrower-slip.png` (relative paths, work under `/piolobernardino/`).
- `styles.css`: responsive dark and light themes, screenshot frames, education layout, gallery/viewer styles, focus states, and reduced-motion support.
- `script.js`: persistent theme preference, accessible project dialogs, and an accessible screenshot viewer with thumbnails, keyboard navigation, and focus management.
- `favicon.svg`: personal monogram.
- `profile.jfif` and the four PDFs: unchanged original assets.

## Preview

Open `index.html` in a browser, or run `python -m http.server 8000` from this directory and visit `http://localhost:8000/`. No install or build step is required.

## GitHub Pages deployment

1. Copy the contents of this folder into the root of the existing `kyojin03/piolobernardino` repository. Keep the image and PDF filenames unchanged.
2. Review the changes, then commit and push when ready. This delivery has not committed, pushed, or published anything.
3. In the repository's Settings → Pages, retain the existing working deployment configuration. If using branch deployment, select the branch containing these files and `/ (root)` (the source repository currently uses `main`).
4. After GitHub Pages finishes deployment, visit `https://kyojin03.github.io/piolobernardino/` and verify the theme toggle, project details, photo, résumé, and certificates.

All local links are relative, so the site works beneath `/piolobernardino/`. No SPA routing, framework, external font, or build configuration is needed.

## Content decisions

Current role (Hero, About, Experience): Learning Management Associate | Technical Lead | LMS Lead — Open Learning, Good Samaritan Colleges, with the supplied description of LMS operations, technical leadership, faculty/user support, and digital learning improvement. Laboratory operations, records, tracking, and reporting are retained only as expanded operational responsibilities. Employment dates, contact details, Optum healthcare experience, and certificate labels came from the original repository. No LET qualification, teaching license, proficiency percentages, fabricated outcomes, metrics, repository links, or guessed URLs were added.

Screenshot mapping (labels + visible application names + supplied URLs):

- `erfa-sign-in.png` → eRFA — Electronic Request for Approval → https://kyojin03.github.io/erfa/#/login
- `paperpulse-dashboard.png` → OVPAA PaperPulse — Document Tracking & Digital Archive Management System → https://kyojin03.github.io/Paperpulse/
- `faculty-elog-logbook.png` → Faculty eLog — Laboratory Log In System / Logbook → https://kyojin03.github.io/kyojin03-faculty-elog-v2/
- `laboratory-borrower-slip.png` → Laboratory Borrowing Management — Laboratory Borrower Slip → https://kyojin03.github.io/Laboratory-borrowing-management/

All concept-preview labels were removed where real screenshots are shown. Screenshots keep their original appearance, quality, and aspect ratio (`width`/`height` preserved, `object-fit: contain`, no stretching). No browser tabs or bookmarks were visible, so no chrome cropping was needed. Only the four supplied live URLs are used; no URLs were guessed.

Education: Bachelor of Science in Information Technology (no institution invented — none was confirmed in the source) and Professional Education — 18 Units Completed at Good Samaritan Colleges (described only as completed units; not a degree, license, or LET qualification; no dates invented). The About section notes both while keeping systems development, workflow automation, and technical support central.

Privacy: the screenshots may show real records and the institutional sign-in address piolobernardino@goodsam.edu.ph. The owner confirmed authorization for public use and requested no blurring, redaction, or alteration, so screenshots are published as supplied.

Without JavaScript, the content, navigation, downloads, and native expandable project details remain usable. The theme button appears only when JavaScript is available. Theme storage failures do not prevent switching themes.

## Validation

Tested with headless Chromium at 320, 390, 768, and 1440 pixel widths using the `/piolobernardino/` URL prefix:

- No horizontal document overflow or elements extending outside the viewport.
- Original photo loaded; résumé and all three certificate PDFs returned successfully with valid PDF signatures.
- Every internal section link resolves.
- Résumé download completed with its original filename.
- Light theme persisted after reload.
- All four project dialogs opened, kept keyboard focus within the dialog, closed with Escape, and restored focus to their opening button. Each dialog includes a project-screenshot gallery with thumbnails.
- Screenshot viewer opened from cards, captions, and dialog galleries; Escape closed it, focus returned to the opener, arrow keys moved between screenshots, Actual size aided interface reading, and mobile viewing worked.
- Close button and mobile dialog scrolling worked.
- All four screenshots plus the profile photo loaded; résumé and all three certificate PDFs returned 200.
- Every internal section link (including new #education) resolves.
- Résumé download completed with its original filename.
- Light theme persisted after reload.
- No JavaScript errors or failed local network requests.
- Desktop and mobile screenshots inspected in dark and light themes.
- Original PDFs/photo verified present; new PNGs verified at 320, 390, 768, and 1440px with no document overflow.

Limitations: testing used headless Chromium emulation, not physical mobile devices, Safari, Firefox, or a screen reader. Live GitHub Pages deployment and external application behavior were not tested. No JavaScript-disabled retest was run after this update; the previous baseline passed it. No publishing was performed.
