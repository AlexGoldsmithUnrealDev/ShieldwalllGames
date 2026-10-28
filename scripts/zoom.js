/* ==========================================================================
   Screenshot zoom — progressive enhancement
   Any product capture (a <picture> inside a <figure> in <main>) can be opened
   at full size. On a phone the enlarged capture is shown wider than the screen
   so its text is readable, and the viewer pans it. Without JavaScript the
   captures simply display inline.
   ========================================================================== */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var images = Array.prototype.slice.call(document.querySelectorAll('main figure picture img'))
            .filter(function (img) { return !img.closest('dialog'); });
        if (!images.length || typeof HTMLDialogElement !== 'function') return;

        var dialog = document.createElement('dialog');
        dialog.className = 'zoom-dialog';
        dialog.setAttribute('aria-label', 'Enlarged screenshot');
        dialog.innerHTML =
            '<div class="zoom-dialog__bar">' +
                '<p class="zoom-dialog__caption"></p>' +
                '<button type="button" class="zoom-dialog__close">Close</button>' +
            '</div>' +
            '<div class="zoom-dialog__stage"><img alt="" /></div>';
        document.body.appendChild(dialog);

        var stage = dialog.querySelector('.zoom-dialog__stage');
        var zoomed = stage.querySelector('img');
        var caption = dialog.querySelector('.zoom-dialog__caption');
        var lastTrigger = null;

        function open(img, trigger) {
            var figcaption = img.closest('figure').querySelector('figcaption');
            zoomed.src = img.currentSrc || img.src;
            zoomed.alt = img.alt;
            zoomed.width = img.naturalWidth || Number(img.getAttribute('width')) || 0;
            caption.textContent = figcaption ? figcaption.textContent.trim() : '';
            lastTrigger = trigger;
            dialog.showModal();
            stage.scrollTo(0, 0);
        }

        images.forEach(function (img) {
            var figure = img.closest('figure');
            if (!figure || figure.querySelector('.zoom-trigger')) return;
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'zoom-trigger';
            button.innerHTML = '<span aria-hidden="true">⤢</span> View full size';
            button.setAttribute('aria-label', 'View full size: ' + (img.alt || 'screenshot'));
            img.closest('picture').insertAdjacentElement('afterend', button);
            figure.classList.add('is-zoomable');
            img.addEventListener('click', function () { open(img, button); });
            button.addEventListener('click', function () { open(img, button); });
        });

        dialog.querySelector('.zoom-dialog__close').addEventListener('click', function () { dialog.close(); });
        dialog.addEventListener('click', function (event) {
            if (event.target === dialog || event.target === stage) dialog.close();
        });
        dialog.addEventListener('close', function () {
            zoomed.removeAttribute('src');
            if (lastTrigger) lastTrigger.focus();
        });
    });
}());
