/**
 * Created by nick on 5/24/2016.
 */

function resetTen(){
    redTwo10.x = 30;
    redTwo10.y = windowHeight/3;
    redEight10.x  = windowWidth - 170;
    redEight10.y = windowHeight/3;
    blueCircle10.x = windowWidth/2;
    blueCircle10.y = windowHeight/2;
    greenTriangle10.x = 60;
    greenTriangle10.y = windowHeight - 160;
    yellowOne10.x = windowWidth/2 + 100;
    yellowOne10.y = windowHeight/2 - 80;
    greenSix10.x = windowWidth - 100;
    greenSix10.y = windowHeight - 160;
    blueTwo10.x = 175;
    blueTwo10.y = 120;
    missionBubble.x = 105;
    missionBubble.y = 300;
}

function setLevelTenFalse(){
    redTwo10.opClick = false;
    redEight10.opClick = false;
    blueCircle10.opClick = false;
    greenTriangle10.opClick = false;
    yellowOne10.opClick = false;
    greenSix10.opClick = false;
    blueTwo10.opClick = false;	
}

/*Draws the score*/
function drawScore10() {
    ctx.font = "20px myfont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillText("x" + livesCount, canvas.width - 20, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L10Question, canvas.width / 2, 65);
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level10Score, 65, canvas.height - 5);
    ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

/*click level Nine action*/
function levelTenAction(){
    if (cx >= yellowOne10.x && cx <= yellowOne10.x + yellowOne10.width && cy >= yellowOne10.y && cy <= yellowOne10.y + yellowOne10.height) {
        if (yellowOne10.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level10Score += 5;
            levelTenCorrect++;
            yellowOne10.isClicked = true;
            yellowOne10.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore10();
        }
    } else if (cx >= greenSix10.x && cx <= greenSix10.x + greenSix10.width && cy >= greenSix10.y && cy <= greenSix10.y + greenSix10.height) {
        if (greenSix10.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level10Score += 5;
            levelTenCorrect++;
            greenSix10.isClicked = true;
            greenSix10.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore10();
        }
    } else if (cx >= blueTwo10.x && cx <= blueTwo10.x + blueTwo10.width && cy >= blueTwo10.y && cy <= blueTwo10.y + blueTwo10.height) {
        if (blueTwo10.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level10Score += 5;
            levelTenCorrect++;
            blueTwo10.isClicked = true;
            blueTwo10.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore10();
        }
    } else if (cx >= redTwo10.x && cx <= redTwo10.x + redTwo10.width && cy >= redTwo10.y && cy <= redTwo10.y + redTwo10.height) {
        if (redTwo10.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            redTwo10.isClicked = true;
            redTwo10.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore10();
        }
    } else if (cx >= redEight10.x && cx <= redEight10.x + redEight10.width && cy >= redEight10.y && cy <= redEight10.y + redEight10.height) {
        if (redEight10.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            redEight10.isClicked = true;
            redEight10.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore10();
        }
    } else if (cx >= blueCircle10.x && cx <= blueCircle10.x + blueCircle10.width && cy >= blueCircle10.y && cy <= blueCircle10.y + blueCircle10.height) {
        if (blueCircle10.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            blueCircle10.isClicked = true;
            blueCircle10.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore10();
        }
    } else if (cx >= greenTriangle10.x && cx <= greenTriangle10.x + greenTriangle10.width && cy >= greenTriangle10.y && cy <= greenTriangle10.y + greenTriangle10.height) {
        if (greenTriangle10.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            greenTriangle10.isClicked = true;
            greenTriangle10.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore10();
        }
    } else if (cx >= missionBubble.x && cx <= missionBubble.x + missionBubble.width && cy >= missionBubble.y && cy <= missionBubble.y + missionBubble.height) {
		changecolors();
        if (missionBubble.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount = 0;
            missionBubble.isClicked = true;
            missionBubble.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore();
        }
    }
}
