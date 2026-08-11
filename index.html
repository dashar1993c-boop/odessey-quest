[8/11/2026 11:09 PM] Daria: // Состояние игры
let state = {
  years: 0,
  crew: 600,
  wrath: 10,
  morale: 100,
  currentScene: 'start'
};

// Сценарий квеста (12 этапов)
const story = {
  start: {
    title: "1. Отплытие из под павшей Трои",
    text: "Десять лет осады позади. Троя сожжена благодаря вашей хитрой деревянной лошадке. Двенадцать кораблей Итаки с шестью сотнями воинов выходят в Эгейское море. Гребцы поют песню о скором возвращении к женам, но олимпийские боги уже плетут свои сети...",
    choices: [
      {
        text: "Принести пышные жертвы Зевсу перед отплытием",
        effect: "+1 год, Гнев -10%",
        action: () => { modifyState(1, 0, -10, 10); goTo('lotus'); }
      },
      {
        text: "Спешить домой без промедления!",
        effect: "Гнев +15%",
        action: () => { modifyState(0, 0, 15, -10); goTo('lotus'); }
      }
    ]
  },
  lotus: {
    title: "2. Остров Лотофагов",
    text: "Шторм пригнал корабли к берегу, где местные жители питаются сладкими цветами лотоса. Отправив разведку, вы обнаруживаете, что ваши воины забыли Итаку, семьи и duty — они сидят в блаженной нирване и жуют бутоны.",
    choices: [
      {
        text: "Силой притащить дураков на корабли и связать под банками",
        effect: "+0.5 года, Мораль -10",
        action: () => { modifyState(0.5, 0, 0, -10); goTo('cyclops'); }
      },
      {
        text: "Оставить отведавших лотоса и отплыть с верными",
        effect: "-12 воинов",
        action: () => { modifyState(0, -12, 0, 5); goTo('cyclops'); }
      }
    ]
  },
  cyclops: {
    title: "3. Пещера Киклопа Полифема",
    text: "Вы заперты в пещере одноглазого гиганта Полифема, сына Посейдона. Он уже позавтракал двумя вашими воинами. У вас есть огромный сосновый кол и мех с крепким фракийским вином.",
    choices: [
      {
        text: "Напоить Полифема, назваться «Никем» и ослепить во сне",
        effect: "-6 воинов, Гнев Посейдона +40%",
        action: () => { modifyState(1, -6, 40, -10); goTo('aeolus'); }
      },
      {
        text: "Выкрасть ключи и попытаться сбежать тихо ночью",
        effect: "-30 воинов, Гнев +10%",
        action: () => { modifyState(0.5, -30, 10, -20); goTo('aeolus'); }
      }
    ]
  },
  aeolus: {
    title: "4. Остров Эола — Повелителя Ветров",
    text: "Эол дарит вам кожаный мех, в который завязаны все буйные ветры, кроме попутного Зефира. Родная Итака уже виднеется на горизонте! Но когда вы засыпаете от усталости, спутники начинают шептаться, что в мешке скрыто троянское золото...",
    choices: [
      {
        text: "Спать. Вы не спали трое суток...",
        effect: "Буря отбрасывает назад! +2 года",
        action: () => { modifyState(2, -20, 15, -20); goTo('laestrygonians'); }
      },
      {
        text: "Держать мех в руках и не смыкать глаз",
        effect: "Успешный причал на время, Гнев +5%",
        action: () => { modifyState(0.5, 0, 5, 10); goTo('laestrygonians'); }
      }
    ]
  },
  laestrygonians: {
    title: "5. Лестригоны-людоеды",
    text: "Ваш флот заходит в уютную гавань, окруженную скалами. Местные жители оказываются исполинскими людоедами. Они начинают швырять в корабли огромные валуны и нанизывать воинов на пики, как рыбу!",
    choices: [
      {
        text: "Приказать своему кораблю перерубить канаты и бежать из гавани",
        effect: "-11 кораблей, -450 воинов",
        action: () => { modifyState(0.5, -450, 10, -30); goTo('circe'); }
      },
      {
        text: "Попытаться принять бой на берегу и спасти флот",
        effect: "-520 воинов, +2 года",
        action: () => { modifyState(2, -520, 20, -40); goTo('circe'); }
      }
    ]
  },
  circe: {
    title: "6. Остров Ээя и чары Цирцеи",
    text: "Красивая волшебница Цирцева превратила вашу разведку в упитанных свиней. Бог Гермес дает вам волшебный корень «моли», защищающий от магии, и дает пару пикантных советов.",
    choices: [
      {
        text: "Принять приглашение Цирцеи, обнажить меч и остаться на год",
        effect: "+1 год, Мораль +30%",
        action: () => { modifyState(1, 0, -10, 30); goTo('underworld'); }
      },
      {
        text: "Заставить её вернуть людям облик и немедленно отплыть",
        effect: "+0.5 года, Гнев +10%",
        action: () => { modifyState(0.5, 0, 10, -10); goTo('underworld'); }
      }
    ]
  },
  underworld: {
    title: "7. Царство Аида (Некромантия)",
    text: "Вы спустились на край земли, чтобы принести жертву и спросить тень слепого пророка Тиресия о дороге домой. В тумане к вам подходят тени вашей матери и павших под Троей друзей — Ахилла и Агамемнона.",
    choices: [
      {
        text: "Выслушать строгие пророчества Тиресия и предостережения Ахилла",
        effect: "+1 год, Гнев -10%",
        action: () => { modifyState(1, 0, -10, 0); goTo('sirens'); }
      },
      {
        text: "Быстро расспросить мать и скорее бежать от мрака Аида",
        effect: "Мораль -15%",
        action: () => { modifyState(0.5, 0, 5, -15); goTo('sirens'); }
      }
    ]
  },
  sirens: {
    title: "8. Сирены, Сцилла и Харибда",
    text: "Впереди сладкоголосые Сирены и узкий пролив между монстром Сциллой с шестью головами и водоворотом Харибдой. Приказать залить уши воском — разумно, но кого принести в жертву?",
    choices: [
      {
        text: "Прижаться к Сцилле (потерять 6 воинов, но спасти корабль)",
        effect: "-6 воинов",
        action: () => { modifyState(0.5, -6, 0, -10); goTo('helios'); }
      },
      {
        text: "Пройти по центру между Харибдой и Сциллой",
        effect: "-20 воинов, Гнев +20%",
        action: () => { modifyState(1, -20, 20, -20); goTo('helios'); }
      }
    ]
  },
  helios: {
    title: "9. Священные быки Гелиоса",
    text: "Буря заперла вас на острове Фринакия. Еда кончилась. Пока вы молились в глубине острова, голодные спутники закололи священных золотых быков бога Солнца Гелиоса. Разгневанный бог грозит уйти в Аид!",
    choices: [
      {
        text: "Выйти в море. Принять карающую молнию Зевса",
        effect: "Гибель оставшихся спутников, Одиссей единственный выживший",
        action: () => { 
          state.crew = 1; // Остается только Одиссей
          modifyState(2, 0, 30, -50); 
          goTo('calypso'); 
        }
      }
    ]
  },
  calypso: {
    title: "10. Плен у нимфы Калипсо",
    text: "Вы выброшены штормом на остров Огигия. Нимфа Калипсо влюблена в вас, предлагает бессмертие и вечную молодость. Проходит 7 лет, пока Афина не умоляет Зевса вмешаться.",
    choices: [
      {
        text: "Отвергнуть бессмертие, построить плот и плыть к Пенелопе",
        effect: "+7 лет, Гнев -20%",
        action: () => { modifyState(7, 0, -20, 20); goTo('phaeacians'); }
      }
    ]
  },
  phaeacians: {
    title: "11. Страна Феаков (Схерия)",
    text: "Посейдон разбивает ваш плот, но юная царевна Навсикая находит вас на берегу. Царь Алкиной устраивает пир, где вы рассказывеаете свои легендарные приключения.",
    choices: [
      {
        text: "Принять быстрый волшебный корабль феаков до Итаки",
        effect: "+0.5 года, Полный отдых",
        action: () => { modifyState(0.5, 0, -10, 50); goTo('ithaca_battle'); }
      }
    ]
  },
  ithaca_battle: {
    title: "12. Битва в зале Итаки (Финал)",
    text: "Вы вернулись нищим стариком. В вашем доме 108 дерзких женихов пируют и разоряют царство. Пенелопа объявляет испытание: тот, кто натянет тугой лук Одиссея и прострелит 12 колец, станет её мужем. Вы берете лук в руки...",
    choices: [
      {
        text: "Запереть двери зала и перебить всех женихов до единого!",
        effect: "Кровавая победа, возвращение трона",
        action: () => { goTo('ending'); }
      },
      {
        text: "Предложить помилование тем, кто сложит оружие и возместит ущерб",
        effect: "Менее кровавый финал",
        action: () => { goTo('ending'); }
      }
    ]
  },
  ending: {
    title: "Эпилог: Возвращение Царя",
    text: "", // Формируется динамически
    choices: []
  }
};
[8/11/2026 11:09 PM] Daria: function modifyState(years, crew, wrath, morale) {
  state.years += years;
  state.crew = Math.max(1, state.crew + crew);
  state.wrath = Math.min(100, Math.max(0, state.wrath + wrath));
  state.morale = Math.min(100, Math.max(0, state.morale + morale));
  updateHUD();
}

