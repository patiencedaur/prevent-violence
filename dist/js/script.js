/* global monogatari */

// Define the messages used in the game.
monogatari.action ('Message').messages ({
	'Help': {
		title: 'В помощь программистке',
		subtitle: 'Полезные ссылки',
		body: `
			<p><a href='https://monogatari.io/documentation/'>Документация</a> - ничего лишнего, это точно.</p>
			<p><a href='https://monogatari.io/demo/'>Демо</a> - демо-игра.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('Notification').notifications ({
	'Welcome': {
		title: 'Привет!',
		body: 'Перед тобой игра для предупреждения домашнего насилия',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('Particles').particles ({

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voice', {

});

// Define the sounds used in the game.
monogatari.assets ('sound', {

});

// Define the videos used in the game.
monogatari.assets ('video', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
	/*	{
			'Input': {
				'Text': 'Как тебя зовут?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'Пожалуйста, введи имя!'
			}
		},*/
		'Hi there, {{player.name}}!',
		function(){
		    alert("I'll write this to the database!");
		    return true; // Will make the engine execute the next statement when the function finishes.
		},
		'Прежде чем начать игру, пожалуйста, ответь на два вопроса:',
		'show scene #f7f6f6 with fadeIn',
		'1. Читала ли ты доку, Дездемона?',
		{
			'Choice': {
				'Yes': {
					'Text': 'Да, на что ты намекаешь?',
					'Do': 'jump Yes',
					'onChosen': () => {
            	alert("I'll write this to the database!");
            }
				},
				'No': {
					'Text': 'Не совсем понимаю, о чём ты. Если хочешь сказать, говори прямо',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'Крутяк!',
		'Тогда пиши код!',
		'Отличная игра будет!',
		'end'
	],

	'No': [

		'Почитай.',

		'show message Help',

		'У тебя получится клёвая игра!',
		'А сценарий заставит многих задуматься...',
		'end'
	]
});
