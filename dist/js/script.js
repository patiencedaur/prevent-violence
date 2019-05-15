/* global monogatari */

// Functions to check player choices.
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
		return True;
	} else {
		return False;
	}
}


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
