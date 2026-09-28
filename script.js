(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const syncTheme = () => {
    const light = root.dataset.theme === 'light';
    toggle.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} theme`);
    toggle.title = toggle.getAttribute('aria-label');
    toggle.firstElementChild.textContent = light ? '◐' : '☼';
  };
  toggle.hidden = false;
  syncTheme();
  toggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch (_) { /* Switching still works without storage. */ }
    syncTheme();
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
  const dialog = document.querySelector('#project-dialog');
  const imageDialog = document.querySelector('#image-dialog');
  if (typeof dialog.showModal !== 'function') return;
  const syncScrollLock = () => document.body.classList.toggle('modal-open', !!document.querySelector('dialog[open]'));

  // Use the same keyboard and focus behavior for both modal layers.
  function setupDialog(modal, closeButton) {
    let opener;
    modal.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const controls = [...modal.querySelectorAll('button, a[href], [tabindex="0"]')]
        .filter(el => !el.disabled && !el.hidden && el.getClientRects().length);
      const first = controls[0], last = controls[controls.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !controls.includes(active))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (active === last || !controls.includes(active))) {
        event.preventDefault(); first.focus();
      }
    });
    closeButton.addEventListener('click', () => modal.close());
    modal.addEventListener('click', event => {
      const bounds = modal.getBoundingClientRect();
      if (event.target === modal && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) modal.close();
    });
    modal.addEventListener('close', () => {
      syncScrollLock();
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    });
    return trigger => {
      opener = trigger;
      modal.showModal();
      modal.scrollTop = 0;
      syncScrollLock();
      modal.querySelector('h2').focus();
    };
  }
  const openDetails = setupDialog(dialog, dialog.querySelector('.close-dialog'));
  const openViewer = setupDialog(imageDialog, imageDialog.querySelector('.close-image'));
  const stage = imageDialog.querySelector('.image-stage');
  const viewerImage = document.querySelector('#viewer-image');
  const zoomButton = imageDialog.querySelector('.image-zoom');
  const thumbnailList = imageDialog.querySelector('.image-thumbnails');
  let gallery = [], imageIndex = 0;

  function resetZoom() {
    stage.classList.remove('is-zoomed');
    zoomButton.textContent = 'Actual size';
    zoomButton.setAttribute('aria-pressed', 'false');
    stage.scrollTo(0, 0);
  }
  function selectImage(index) {
    imageIndex = (index + gallery.length) % gallery.length;
    const selected = gallery[imageIndex];
    viewerImage.src = selected.src;
    viewerImage.alt = selected.alt;
    document.querySelector('#image-title').textContent = selected.title;
    document.querySelector('#gallery-status').textContent = `Screenshot ${imageIndex + 1} of ${gallery.length}`;
    [...thumbnailList.children].forEach((button, i) => button.setAttribute('aria-current', String(i === imageIndex)));
    resetZoom();
  }
  function showImages(trigger, images, index = 0) {
    gallery = images;
    thumbnailList.replaceChildren();
    images.forEach((item, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', `Show ${item.title}, screenshot ${i + 1}`);
      const img = document.createElement('img');
      img.src = item.src; img.alt = ''; img.width = 100; img.height = 48;
      button.append(img);
      button.addEventListener('click', () => selectImage(i));
      thumbnailList.append(button);
    });
    imageDialog.querySelector('.gallery-prev').hidden = images.length < 2;
    imageDialog.querySelector('.gallery-next').hidden = images.length < 2;
    selectImage(index);
    openViewer(trigger);
  }
  zoomButton.addEventListener('click', () => {
    const zoomed = stage.classList.toggle('is-zoomed');
    zoomButton.textContent = zoomed ? 'Fit image' : 'Actual size';
    zoomButton.setAttribute('aria-pressed', String(zoomed));
    stage.scrollTo(0, 0);
  });
  imageDialog.querySelector('.gallery-prev').addEventListener('click', () => selectImage(imageIndex - 1));
  imageDialog.querySelector('.gallery-next').addEventListener('click', () => selectImage(imageIndex + 1));
  imageDialog.addEventListener('keydown', event => {
    // In actual-size mode, arrow keys retain native scrolling for detailed reading.
    if (gallery.length < 2 || stage.classList.contains('is-zoomed')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); selectImage(imageIndex + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });

  document.querySelectorAll('.project').forEach(project => {
    const sourceLinks = [...project.querySelectorAll('[data-project-image]')];
    const images = sourceLinks.map(link => ({ src: link.getAttribute('href'), alt: link.querySelector('img').alt, title: link.dataset.title }));
    function bindImageLink(link, index = 0) {
      link.setAttribute('aria-haspopup', 'dialog');
      link.setAttribute('aria-controls', 'image-dialog');
      link.addEventListener('click', event => {
        // Preserve new-tab and native full-image navigation.
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault(); showImages(link, images, index);
      });
    }
    sourceLinks.forEach(bindImageLink);
    project.querySelectorAll('[data-open-image]').forEach(link => bindImageLink(link));
    const details = project.querySelector('details');
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'details-button';
    button.innerHTML = 'Project details <span aria-hidden="true">↗</span>';
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'project-dialog');
    const title = project.querySelector('h3').textContent.trim();
    button.setAttribute('aria-label', `Project details: ${title}`);
    details.before(button); details.hidden = true;
    button.addEventListener('click', () => {
      document.querySelector('#dialog-title').textContent = title;
      const content = document.querySelector('#dialog-body'); content.replaceChildren();
      const intro = document.createElement('p');
      intro.textContent = project.querySelector('.project-sub').nextElementSibling.textContent;
      content.append(intro);
      if (images.length) {
        const gallerySection = document.createElement('div'); gallerySection.className = 'detail-gallery';
        const heading = document.createElement('h3'); heading.textContent = 'Project screenshots'; gallerySection.append(heading);
        sourceLinks.forEach((source, index) => {
          const link = source.cloneNode(true); link.removeAttribute('data-project-image');
          bindImageLink(link, index); gallerySection.append(link);
        });
        const hint = document.createElement('p'); hint.textContent = 'Select a screenshot to enlarge. Use Actual size to inspect interface details.';
        gallerySection.append(hint); content.append(gallerySection);
      }
      content.append(details.querySelector('.detail-content').cloneNode(true));
      const appLink = project.querySelector('.text-link'); if (appLink) content.append(appLink.cloneNode(true));
      openDetails(button);
    });
  });
})();
