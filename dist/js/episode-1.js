monogatari.label ('Episode1', [
  // Debug
  'Семья - это важно: {{personal_ideas.family_important}}',
  'Настойчивость: {{personal_ideas.persist}}',

  'show scene #f7f6f6 with fadeIn',
  'Вы идёте на свидание в кафе. Он галантно придерживает перед тобой дверь.',
  {
    // checkPersist
    'Conditional': {
      'Condition': () => { return this.storage.personal_ideas.persist; },
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
      'Condition': () => {  return this.storage.personal_ideas.family_important;  },
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
      'Condition': () => {  return this.storage.personal_ideas.persist;  },
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
      'Condition': () => {  return this.storage.personal_ideas.persist;  },
      'True': 'jump CallTaxi',
      'False': 'jump AskToCallTaxi'
    }
  }
]);

monogatari.label ('CallTaxi', [
  'l Я вызвал тебе такси до дома. Спасибо за чудесный вечер, красавица',
  'jump GoingHome'
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
        'Save': () => {
          this.storage ('plot', {
            episode1_taxi_called: false
          });
        }
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
        'Do': 'jump WhatAreYouDoing'
      },
      'No': {
        'Text': 'К сожалению, у меня столько домашки...',
        'Do': 'jump GoodLuck'
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
      'Condition': () => {  return this.storage.personal_ideas.persist;  },
      'True': 'jump FollowUpMeetTomorrow',
      'False': 'jump SeeYouLater'
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
  'l Что ж, жаль...',
  'jump GoodNight'
])

monogatari.label ('SeeYouLater', [
  'l С нетерпением жду завтрашней встречи!',
  'jump GoodNight',
]);

monogatari.label ('GoodLuck', [
  'l Удачи в этом нелёгком деле!',
  'jump GoodNight',
]);

monogatari.label ('GoodNight', [
  'l Спокойной ночи!',
  'end'
]);
