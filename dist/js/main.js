/**
 * ==============================
 * Your Javascript Code Goes Here
 * ==============================
 **/


'use strict';
/* global Monogatari */
/* global monogatari */

const { $_ready } = Monogatari;

// monogatari.debug.level (5);

$_ready (() => {
	monogatari.init ('#monogatari');
});


$_ready (function () {
    $_('[data-action="stats"]').click (function() {
        if ($_('[data-ui="stats"]').isVisible ()) {
            $_('[data-ui="stats"]').removeClass ('modal--active');
						// what is the right class? TODO ask hyuchia
        } else {
            $_('[data-ui="stats"]').addClass ('modal--active');
        }
    });
});
