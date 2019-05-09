monogatari.label ('Episode1', [
  // Debug
  function() {
    console.log("Настойчивость: " + monogatari.storage().personal_ideas.persist);
    console.log("Семью хочу-не могу: " + monogatari.storage().personal_ideas.family_important);
  },
  'Семья - это важно: {{personal_ideas.family_important}}',
  'Настойчивость: {{personal_ideas.persist}}',

  'show scene #f7f6f6 with fadeIn',
  'Вы идёте на свидание в кафе. Он галантно придерживает перед тобой дверь.',
  {
    // checkPersist
    'Conditional': {
      'Condition': checkPersist,
      'True': 'jump HelpWithCoat',
      'False': 'jump AskAboutCoat'
    }
  }
])

monogatari.label('AskAboutCoat', [
  'l Я помогу тебе снять пальто?',
  {
    'Choice': {
      'Yes': {
        'Text': 'Давай?',
        'Do': 'jump HelpWithCoat'
      },
      'No': {
        'Text': 'Нет, разденусь сама',
        'Do': 'jump CoatOff'
      }
    }
  }
])

monogatari.label ('HelpWithCoat', [
  'Он снимает с тебя пальто, и вы садитесь за столик.',
  'jump CoatOff'
])

monogatari.label ('CoatOff', [
  'show scene #f7f6f6 with fadeIn',
  'Вы мило говорите о том, о сём.',
  'Постепенно вы узнаёте друг друга лучше, и разговор переходит на серьёзные темы.',

  // checkFamily
  {
    'Conditional': {
      'Condition': checkFamily,
      'True': 'l Знаешь, я всегда мечтал о семье и детях. Хочу серьёзных отношений...',
      'False': 'l Меня восхищают сильные женщины!'
    }
  },
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
])

monogatari.label ('KickOthers', [
  //'show message Help',
  'show scene #f7f6f6 with fadeIn',
  'Твой спутник идёт разбираться с соседями и угрожает им рукоприкладством.',
  'jump Bill',
]);

monogatari.label ('Bill', [
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
        'Do': 'jump BegToPay',
      }
    }
  }
]);

monogatari.label ('BegToPay', [
  {
    'Conditional': {
      'Condition': checkPersist,
      'True': 'jump PersistAndPay',
      'False': 'jump SeeOff',
    }
  }
]);

monogatari.label ('PersistAndPay', [
  'l Ни в коем случае, я заплачу.',
  'Несмотря на твой протест, твой спутник оплачивает счёт.',
  'jump SeeOff'
]);

monogatari.label ('SeeOff', [
  'Вы выходите из кафе, обсуждая твою любимую группу Poison Wing.',
  'Завтра как раз её концерт, но у тебя много дел в универе.',
  {
    'Conditional': {
      'Condition': checkPersist,
      'True': 'jump CallTaxi',
      'False': 'jump AskToCallTaxi'
    }
  }
]);

monogatari.label ('CallTaxi', [
  'l Я вызвал тебе такси до дома. Спасибо за чудесный вечер, красавица',
  'jump GoingHomeTaxi'
]);

monogatari.label ('AskToCallTaxi', [
  'l Спасибо за чудесный вечер. Вызвать тебе такси до дома?',
  {
    'Choice': {
      'Yes': {
        'Text': 'Да, буду рада',
        'Do': 'jump GoingHomeTaxi',
      },
      'No': {
        'Text': 'Нет, спасибо. Доберусь сама.',
        'Do': 'jump GoingHomeBus',
        'onChosen': () => { monogatari.storage().plot.episode1_taxi_called = false; }
        }
      }
    }
]);

monogatari.label ('GoingHomeTaxi', [
  'Вы прощаетесь. Подъезжает такси, ты садишься и едешь домой.',
  'jump EnterHome',
]);

monogatari.label ('GoingHomeBus', [
  'Вы прощаетесь. Подъезжает автобус, ты садишься и едешь домой.',
  'jump EnterHome',
]);

monogatari.label ('EnterHome', [
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
]);

monogatari.label ('Texting', [
  'l Ещё раз спасибо за прекрасный вечер!',
  'l Увидимся завтра на концерте Poison Wing?',
  {
    'Choice': {
      'Yes': {
        'Text': 'Да! Здорово, пойдём вместе!',
        'Do': 'jump SeeYouLater'
      },
      'No': {
        'Text': 'Нет, к сожалению, не могу',
        'Do': 'jump WhatAreYouDoing'
      }
    }
  }
]);

monogatari.label ('WhatAreYouDoing', [
  'l Чем занимаешься?',
  {
    'Choice': {
      'Study': {
        'Text': 'Готовлюсь к парам...',
        'Do': 'jump TextCheckPersist',
      }
    }
  }
]);

