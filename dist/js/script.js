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
monogatari.characters ({
	'l': {
		name: 'Алексей',
		color: '#5bcaff'
	}
});

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
		// 'Hi there, {{player.name}}!',
		// function(){
		//     alert("I'll write this to the database!");
		//     return true; // Will make the engine execute the next statement when the function finishes.
		// },
		'Вы идёте на свидание в кафе. Он галантно придерживает перед тобой дверь.',
		'show scene #f7f6f6 with fadeIn',
		'l Я помогу тебе снять пальто?',
		{
			'Choice': {
				'Yes': {
					'Text': 'Давай?',
					'Do': 'jump CoatOff',
					// 'onChosen': () => {
          //   	alert("I'll write this to the database!");
          //   }
				},
				'No': {
					'Text': 'Нет, разденусь сама',
					'Do': 'jump CoatOff'
				}
			}
		}
	],

	'CoatOff': [
		'show scene #f7f6f6 with fadeIn',
		'Вы мило говорите о том, о сём.',
		'Постепенно вы узнаёте друг друга лучше, и разговор переходит на серьёзные темы.',
		'l Знаешь, я всегда мечтал о семье и детях. Хочу серьёзных отношений...',
		'l Моя бывшая - овца...',
		'l Слушай, тебе не мешает шум за соседним столом?',
		'Эти иногородние - как их только земля носит? Совсем охренели. Давай пойду разберусь?',
		{
			'Choice': {
				'Yes': {
					'Text': 'Да, поставь их на место',
					'Do': 'jump KickOthers',
				},
				'No': {
					'Text': 'Нет, мне не мешают',
					'Do': 'jump NoKickOthers',
				}
			}
		}
	],

	'KickOthers': [
		//'show message Help',
		'show scene #f7f6f6 with fadeIn',
		'l Как я вас сейчас пну!',
		'end'
	],

	'NoKickOthers': [
		'l Ну и дура',
		'end'
	]
});
