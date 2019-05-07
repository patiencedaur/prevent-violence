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
					'Save': () => {
						this.storage ('personal_ideas', {
							family_important: true
						});
					}
				},
				'No': {
					'Text': "Неправда",
					'Do': "jump QuestionPersistence",
					'Save': function() {
			      this.storage ('personal_ideas', {
		          family_important: false
			      });
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
					'Save': () => {
						this.storage ('personal_ideas', {
							persist: true
						});
					}
				},
				'No': {
					'Text': "Неправда",
					'Do': "jump Episode1",
					'Save': function() {
			      this.storage ('personal_ideas', {
		          persist: false
			      });
					}
				}
			}
		}
	]
});
