monogatari.label('Episode2', [
  'Вы встречаетесь 2 месяца.',
  'Сегодня у Алексея день рождения!',
  'Пищит телефон - пришла смс от твоего парня:',
  'l Сегодня прекрасный день! Сделай мне подарок' +
      ' - приди в том чёрном сексуальном платье :)',
  {
    'Choice': {
      'WearDress': {
        'Text': 'Надеть то самое платье',
        'Do': 'jump Party',
        'onChosen': () => {
          monogatari.storage().plot.episode2_dress = true;
        }
      },
      'WearSomethingElse': {
        'Text': 'Надеть что-то другое',
        'Do': 'jump Party'
      }
    }
  }
]);

monogatari.label('Party', [
  'Ты приходишь на вечеринку. Все уже в сборе, играет музыка.',
  {
    'Conditional': {
      'Condition': () => { return monogatari.storage().plot.episode2_dress; },
      'True': 'l Какая ты у меня красавица! Настоящая звезда!',
      'False': 'next'
    }
  },
  'jump LetsDance'
]);

monogatari.label('LetsDance', [
  'l Пойдём потанцуем?',
  {
    'Choice': {
      'Yes': {
        'Text': 'Пошли!',
        'Do': 'jump Dancing'
      },
      'No': {
        'Text': 'Нет, я пока посижу',
        'Do': 'jump DanceCheckPersist'
      }
    }
  }
]);

monogatari.label('DanceCheckPersist', [
  {
    'Conditional': {
      'Condition': checkPersist,
      'True': 'jump ItsMyBirthday',
      'False': 'jump EmptySpace'
    }
  }
]);

monogatari.label('ItsMyBirthday', [
  'l Ну у меня же день рождения. Сделаешь мне приятно?',
  {
    'Choice': {
      'Yes': {
        'Text': 'Ну ладно, давай танцевать',
        'Do': 'jump Dancing'
      },
      'No': {
        'Text': 'Не надо меня уговаривать',
        'Do': 'jump EmptySpace'
      }
    }
  }
]);

monogatari.label('Dancing', [
  'Вы танцуете медленный танец.',
  'Ты оглядываешь комнату &mdash; цветные пятна от гирлянды бегают по стенам,' +
    ' друзья сидят с бокальчиками...',
  'Какая же вы красивая пара!',
  'l Чего это ты танцуешь со мной, а пялишься на другого?',
  'l И жопой ещё вертишь.',
  'jump Episode2ConflictChoice'
]);

monogatari.label('EmptySpace', [
  'l Я вообще для тебя, наверное, пустое место.',
  'l У тебя есть другой, да?',
  'jump Episode2ConflictChoice'
]);

monogatari.label('Episode2ConflictChoice', [
  {
    'Choice': {
      'AcknowledgeGuilt': {
        'Text': 'Признать свою вину',
        'Do': 'jump Ep2GuiltAcknowledged'
      },
      'WhatsWrong': {
        'Text': 'Успокоить его',
        'Do': 'jump Ep2Randomizer'
      },
      'Argue': {
        'Text': 'Начать спорить',
        'Do': 'jump Ep2Arguing'
      }
    }
  }
]);

monogatari.label('Ep2GuiltAcknowledged', [
  'y Прости, больше не буду.',
  'jump UnderstandMe'
]);

monogatari.label('UnderstandMe', [
  'l Ну ты меня пойми...',
  'l Ты ведь такая красивая девушка, привлекаешь к себе внимание.',
  'l Я не хочу, чтобы кто-нибудь тебя у меня увёл.',
  'l Я действительно не хочу с тобой ссориться, милая.',
  'l Давай сбежим ото всех!',
  'jump Episode2Sex'
]);

monogatari.label('Ep2Randomizer', [
  {
    "Conditional": {
    	"Condition": randomCondition,
    	"True": "jump UnderstandMe",
    	"False": "jump Ep2SexCheck",
    }
  }
]);

monogatari.label('Ep2Arguing', [
  'y Никуда я не смотрела! Ты меня на пустом месте подозреваешь.',
  'jump Ep2SexCheck'
]);

monogatari.label('Ep2SexCheck', [
  {
    'Conditional': {
  	   'Condition': hadSex,
  	   'True': 'jump Slut',
  	   'False': 'jump SorryGotUpset'
    }
  },
]);

monogatari.label('Slut', [
  'l А что ты хотела, ведёшь себя как шлюха.',
  'jump SlutReact'
]);

monogatari.label('SorryGotUpset', [
  'l Прости меня, я вспылил.',
  'jump UnderstandMe'
]);

monogatari.label('SlutReact', [
  {
    'Choice':{
      'Peace':{
          'Text': 'Давай не будем ссориться.',
          'Do': 'jump MoveInTogether'
        },
      'War':{
          'Text': 'Ещё раз такое скажешь...',
          'Do': 'jump FavoriteSong',
      }
    }
  },
]);

monogatari.label('MoveInTogether', [
  'l Прости меня, дорогая. Я вспылил, потому что переживал.',
  'l Я собирался предложить тебе съехаться.',
  'l Давай жить вместе?',
  '(Здесь выбора нет! Следующий уровень!)',
  'end'
]);

monogatari.label('FavoriteSong', [
  'Он внезапно отходит в сторону.',
  'Подойдя к компьютеру, он ставит новую песню.',
  'Мелодия тебе знакома...',
  'l Эта песня играла в кафе, куда мы ходили на первое свидание.',
  'l Я тебя люблю. Давай жить вместе?',
  '(Здесь выбора нет! Следующий уровень!)',
  'end'
]);

/******************/
/* Ветка про секс */
/******************/
monogatari.label('Episode2Sex', [
  'Вы убегаете в спальню.',
  'Он начинает обнимать тебя, целовать, раздевать...',
  {
    'Choice':{
      'DoTheSame': {
          'Text': 'Ответить на его ласки',
          'Do': 'jump Goddess',
      },
      'Reject': {
          'Text': 'Погоди, не сейчас',
          'Do': 'jump SexCheckPersist',
      }
    }
  }
]);

monogatari.label('Goddess', [
  'Вы падаете на кровать и страстно занимаетесь любовью.',
  'После секса вы лежите на простынях, ' +
      ' твой парень смотрит на тебя влюблённым взглядом',
  'l Знаешь, в сексе ты тоже богиня.',
  'l Переезжай ко мне? Давай жить вместе?',
  'end'
]);

monogatari.label('SexCheckPersist', [
  {
    'Conditional': {
  	   'Condition': checkPersist,
  	    'True': 'jump TwoMonthsTogether',
  	    'False': 'jump SoSerious',
    }
  },
]);

monogatari.label('TwoMonthsTogether', [
  'l Но мы уже целых два месяца вместе.',
  'l Я ни с кем так долго не ждал!',
  'l Всё будет хорошо. У меня и презервативы с собой...',
  {
    'Choice':{
      'Agree':{
          'Text': 'Ладно, давай',
          'Do': 'jump Goddess',
      },
      'Disagree':{
          'Text': 'Не сейчас',
          'Do': 'jump YouAreBoring',
      }
    }
  },
]);

monogatari.label('YouAreBoring', [
  'l Ты вообще весь вечер мне испортила. Скучная ты.',
  'Некоторое время вы обиженно сидите на кровати в тишине.',
  'Внезапно он поворачивается к тебе и берёт тебя за руку.',
  'jump SoSerious'
]);

monogatari.label('SoSerious', [
  'l Извини. Я всего лишь хотел доказать серьёзность своих намерений.',
  'l Я так хочу, чтобы мы жили вместе.',
  'l Переезжай ко мне?',
  'end'
]);
