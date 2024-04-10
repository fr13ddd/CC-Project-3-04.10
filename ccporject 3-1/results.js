document.addEventListener('DOMContentLoaded', function() {
    const resultsDiv = document.getElementById('results');
    let resultsHTML = '<h3>Survey Results</h3>';

    // 描述性文字和图片的HTML代码
    const multiplayerDescription = `<span style="font-weight: bold; font-size: larger;">Social Strikers:</span> <br><br>If you're a player who enjoys multiplayer games, you likely thrive on the social interaction that comes with teaming up or competing against other players. <br><br>You appreciate the competitive edge, where every match is an opportunity to challenge yourself and climb the ranks. <br>The camaraderie of a team working together towards a common goal might be what excites you the most, as you coordinate strategies and play off each other's strengths.`;
    const singleplayerDescription = `<span style="font-weight: bold; font-size: larger;">Lone Navigators:</span> <br><br>If you're a player who finds solace in the solo journey of single-player games, you relish the immersive narratives that allow you to become the protagonist of your own story. <br><br>The controlled environment where you can pause and strategize at your own pace may be what you value most. <br>As a solo adventurer, you are the master of the game’s universe, making pivotal decisions and exploring worlds at your leisure.`;
    
    const multiplayerImage = '<img src="pictures/multiplayer.png" alt="Multiplayer Image" style="max-width:100%;height:auto;">';
    const singleplayerImage = '<img src="pictures/rush b.png" alt="Single Player Image" style="max-width:100%;height:auto;">';

    // 预定义结果展示顺序
    const displayOrder = [
        'doYouPlayGame',
        'whatGame',
        'playTime',
        'gameMode',
        'attractiveness',
        'skillLevel',
        'playStyle',
    ];

    // 检查用户选择的游戏模式和风格
    let gameMode;
    let playStyle;

    // 颜色映射表
    const playStyleColors = {
        'Aggressive': '#ff0000', // 红色
        'Defensive': '#0000ff', // 蓝色
        'Strategic': '#008000', // 绿色
        'Casual': '#ffff00', // 黄色
        'Competitive': '#ffa500', // 橙色
        'Team Player': '#800080', // 紫色
        'Solo Player': '#808080', // 灰色
    };

    // 按照预定义的顺序遍历并展示结果
    displayOrder.forEach(function(key) {
        const value = localStorage.getItem(key) || 'Not provided';
        if (key === 'gameMode') {
            gameMode = value;
        } else if (key === 'playStyle') {
            playStyle = value;
        }
        resultsHTML += `<p>${key.replace(/([A-Z])/g, ' $1')}: ${value}</p>`;
    });

    // 根据游戏模式添加相应的图片和描述性文字到HTML
    if (gameMode === 'multiplayer') {
        resultsHTML += multiplayerImage + multiplayerDescription;
    } else if (gameMode === 'single-player') {
        resultsHTML += singleplayerImage + singleplayerDescription;
    }

    resultsDiv.innerHTML = resultsHTML;

    // 根据游戏风格改变背景颜色
    if (playStyleColors[playStyle]) {
        document.body.style.backgroundColor = playStyleColors[playStyle];
    }
});
