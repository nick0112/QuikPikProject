/**
 * Level 8
 */

function resetEight(){
    blueEight8.x = 30;
    blueEight8.y = windowHeight/3;
    blueFour8.x  = windowWidth - 170;
    blueFour8.y = windowHeight/3;
    greenSix8.x = windowWidth/2;
    greenSix8.y = windowHeight/2;
    redTwo8.x = 60;
    redTwo8.y = windowHeight - 160;
    redThree8.x = windowWidth/2 + 105;
    redThree8.y = windowHeight/2 - 80;
    greenFive8.x = windowWidth - 100;
    greenFive8.y = windowHeight - 160;
    greenOne8.x = 175;
    greenOne8.y = 120;
	blueFive8.x = 120;
	blueFive8.y = 200;
    missionBubble.x = 105;
    missionBubble.y = 300;
}

function setLevelEightFalse() {
    blueEight8.opClick = false;
    blueFour8.opClick = false;
    greenSix8.opClick = false;
    redTwo8.opClick = false;
    redThree8.opClick = false;
    greenFive8.opClick = false;
	greenOne8.opClick = false;
	blueFive8.opClick = false;
}

/*Draws the score*/
function drawScore8() {
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillText("x" + livesCount, canvas.width - 20, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L8Question, canvas.width / 2, 65);
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level8Score, 65, canvas.height - 5);
    ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

/*click level Fifth action*/
function levelEightAction(){
    if (cx >= blueEight8.x && cx <= blueEight8.x + blueEight8.width && cy >= blueEight8.y && cy <= blueEight8.y + blueEight8.height) {
        if (blueEight8.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level8Score += 5;
            levelEightCorrect++;
            blueEight8.isClicked = true;
            blueEight8.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore8();
        }
    } else if (cx >= blueFour8.x && cx <= blueFour8.x + blueFour8.width && cy >= blueFour8.y && cy <= blueFour8.y + blueFour8.height) {
        if (blueFour8.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level8Score += 5;
            levelEightCorrect++;
            blueFour8.isClicked = true;
            blueFour8.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore8();
        }
    } else if (cx >= greenSix8.x && cx <= greenSix8.x + greenSix8.width && cy >= greenSix8.y && cy <= greenSix8.y + greenSix8.height) {
        if (greenSix8.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level8Score += 5;
            levelEightCorrect++;
            greenSix8.isClicked = true;
            greenSix8.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore8();
        }
    } else if (cx >= redTwo8.x && cx <= redTwo8.x + redTwo8.width && cy >= redTwo8.y && cy <= redTwo8.y + redTwo8.height) {
        if (redTwo8.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level8Score += 5;
            levelEightCorrect++;
            redTwo8.isClicked = true;
            redTwo8.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore8();
        }
    } else if (cx >= redThree8.x && cx <= redThree8.x + redThree8.width && cy >= redThree8.y && cy <= redThree8.y + redThree8.height) {
		changecolors();
        if (redThree8.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            redThree8.isClicked = true;
            redThree8.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore8();
        }
    } else if (cx >= greenFive8.x && cx <= greenFive8.x + greenFive8.width && cy >= greenFive8.y && cy <= greenFive8.y + greenFive8.height) {
		changecolors();
        if (greenFive8.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            greenFive8.isClicked = true;
            greenFive8.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore8();
        }
    } else if (cx >= greenOne8.x && cx <= greenOne8.x + greenOne8.width && cy >= greenOne8.y && cy <= greenOne8.y + greenOne8.height) {
		changecolors();
        if (greenOne8.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            greenOne8.isClicked = true;
            greenOne8.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore8();
        }
    } else if (cx >= blueFive8.x && cx <= blueFive8.x + blueFive8.width && cy >= blueFive8.y && cy <= blueFive8.y + blueFive8.height) {
		changecolors();
        if (blueFive8.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            blueFive8.isClicked = true;
            blueFive8.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore8();
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