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

monogatari.translation ('English', {
  'Exit': 'Exit'
});
monogatari.translation ('Русский', {
  'Exit': 'Выход'
});
monogatari.component ('quick-menu').addButtonAfter ('Quit', {
  string: 'Exit',
  icon: 'fas fa-door-open',
  data: {
    action: 'jump',
    jump: 'Good'
  }
});


// Help button

monogatari.translation ('English', {
  'Help': 'Help'
});
monogatari.translation ('Русский', {
  'Help': 'Помощь'
});
monogatari.component ('quick-menu').addButtonAfter ('Hide', {
  string: 'Help',
  icon: 'fas fa-hands-helping',
  data: {
    action: 'jump',
    jump: 'Help',
  }
});

$_ready (() => {
	monogatari.init ('#monogatari');
});
