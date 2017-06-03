// ==UserScript==
// @name        wl-post-img-size
// @namespace   wl-post-img-size
// @description Sets maximum image width in WL posts to 100% of the post width.
// @version     0.2.1
// @include     http://www.warlight.net/*
// @include     https://www.warlight.net/*
// @grant       none
// @updateURL   https://github.com/kurogetsusai/wl-post-img-size/raw/master/wl-post-img-size.user.js
// ==/UserScript==

'use strict';

/** Limits maximum size of all images.
 * @returns {void} */
function resizeImages() {
	[...document.querySelectorAll('div[id^=PostForDisplay_] img')]
		.forEach(img => img.style.maxWidth = '100%');
}

/** Binds a function to all preview buttons.
 * @param {function} onClick function to be fired on all preview buttons' click event
 * @returns {void} */
function bindPreviewButtons(onClick) {
	[...document.querySelectorAll('input[id^=PreviewBtn_]')]
		.forEach(button => button.addEventListener('click', onClick));
}

bindPreviewButtons(resizeImages);
resizeImages();
