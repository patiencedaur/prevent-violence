"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {

};

// Define the Characters
const characters = {
	"h": {
		"Name": "Hikaru",
		"Color": "#5bcaff"
	},
	"l": {
		"Name": "Алексей",
		"Color": "#5bcaff"
	}
};

let script = {
	// The game starts here.
	"Start": [
		"notify Welcome",

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
};
