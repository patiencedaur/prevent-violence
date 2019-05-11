monogatari.label('Episode3', [
  'Вы живёте вместе два месяца.',
  'Вы сидите в обнимку и смотрите сериал.',
  'Тут пищит телефон: тебе пришла смска!',
  'l Опять твои тупые друзья пишут?',
  {
    'Choice': {
      'NotDumb': {
          'Text': 'Нормальные у меня друзья. С кем хочу &mdash; с тем и общаюсь.',
          'Do': 'jump HidingSomething',
      },
      'WeekendPlans': {
          'Text': 'Да, друзья. Мы хотим пересечься на выходных, давно не виделись.',
          'Do': 'jump AskMe',
      }
    }
  },
]);

monogatari.label('HidingSomething', [
  'l Тебе точно есть что скрывать! Дай сюда телефон.',
  {
    'Choice': {
      'GivePhone': {
          'Text': 'Дать телефон',
          'Do': 'jump ImJustNervous',
      },
      'DoNotGivePhone': {
          'Text': 'Не давать телефон',
          'Do': 'jump GrabPhone',
      }
    }
  },
]);

monogatari.label('AskMe', [
  'l А меня спросить? Я вообще-то хотел с тобой время провести.',
  {
    'Choice': {
      'CancelMeeting': {
          'Text': 'Ок, тогда я отменю.',
          'Do': 'jump NextMorning',
      },
      'ImGoing': {
          'Text': 'Мои друзья &mdash; не тупые.',
          'Do': 'jump ImUncomfortable',
      },
      'TimeTogetherAfterMeeting': {
          'Text': 'Давай после встречи проведём время вместе?',
          'Do': 'jump PleaseStayHome',
      }
    }
  },
]);

monogatari.label('ImUncomfortable', [
  'y Мне неприятно, что ты говоришь такое о моих друзьях. Хочу и пойду!',
  'jump Forbid'
]);

monogatari.label('PleaseStayHome', [
  'l Нет, оставайся дома, я тебя прошу.',
  {
    'Choice': {
      'Yes': {
          'Text': 'Ок, я отменю встречу.',
          'Do': 'jump IMissYou',
      },
      'No': {
          'Text': 'Нет, я пойду.',
          'Do': 'jump Forbid',
      }
    }
  },
]);

monogatari.label('IMissYou', [
  'l Просто я очень соскучился...',
  'l Я так рад, что ты поступаешь правильно, любимая. Проведём выходной вместе.',
  'jump NextMorning'
]);

monogatari.label('Forbid', [
  'l Я тебе запрещаю.',
  {
    'Choice': {
      'OK': {
          'Text': 'Ну ладно, не пойду.',
          'Do': 'jump IMissYou',
      },
      'MyDecision': {
          'Text': 'Я пойду &mdash; это моё решение',
          'Do': 'jump MyDecision',
      }
    }
  },
]);

monogatari.label('MyDecision', [
  'Ты встаёшь и смотришь ему прямо в глаза.',
  'y Это моё решение.',
  'Он вдруг хватает тебя за руку.',
  'l Сядь! Мы здесь не закончили.',
  ep3GotUpset,
  {
    'Choice': {
      'SitDownSilently': {
          'Text': 'Молча сесть',
          'Do': 'jump YouProvokedMe',
      },
      'Cry': {
          'Text': 'Заплакать',
          'Do': 'jump Crying',
      },
      'GetAngry': {
          'Text': 'Возмутиться',
          'Do': 'jump Push',
      }
    }
  },
]);

monogatari.label('Crying', [
  'y Мне же больно!',
  'jump YouProvokedMe'
]);

monogatari.label('YouProvokedMe', [
  'l Да ладно тебе, я просто переживаю, скучаю.',
  'l Но здесь мы оба виноваты. Ты ведь сама меня спровоцировала.',
  'jump NextMorning'
]);

monogatari.label('Push', [
  'y Отпусти меня!',
  'Он с силой толкает тебя на пол.',
  'l Я сказал, сядь!',
  'jump NextMorning'
]);

monogatari.label('ImJustNervous', [
  'Он убеждается, что смс действительно от друзей.',
  'l Ну и хорошо. Я просто переживаю.',
  'jump NextMorning'
]);

monogatari.label('GrabPhone', [
  'Он хватает тебя за руку и отнимает телефон.',
  ep3GotUpset,
  {
    'Choice': {
      'LetMeGo': {
          'Text': 'Ты что делаешь?! Отпусти!',
          'Do': 'jump BreakPhone',
      },
      'SecondOption': {
          'Text': 'Зачем так резко? Ну на, мне всё равно нечего скрывать.',
          'Do': 'jump ImJustNervous',
      }
    }
  },
]);

monogatari.label('BreakPhone', [
  () => {
    monogatari.storage().plot.episode3_phone_broken = true;
  },
  'Он кидает твой телефон об стену.',
  'Телефон разбивается.',
  'jump NextMorning'
]);

/***********************/
/* Утро следующего дня */
/***********************/

monogatari.label('NextMorning', [
  () => {
    console.log("upset = " + monogatari.storage().plot.episode3_got_upset);
    console.log("phone broken = " + monogatari.storage().plot.episode3_phone_broken);
  },
  'Утро следующего дня...',
  {
    'Conditional': {
  	   'Condition': () => {
    	   return monogatari.storage().plot.episode3_phone_broken;
  	   },
  	    'True': 'jump WithPhone',
  	    'False': 'jump FlowersOnly',
    }
  },
]);

monogatari.label('WithPhone', [
  'Он приходит к тебе с цветами и новым телефоном.',
  'jump SorryDarlingGotUpset',
]);

