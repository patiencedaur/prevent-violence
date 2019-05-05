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
					'Do': 'jump CoatOff'
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
		'l Эти иногородние - как их только земля носит? Совсем охренели. Давай пойду разберусь?',
		{
			'Choice': {
				'Yes': {
					'Text': 'Да, поставь их на место',
					'Do': 'jump KickOthers',
				},
				'No': {
					'Text': 'Нет, мне не мешают',
					'Do': 'jump Bill',
				}
			}
		}
	],

	'KickOthers': [
		//'show message Help',
		'show scene #f7f6f6 with fadeIn',
		'Твой спутник идёт разбираться с соседями и угрожает им рукоприкладством.',
		'jump Bill',
	],

	'Bill': [
		'Вы обсуждаете его работу, твой универ, стараетесь не говорить о политике...',
		'Приносят счёт. Он предлагает взять оплату на себя.',
		{
			'Choice': {
				'Agree': {
					'Text': 'Согласиться',
					'Do': 'jump SeeOff'
				},
				'Disagree': {
					'Text': 'Отказаться: ты хочешь заплатить за себя сама',
					'Do': 'jump Beg',
				}
			}
		}
	],

	'Beg': [
		'l Ни в коем случае, я заплачу.',
		'Несмотря на твой протест, твой спутник оплачивает счёт.',
		'jump SeeOff'
	],

	'SeeOff': [
		'Вы выходите из кафе, обсуждая твою любимую группу Poison Wing.',
		'Завтра как раз её концерт, но у тебя много дел в универе.',
		'l Спасибо за чудесный вечер. Вызвать тебе такси до дома?',
		{
			'Choice': {
				'Yes': {
					'Text': 'Да, буду рада',
					'Do': 'jump GoingHome',
				},
				'No': {
					'Text': 'Нет, спасибо. Доберусь сама.',
					'Do': 'jump GoingHome',
				}
			}
		}
	],

	'GoingHome': [
		'Вы прощаетесь. Подъезжает такси, ты садишься и едешь домой.',
		'Как только ты открываешь дверь квартиры, тебе приходит смс:',
		'l Как добралась?',
		{
			'Choice': {
				'Ok': {
					'Text': 'Всё окей, хорошо!',
					'Do': 'jump Texting'
				}
			}
		}
	],

	'Texting': [
		'l Ещё раз спасибо за прекрасный вечер!',
		'l Увидимся завтра на концерте Poison Wing?',
		{
			'Choice': {
				'Yes': {
					'Text': 'Да! Здорово, пойдём вместе!',
					'Do': 'jump WhatAreYouDoing'
				},
				'No': {
					'Text': 'К сожалению, у меня столько домашки...',
					'Do': 'jump GoodLuck'
				}
			}
		}
	],

	'WhatAreYouDoing': [
		'l Чем занимаешься?',
		{
			'Choice': {
				'Study': {
					'Text': 'Готовлюсь к парам...',
					'Do': 'jump GoodLuck',
				}
			}
		}
	],

	'SeeYouLater': [
		'l С нетерпением жду завтрашней встречи!',
		'jump GoodNight',
	],

	'GoodLuck': [
		'l Удачи в этом нелёгком деле! :)',
		'jump GoodNight',
	],

	'GoodNight': [
		'l Спокойной ночи!',
		'end'
	]
});