// Helper that checks for 'persist' and chooses further branch of dialogue.
monogatari.label ('TextCheckPersist', [
  {
    'Conditional': {
      'Condition': checkPersist,
      'True': 'jump FollowUpMeetTomorrow',
      'False': 'jump GoodLuck'
    }
  }
]);

monogatari.label ('FollowUpMeetTomorrow', [
  'l Давай всё-таки увидимся завтра? :))))',
  {
    'Choice': {
      'Yes': {
        'Text': 'Давай попробуем!',
        'Do': 'jump SeeYouLater'
      },
      'No': {
        'Text': 'Нет, мне никак :(',
        'Do': 'jump TooBad'
      }
    }
  }
]);

monogatari.label ('TooBad', [
  'l Что ж, жаль.',
  'jump GoodNight'
])

monogatari.label ('SeeYouLater', [
  'l С нетерпением жду завтрашней встречи!',
  () => { monogatari.storage().plot.episode1_meeting = true;  },
  'jump GoodNight',
]);

monogatari.label ('GoodLuck', [
  'l Бедняжка :( Удачи в этом нелёгком деле!',
  'jump GoodNight',
]);

monogatari.label ('GoodNight', [
  'l Спокойной ночи!',
  'jump Episode1A'
]);

// Episode 1A

monogatari.label ('Episode1A', [
  {
    'Conditional': {
      'Condition': monogatari.storage().plot.episode1_meeting,
      'True': 'jump AgreedToMeet',
      'False': 'jump NotAgreedToMeet'
    }
  },
]);

monogatari.label ('AgreedToMeet', [
  'Вы встречаетесь на концерте, как и договаривались.',
  'jump Concert'
]);

monogatari.label ('NotAgreedToMeet', [
  'На следующий день вы случайно сталкиваетесь в толпе на концерте.',
  'jump Concert'
]);


monogatari.label ('Concert', [
  'Ты в восторге от исполнителей и подпеваешь всем песням!',
  'Но вот концерт подходит к концу. Вы выходите из клуба.',
  'Настаёт время прощания.',
  {
    'Conditional': {
      'Condition': checkPersist,
      'True': 'jump Kiss',
      'False': 'jump MayIKissYou'
    }
  }
]);

monogatari.label ('MayIKissYou', [
  'l Можно тебя поцеловать?',
  {
    'Choice': {
      'Yes': {
        'Text': 'Да',
        'Do': 'jump Kiss'
      },
      'No': {
        'Text': 'Не сейчас',
        'Do': 'jump ByeAlone'
      }
    }
  }
]);

monogatari.label ('Kiss', [
  'Он обнимает и страстно целует тебя.',
  'l Я вызвал такси. Едем ко мне?',
  {
    'Choice': {
      'Yes': {
        'Text': 'Да',
        'Do': 'jump ToHisPlace'
      },
      'No': {
        'Text': 'Нет, поеду домой',
        'Do': 'jump CallAnotherTaxi'
      }
    }
  }
]);

monogatari.label ('CallAnotherTaxi', [
  'Он вызывает второе такси.',
  'jump ByeAlone'
]);

monogatari.label ('ByeAlone', [
  'Вы прощаетесь, и ты едешь домой.',
  'jump Episode2'
])

monogatari.label('ToHisPlace', [
  'Вы приезжаете к нему домой и сразу начинаете целоваться.',
  'l Ты такая горячая. Хочу скорее заняться с тобой любовью.',
  {
    'Choice': {
      'Yes': {
        'Text': 'Я тоже, давай',
        'Do': 'jump FirstTime'
      },
      'No': {
        'Text': 'Я не хочу...',
        'Do': 'jump CheckDynamo'
      }
    }
  }
]);

monogatari.label ('FirstTime', [
  'Здесь будет картинка со спальней и красивый романтичный фэйдаут.',
  'Следующий уровень!',
  'jump Episode2'
]);

monogatari.label('CheckDynamo', [
  {
    'Conditional': {
      'Condition': checkPersist,
      'True': 'jump Dynamo',
      'False': 'jump Pout'
    }
  }
]);

monogatari.label ('Dynamo', [
  'l Ну не ломайся, мы же уже приехали...',
  'l Не будь таким динамо.',
  {
    'Choice': {
      'Yes': {
        'Text': 'Ну ладно',
        'Do': 'jump FirstTime'
      },
      'No': {
        'Text': 'Нет, я же говорю - не хочу',
        'Do': 'jump Pout'
      }
    }
  }
]);

monogatari.label ('Pout', [
  'Он насупился и обиделся.',
  '(Ты вызываешь себе такси и уезжаешь?)',
  'jump Episode2'
])