function updateHUD() {
  document.getElementById('stat-years').innerText = ${state.years.toFixed(1)} лет;
  document.getElementById('stat-crew').innerText = ${state.crew} воинов;
  document.getElementById('stat-wrath').innerText = ${state.wrath}%;
  document.getElementById('stat-morale').innerText = ${state.morale}%;
}

function goTo(sceneKey) {
  state.currentScene = sceneKey;
  const scene = story[sceneKey];
  
  document.getElementById('chapter-title').innerText = scene.title;
  
  if (sceneKey === 'ending') {
    renderEnding();
    return;
  }

  document.getElementById('story-text').innerText = scene.text;
  const choicesContainer = document.getElementById('choices-container');
  choicesContainer.innerHTML = '';

  scene.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = <span>${choice.text}</span><span class="choice-effect">${choice.effect}</span>;
    btn.onclick = choice.action;
    choicesContainer.appendChild(btn);
  });
}

function renderEnding() {
  const totalTime = 10 + state.years; // 10 лет Троянской войны + скитания
  let endingText = Скитания Одиссея завершены.\n\n;
  endingText += • Общее время отсутствия: ${totalTime.toFixed(1)} лет (10 лет войны + ${state.years.toFixed(1)} лет скитаний).\n;
  endingText += • Выжившие спутники: ${state.crew > 1 ? state.crew + " человек" : "Только сам Одиссей (все остальные погибли)"}.\n;
  endingText += • Финальное отношение богов: ${state.wrath < 30 ? "Олимп сменил гнев на милость" : "Посейдон навсегда затаил обиду"}.\n\n;
  
  endingText += "Вы очистили свой дом от заговорщиков, доказали Пенелопе свою личность через тайну оливкового ложа и восстановили мир на Итаке при поддержке Афины Паллады.";

  document.getElementById('story-text').innerText = endingText;
  const choicesContainer = document.getElementById('choices-container');
  choicesContainer.innerHTML = '';

  const restartBtn = document.createElement('button');
  restartBtn.className = 'restart-btn';
  restartBtn.innerText = 'Начать поход заново';
  restartBtn.onclick = resetGame;
  choicesContainer.appendChild(restartBtn);
}

function resetGame() {
  state = { years: 0, crew: 600, wrath: 10, morale: 100, currentScene: 'start' };
  updateHUD();
  goTo('start');
}

// Запуск игры
updateHUD();
goTo('start');
