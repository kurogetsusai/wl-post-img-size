// ==UserScript==
// @name        WL Post Image Size
// @namespace   wl-post-img-size
// @description Sets maximum image width in WL posts to 100% of the post width.
// @version     1.0.0
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

/** Binds a function to all post previews' DOM mutations.
 * @param {function} func function to be fired when post previews' DOM mutates
 * @returns {void} */
function bindPreviewEvents(func) {
	const observer = new MutationObserver(mutations => {
		mutations.forEach(mutation => func());
	});
	const observerConfig = {
		childList: true,
		attributes: true,
		characterData: true,
		subtree: true
	};

	[...document.querySelectorAll('div[id^=PreviewDiv_]')]
		.forEach(div => observer.observe(div, observerConfig));
}

bindPreviewEvents(resizeImages);
resizeImages();
