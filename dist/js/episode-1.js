monogatari.label ('Episode1', [
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
])

monogatari.label ('CoatOff', [
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
  'l Ни в коем случае, я заплачу.',
  'Несмотря на твой протест, твой спутник оплачивает счёт.',
  'jump SeeOff'
]);

monogatari.label ('SeeOff', [
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
]);

monogatari.label ('GoingHome', [
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
        'Do': 'jump GoodLuck',
      }
    }
  }
]);

monogatari.label ('SeeYouLater', [
  'l С нетерпением жду завтрашней встречи!',
  'jump GoodNight',
]);

monogatari.label ('GoodLuck', [
  'l Удачи в этом нелёгком деле! :)',
  'jump GoodNight',
]);

monogatari.label ('GoodNight', [
  'l Спокойной ночи!',
  'end'
]);
