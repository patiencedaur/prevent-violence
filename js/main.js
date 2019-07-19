// Functions to check player choices

function checkPersist() {
	return monogatari.storage().personal_ideas.persist;
}

function checkFamily() {
	return monogatari.storage().personal_ideas.family_important;
}

function hadSex() {
	return monogatari.storage().plot.had_sex;
}

function ep3GotUpset() {
	monogatari.storage().plot.episode3_got_upset = true;
	return;
}

function randomCondition() {
	let ran = Math.random();
	if (ran < 0.5) {
		return true;
	} else {
		return false;
	}
}


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

// Friend sms

monogatari.translation ('English', {
  'SMS': 'SMS'
});
monogatari.translation ('Русский', {
  'SMS': 'SMS'
});


$_ready (() => {
	monogatari.init ('#monogatari');
});
