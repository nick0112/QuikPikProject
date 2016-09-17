/**
 * Created by nick on 5/22/2016.
 */


function resetSix(){
    blueEight6.x = 30;
    blueEight6.y = windowHeight/3;
    blueNine6.x  = windowWidth - 170;
    blueNine6.y = windowHeight/3;
    blueTwo6.x = windowWidth/2;
    blueTwo6.y = windowHeight/2;
    greenFive6.x = 60;
    greenFive6.y = windowHeight - 160;
    greenThree6.x = windowWidth/2 + 75;
    greenThree6.y = windowHeight/2 - 80;
    greenTwo6.x = windowWidth - 100;
    greenTwo6.y = windowHeight - 160;
    redSix6.x = 75;
    redSix6.y = 120;
    missionBubble.x = 105;
    missionBubble.y = 300;
}

function setLevelSixFalse() {
    blueEight6.opClick = false;
    blueNine6.opClick = false;
    blueTwo6.opClick = false;
    greenFive6.opClick = false;
    greenTwo6.opClick = false;
    redSix6.opClick = false;
}

/*Draws the score*/
function drawScore6() {
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillText("x" + livesCount, canvas.width - 20, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L6Question, canvas.width / 2, 65);
    tracklives();
    ctx.fillStyle = "red";
    ctx.font = "18px myFont";
    level6Score = totalScore;
    ctx.fillText("Score: " + level6Score, 65, canvas.height - 5);
    ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

/*click level Fifth action*/
function levelSixAction(){
    if (cx >= blueEight6.x && cx <= blueEight6.x + blueEight6.width && cy >= blueEight6.y && cy <= blueEight6.y + blueEight6.height) {
        if (blueEight6.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level6Score += 5;
            levelSixCorrect++;
            blueEight6.isClicked = true;
            blueEight6.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore6();
        }
    } else if (cx >= greenTwo6.x && cx <= greenTwo6.x + greenTwo6.width && cy >= greenTwo6.y && cy <= greenTwo6.y + greenTwo6.height) {
        if (greenTwo6.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level6Score += 5;
            levelSixCorrect++;
            greenTwo6.isClicked = true;
            greenTwo6.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore6();
        }
    } else if (cx >= blueTwo6.x && cx <= blueTwo6.x + blueTwo6.width && cy >= blueTwo6.y && cy <= blueTwo6.y + blueTwo6.height) {
		changecolors();
        if (blueTwo6.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            blueTwo6.isClicked = true;
            blueTwo6.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore6();
        }
    } else if (cx >= blueNine6.x && cx <= blueNine6.x + blueNine6.width && cy >= blueNine6.y && cy <= blueNine6.y + blueNine6.height) {
        if (blueNine6.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            blueNine6.isClicked = true;
            blueNine6.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore6();
        }
    } else if (cx >= greenFive6.x && cx <= greenFive6.x + greenFive6.width && cy >= greenFive6.y && cy <= greenFive6.y + greenFive6.height) {
        if (greenFive6.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            greenFive6.isClicked = true;
            greenFive6.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore6();
        }
    } else if (cx >= greenThree6.x && cx <= greenThree6.x + greenThree6.width && cy >= greenThree6.y && cy <= greenThree6.y + greenThree6.height) {
        if (greenThree6.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            greenThree6.isClicked = true;
            greenThree6.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore6();
        }
    } else if (cx >= redSix6.x && cx <= redSix6.x + redSix6.width && cy >= redSix6.y && cy <= redSix6.y + redSix6.height) {
        if (redSix6.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            redSix6.isClicked = true;
            redSix6.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore6();
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