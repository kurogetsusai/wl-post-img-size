// ==UserScript==
// @name        wl-post-img-size
// @namespace   wl-post-img-size
// @description Adds a menu to transform text in any text inputs.
// @version     0.1.0
// @include     http://www.warlight.net/*
// @include     https://www.warlight.net/*
// @grant       none
// @updateURL   https://github.com/kurogetsusai/wl-post-img-size/raw/master/wl-post-img-size.user.js
// ==/UserScript==

'use strict';

[...document.getElementsByTagName('img')]
	.filter(img => img.parentElement.tagName === 'DIV' &&
	               img.parentElement.id.startsWith('PostForDisplay_'))
	.forEach(img => img.style.maxWidth = '100%');
