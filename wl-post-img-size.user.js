// ==UserScript==
// @name        wl-post-img-size
// @namespace   wl-post-img-size
// @description Sets maximum image width in WL posts to 100% of the post width.
// @version     0.1.2
// @include     http://www.warlight.net/*
// @include     https://www.warlight.net/*
// @grant       none
// @updateURL   https://github.com/kurogetsusai/wl-post-img-size/raw/master/wl-post-img-size.user.js
// ==/UserScript==

'use strict';

[...document.querySelectorAll('div[id^=PostForDisplay_] > img')]
	.forEach(img => img.style.maxWidth = '100%');