monogatari.label('FlowersOnly', [
  'Он приходит к тебе с цветами.',
  {
    'Conditional': {
  	   'Condition': function(){
    	   return monogatari.storage().plot.episode3_got_upset;
  	   },
  	    'True': 'jump SorryDarlingGotUpset',
  	    'False': 'jump ThisIsForYou',
    }
  },
]);

monogatari.label('SorryDarlingGotUpset', [
  'l Прости меня, дорогая.',
  'l Я вчера вышел из себя.',
  'jump ThisIsForYou'
]);

monogatari.label('ThisIsForYou', [
  'l Это тебе. Я только хочу, чтобы ты была счастлива.',
  {
    'Choice': {
      'Accept': {
          'Text': 'Принять подарок',
          'Do': 'jump AcceptGift',
      },
      'Reject': {
          'Text': 'Отказаться',
          'Do': 'jump RejectGift',
      }
    }
  },
]);

monogatari.label('AcceptGift', [
  'y Спасибо. Я всё понимаю, но больше так не делай.',
  'jump Hugs',
]);

monogatari.label('RejectGift', [
  'y Ты на меня наорал, думаешь, это можно исправить подарками?',
  'y Как мне тебе верить?',
  'jump WeAreACouple'
]);

monogatari.label('Hugs', [
  'Вы обнимаетесь.',
  'jump Episode3A'
]);

monogatari.label('WeAreACouple', [
  'l Мы же с тобой пара. А значит, мы вместе должны решать конфликты.',
  'l Мы оба виноваты!',
  {
    'Choice': {
      'YoureRight': {
          'Text': 'Да, ты прав. Будем вместе стараться.',
          'Do': 'jump Hugs',
      },
      'YoureWrong': {
          'Text': 'Нет, на меня нельзя кричать ни в какой ситуации.',
          'Do': 'jump WhoNeedsYouAnyway',
      }
    }
  },
]);

monogatari.label('WhoNeedsYouAnyway', [
  'l Ну и что ты сделаешь?',
  'l Кому ты такая нужна?',
  'l Да никто тебя не полюбит, кроме меня.',
  {
    'Choice': {
      'SilentOffended': {
          'Text': 'Обиженно промолчать',
          'Do': 'jump Episode3A',
      },
      'GoAway': {
          'Text': 'Встать и выйти в дверь',
          'Do': 'jump Exit',
      },
      'LookAtYourself': {
          'Text': 'Возмутиться',
          'Do': 'jump LookAtYou',
      }
    }
  },
]);


monogatari.label('Exit', [
  'Ты встаёшь и уходишь, не оглядываясь.',
  'jump Good',
]);

monogatari.label('LookAtYou', [
  'y Сам на себя посмотри! Раскомандовался тут!',
  'jump Hit',
]);

monogatari.label('Hit', [
  'Внезапно он даёт тебе пощёчину.',
  'l Заткнись, дура!',
  'jump Worst',
]);

/************/
/* Концовки */
/************/

monogatari.label('Good', [
  'show message GoodEnding',
  'end'
]);

monogatari.label('Bad', [
  'show message BadEnding',
  'end'
]);

monogatari.label('Worst', [
  'show message WorstEnding',
  'end'
]);

/******************/
/* Полгода вместе */
/******************/
monogatari.label('Episode3A', [
  'Вы живёте вместе полгода.',
  // issue
  '(До сюда можно дойти только в 30% случаев... а то и меньше. Как это решить?)',
  'Вечер. Вы оба только что пришли с работы.',
  'l Блин, я так устал, а дома нечего есть...',
  {
    'Choice': {
      'Cook': {
          'Text': 'Извини, дорогой, сейчас что-нибудь придумаю!',
          'Do': 'jump Cooking',
      },
      'DontCook': {
          'Text': 'Мы оба одинаковое время проводим на работе. ' +
                'Давай, может, будем готовить по очереди?',
          'Do': 'jump FamilyNotWork',
      }
    }
  },
]);

monogatari.label('Cooking', [
  'Ты идёшь на кухню готовить ужин.',
  'Ты подаёшь на стол. Пока вы ужинаете, он нахваливает твою стряпню.',
  'l Как вкусно, дорогая!',
  'l Ты прекрасная хозяйка.',
  'l А давай ты будешь меньше работать и больше времени уделять семье?',
  {
    'Choice': {
      'FirstOption': {
          'Text': 'Хорошо, я только рада буду',
          'Do': 'jump FamilyNotWork',
      },
      'SecondOption': {
          'Text': 'Ты что, работа &mdash; важная часть моей жизни!',
          'Do': 'jump ILoveMyJob',
      }
    }
  },
]);

monogatari.label('FamilyNotWork', [
  // issue
  '(Вопрос: а если девушке не нравится работа, и она правда рада уйти?)',
  '(Пока мы приходим к такой концовке:)',
  'jump Bad'
]);

monogatari.label('ILoveMyJob', [
  'l Тоже мне, важная часть. Ерунда какая.',
  'l Да что ты вообще можешь?',
  'l Тебе нужно больше времени заниматься домом и не работать.',
  {
    'Choice': {
      'DontBeUpset': {
          'Text': 'Не кипятись',
          'Do': 'jump TalkToYouLater',
      },
      'ItsMyChoice': {
          'Text': 'Я сама решаю, как мне жить.',
          'Do': 'jump Hit',
      }
    }
  },
]);

monogatari.label('TalkToYouLater', [
  'y Не кипятись, ты устал. Давай позже обсудим. Я подумаю об этом.',
  'jump Bad'
]);
