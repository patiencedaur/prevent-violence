'use strict';
/* global Monogatari */
/* global monogatari */
/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;
// monogatari.debug.level (5);

// 1. Outside the $_ready function:

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

// Exit Relationship button

monogatari.translation ('English', {
  'Exit': 'Exit'
});
monogatari.translation ('Русский', {
  'Exit': 'Выход'
});

// Help button

monogatari.translation ('English', {
  'Help': 'Help'
});
monogatari.translation ('Русский', {
  'Help': 'Помощь'
});

// Friend sms

monogatari.translation ('English', {
  'SMS': 'SMS'
});
monogatari.translation ('Русский', {
  'SMS': 'SMS'
});


$_ready (() => {
	// 2. Inside the $_ready function:
	// Remove buttons
	monogatari.component ('quick-menu').removeButton('Back');
	monogatari.component ('quick-menu').removeButton('Autoplay');
	monogatari.component ('quick-menu').removeButton('Log');
	monogatari.component ('quick-menu').removeButton('Save');
	monogatari.component ('quick-menu').removeButton('Load');
	// Add buttons
	monogatari.component ('quick-menu').addButtonAfter ('Quit', {
		string: 'Exit',
		icon: 'fas fa-door-open',
		data: {
			action: 'jump',
			jump: 'Good'
		}
	});
	monogatari.component ('quick-menu').addButtonAfter ('Hide', {
		string: 'Help',
		icon: 'fas fa-hands-helping',
		data: {
			action: 'jump',
			jump: 'Help',
		}
	});
	
	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:

	});
});
