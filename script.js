function modifyState(years, crew, wrath, morale) {
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
updateHUD();
goTo('start');
