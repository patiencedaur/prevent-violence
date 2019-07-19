/* global monogatari */

// Define the messages used in the game.
monogatari.action ('Message').messages ({
	'GoodEnding': {
		title: 'Тебе удалось вовремя распознать насилие',
		subtitle: '',
		body: `
			<p>Физическому насилию обычно предшествуют контроль, обесценивание, оскорбления и т.д.</p>
			<p>Ты сумела выйти из опасных отношений!</p>
			<p><a href="https://vk.com/im?media=&sel=-29881876">Чат-бот &laquo;Индекс насилия в отношениях&raquo;</a></p>
		`
	},
	'BadEnding': {
		title: 'Cпустя полгода',
		subtitle: '',
		body: `
			<p>Ты находишься полностью под контролем своего партнёра. Он контролирует твоё общение, внешний вид, все занятия. Друзья перестали звонить и писать тебе, зная, что у тебя могут быть проблемы из-за этого.</p>
			<p>Чтобы не провоцировать ссор, тебе приходится молчать и не вступать в споры. Когда ты делаешь так, как хочет партнёр, он ненадолго становится нежным и заботливым.</p>
			<p><a href="https://vk.com/im?media=&sel=-29881876">Чат-бот &laquo;Индекс насилия в отношениях&raquo;</a></p>
		`
	},
	'WorstEnding': {
		title: 'Спустя полгода',
		subtitle: '',
		body: `
			<p>Ты находишься в ситуации насилия. Чтобы не провоцировать ссоры и драки, ты вынуждена отказаться от общения с друзьями и работы.</p>
			<p>Всё свободное время ты проводишь дома. Но как бы ты ни старалась, скандалы регулярно происходят, и тебе приходится скрывать синяки. После он извиняется, дарит подарки, говорит тёплые слова, убеждая, что очень любит тебя, просто ты его провоцируешь.</p>
			<p>В следующий раз всё повторяется вновь...</p>
			<p><a href="https://vk.com/im?media=&sel=-29881876">Чат-бот &laquo;Индекс насилия в отношениях&raquo;</a></p>
		`
	},
	'FriendHi': {
		title: 'Привет, это Оля',
		subtitle: 'Как дела?',
		body: 'Я чую домашнее насилие!'
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
	},
	'y': {
		name: 'Ты',
		color: '#ffca5b'
	}
});

monogatari.script ({
	// The game starts here.
	"Start": [
		'show scene #f7f6f6 with fadeIn',
		// "notify Welcome",
		"Прежде чем мы начнём, пожалуйста, ответь на два вопроса.",
		"Согласна ли ты со следующими утверждениями:",
		"jump QuestionFamily"
	],

	"QuestionFamily": [
		"1. Сейчас для меня важнее всего создать семью",
		{
			'Choice': {
				'Yes': {
					'Text': "Правда",
					'Do': "jump QuestionPersistence",
					'onChosen': () => {
						monogatari.storage().personal_ideas.family_important = true;
						}
					},
				'No': {
					'Text': "Неправда",
					'Do': "jump QuestionPersistence",
					'onChosen': () => {
							monogatari.storage().personal_ideas.family_important = false;
			      }
					}
				}
			}
	],

	"QuestionPersistence": [
		'2. Настоящий мужчина должен добиваться женщину.',
		{
			'Choice': {
				'Yes': {
					'Text': "Правда",
					'Do': "jump Episode1",
					'onChosen': () => {
						monogatari.storage().personal_ideas.persist = true;
					}
				},
				'No': {
					'Text': "Неправда",
					'Do': "jump Episode1",
					'onChosen': function() {
						monogatari.storage().personal_ideas.persist = false;
					}
				}
			}
		}
	]
});

/*** Test the sms button ***/

// Helper functions

function makeSmsButton() {
	monogatari.component ('quick-menu').addButtonAfter ('Hide', {
	  string: 'SMS',
	  icon: 'fas fa-envelope',
	  data: {
	    action: 'jump',
	    jump: 'SmsYes',
	  }
	});
}

function removeSmsButton() {
	monogatari.component('quick-menu').removeButton('SMS');
}

// Called via Help button

monogatari.label('Help', [
	'Тебе звонит подруга.',
	{
	  'Choice': {
	    'FirstOption': {
	        'Text': 'Прочесть смс',
	        'Do': 'jump SmsYes',
	    },
	    'SecondOption': {
	        'Text': 'Забить',
					'onChosen': () => {
						monogatari.storage().friend_sms_unread = true;
					},
	        'Do': 'jump SmsNo',
	    }
	  }
	}
]);

monogatari.label('SmsYes', [
	'show message FriendHi',
	{
	  'Conditional': {
		   'Condition': function(){
	  	   return monogatari.storage().friend_sms_unread;
		   },
		    'True': {'Function': {
					'Apply': () => {
						removeSmsButton();
						monogatari.storage().friend_sms_unread = false;
						return true;
					},
					'Reverse': () => {
						makeSmsButton();
						monogatari.storage().friend_sms_unread = true;
						return true;
					}
				}
				},
		    'False': 'next',
	  }
	},
	'Мы прочли подругину смску. Кнопка не нужна, если она есть, убираем её.',
	'jump Start'
]);

monogatari.label('SmsNo', [
	makeSmsButton,
	'Мы не прочли подругину смску. Она маячит в непрочитанных.',
	'Сейчас есть кнопка, и она будет висеть, пока мы не прочтём смс.',
	'jump Start'
]);
