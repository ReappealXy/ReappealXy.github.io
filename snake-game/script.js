document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('score');
    const highScoreElement = document.getElementById('highScore');
    const startBtn = document.getElementById('startBtn');
    const restartBtn = document.getElementById('restartBtn');

    // 游戏参数
    const gridSize = 20;
    const tileCount = canvas.width / gridSize;
    let speed = 7;

    // 蛇的初始位置和速度
    let snake = [];
    let velocityX = 0;
    let velocityY = 0;
    let nextVelocityX = 0;
    let nextVelocityY = 0;

    // 食物位置
    let foodX;
    let foodY;

    // 游戏状态
    let gameStarted = false;
    let gameOver = false;
    let score = 0;
    let highScore = localStorage.getItem('snakeHighScore') || 0;
    highScoreElement.textContent = highScore;

    // 初始化游戏
    function initGame() {
        snake = [
            { x: 10, y: 10 }
        ];
        velocityX = 0;
        velocityY = 0;
        nextVelocityX = 0;
        nextVelocityY = 0;
        score = 0;
        scoreElement.textContent = score;
        gameOver = false;
        placeFood();
    }

    // 随机放置食物
    function placeFood() {
        // 确保食物不会出现在蛇身上
        let validPlacement = false;
        while (!validPlacement) {
            foodX = Math.floor(Math.random() * tileCount);
            foodY = Math.floor(Math.random() * tileCount);
            
            validPlacement = true;
            for (let i = 0; i < snake.length; i++) {
                if (snake[i].x === foodX && snake[i].y === foodY) {
                    validPlacement = false;
                    break;
                }
            }
        }
    }

    // 游戏主循环
    function gameLoop() {
        if (gameStarted && !gameOver) {
            setTimeout(gameLoop, 1000 / speed);
            updateGame();
            drawGame();
        }
    }

    // 更新游戏状态
    function updateGame() {
        // 更新蛇的方向
        velocityX = nextVelocityX;
        velocityY = nextVelocityY;

        // 移动蛇
        const head = { x: snake[0].x + velocityX, y: snake[0].y + velocityY };
        
        // 检查是否撞墙
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            gameOver = true;
            return;
        }
        
        // 检查是否撞到自己
        for (let i = 0; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                gameOver = true;
                return;
            }
        }
        
        // 添加新的头部
        snake.unshift(head);
        
        // 检查是否吃到食物
        if (head.x === foodX && head.y === foodY) {
            // 增加分数
            score++;
            scoreElement.textContent = score;
            
            // 更新最高分
            if (score > highScore) {
                highScore = score;
                highScoreElement.textContent = highScore;
                localStorage.setItem('snakeHighScore', highScore);
            }
            
            // 放置新的食物
            placeFood();
            
            // 每5分增加速度
            if (score % 5 === 0) {
                speed += 1;
            }
        } else {
            // 如果没有吃到食物，移除尾部
            snake.pop();
        }
    }

    // 绘制游戏
    function drawGame() {
        // 清空画布
        ctx.fillStyle = '#eee';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制食物
        ctx.fillStyle = 'red';
        ctx.fillRect(foodX * gridSize, foodY * gridSize, gridSize, gridSize);
        
        // 绘制蛇
        for (let i = 0; i < snake.length; i++) {
            // 蛇头用不同颜色
            if (i === 0) {
                ctx.fillStyle = 'darkgreen';
            } else {
                ctx.fillStyle = 'green';
            }
            ctx.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize, gridSize);
            
            // 绘制蛇身边框
            ctx.strokeStyle = 'black';
            ctx.strokeRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize, gridSize);
        }
        
        // 游戏结束显示
        if (gameOver) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = 'white';
            ctx.font = '30px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('游戏结束!', canvas.width / 2, canvas.height / 2);
            ctx.font = '20px Arial';
            ctx.fillText('按"重新开始"按钮再玩一次', canvas.width / 2, canvas.height / 2 + 40);
        }
    }

    // 键盘控制
    document.addEventListener('keydown', (e) => {
        // 防止方向键滚动页面
        if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'].includes(e.key)) {
            e.preventDefault();
        }
        
        // 只有在游戏开始后才能控制
        if (!gameStarted || gameOver) return;
        
        // 根据按键设置方向（防止直接反向移动）
        switch (e.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                if (velocityY !== 1) {
                    nextVelocityX = 0;
                    nextVelocityY = -1;
                }
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                if (velocityY !== -1) {
                    nextVelocityX = 0;
                    nextVelocityY = 1;
                }
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                if (velocityX !== 1) {
                    nextVelocityX = -1;
                    nextVelocityY = 0;
                }
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                if (velocityX !== -1) {
                    nextVelocityX = 1;
                    nextVelocityY = 0;
                }
                break;
        }
    });

    // 开始游戏按钮
    startBtn.addEventListener('click', () => {
        if (!gameStarted) {
            gameStarted = true;
            initGame();
            // 默认向右移动开始游戏
            nextVelocityX = 1;
            nextVelocityY = 0;
            gameLoop();
        }
    });

    // 重新开始按钮
    restartBtn.addEventListener('click', () => {
        gameStarted = true;
        initGame();
        // 默认向右移动开始游戏
        nextVelocityX = 1;
        nextVelocityY = 0;
        gameLoop();
    });

    // 初始绘制游戏界面
    drawGame();
}); 