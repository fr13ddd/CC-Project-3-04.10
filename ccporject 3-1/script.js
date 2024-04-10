function submitSurvey() {
    // 收集表单数据
    const surveyData = {
        doYouPlayGame: document.getElementById('do-you-play-game').value,
        whatGame: document.getElementById('what-game').value,
        playTime: document.getElementById('play-time').value,
        gameMode: document.querySelector('select[name="game_mode"]').value,
        attractiveness: document.getElementById('attractiveness').value,
        skillLevel: document.getElementById('skill-level').value,
        playStyle: document.getElementById('play-style').value
    };

    // 存储数据到本地存储
    for (const key in surveyData) {
        localStorage.setItem(key, surveyData[key]);
    }

    // 重定向到中间页面 "let's see your result.html"
    window.location.href = "let's see your result.html"; // 确保文件名和路径正确
}
