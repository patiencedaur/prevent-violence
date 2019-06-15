/**
 * ==============================
 * Your Javascript Code Goes Here
 * ==============================
 **/

'use strict';

/* global monogatari */

const { $_ready } = Monogatari;

// monogatari.debug.level (5);

// Exit Relationship button
monogatari.registerComponent (ExitModal);
// Help button
// monogatari.registerComponent (HelpModal);

$_ready (() => {
	monogatari.init ('#monogatari');
});
