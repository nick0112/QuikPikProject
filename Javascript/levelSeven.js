/**
 * Level 7
 */
 
function resetSeven(){
    blueCircle7.x = 30;
    blueCircle7.y = windowHeight/3;
    blueDiamond7.x  = windowWidth - 170;
    blueDiamond7.y = windowHeight/3;
    greenDiamond7.x = windowWidth/2;
    greenDiamond7.y = windowHeight/2;
    greenCircle7.x = 60;
    greenCircle7.y = windowHeight - 160;
    greenSquare7.x = windowWidth/2 + 105;
    greenSquare7.y = windowHeight/2 - 80;
    greenTriangle7.x = windowWidth - 100;
    greenTriangle7.y = windowHeight - 160;
    redSquare7.x = 175;
    redSquare7.y = 120;
	yellowDiamond7.x = 120;
	yellowDiamond7.y = 200;
    missionBubble.x = 105;
    missionBubble.y = 300;
}

function setLevelSevenFalse() {
    blueCircle7.opClick = false;
    blueDiamond7.opClick = false;
    greenDiamond7.opClick = false;
    greenCircle7.opClick = false;
    greenSquare7.opClick = false;
    greenTriangle7.opClick = false;
	redSquare7.opClick = false;
	yellowDiamond7.opClick = false;
}

/*Draws the score*/
function drawScore7() {
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillText("x" + livesCount, canvas.width - 20, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L7Question, canvas.width / 2, 65);
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level7Score, 65, canvas.height - 5);
    ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

/*click level Fifth action*/
function levelSevenAction(){
    if (cx >= greenDiamond7.x && cx <= greenDiamond7.x + greenDiamond7.width && cy >= greenDiamond7.y && cy <= greenDiamond7.y + greenDiamond7.height) {
        if (greenDiamond7.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level7Score += 5;
            levelSevenCorrect++;
            greenDiamond7.isClicked = true;
            greenDiamond7.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore7();
        }
    } else if (cx >= greenSquare7.x && cx <= greenSquare7.x + greenSquare7.width && cy >= greenSquare7.y && cy <= greenSquare7.y + greenSquare7.height) {
        if (greenSquare7.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level7Score += 5;
            levelSevenCorrect++;
            greenSquare7.isClicked = true;
            greenSquare7.opClick++;
            bubblePop.play();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore7();
        }
    } else if (cx >= greenTriangle7.x && cx <= greenTriangle7.x + greenTriangle7.width && cy >= greenTriangle7.y && cy <= greenTriangle7.y + greenTriangle7.height) {
        if (greenTriangle7.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level7Score += 5;
            levelSevenCorrect++;
            greenTriangle7.isClicked = true;
            greenTriangle7.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore7();
        }
    } else if (cx >= blueCircle7.x && cx <= blueCircle7.x + blueCircle7.width && cy >= blueCircle7.y && cy <= blueCircle7.y + blueCircle7.height) {
		changecolors();
        if (blueCircle7.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            blueCircle7.isClicked = true;
            blueCircle7.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore7();
        }
    } else if (cx >= blueDiamond7.x && cx <= blueDiamond7.x + blueDiamond7.width && cy >= blueDiamond7.y && cy <= blueDiamond7.y + blueDiamond7.height) {
		changecolors();
        if (blueDiamond7.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            blueDiamond7.isClicked = true;
            blueDiamond7.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore7();
        }
    } else if (cx >= greenCircle7.x && cx <= greenCircle7.x + greenCircle7.width && cy >= greenCircle7.y && cy <= greenCircle7.y + greenCircle7.height) {
		changecolors();
        if (greenCircle7.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            greenCircle7.isClicked = true;
            greenCircle7.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore7();
        }
    } else if (cx >= redSquare7.x && cx <= redSquare7.x + redSquare7.width && cy >= redSquare7.y && cy <= redSquare7.y + redSquare7.height) {
		changecolors();
        if (redSquare7.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            redSquare7.isClicked = true;
            redSquare7.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore7();
        }
    } else if (cx >= yellowDiamond7.x && cx <= yellowDiamond7.x + yellowDiamond7.width && cy >= yellowDiamond7.y && cy <= yellowDiamond7.y + yellowDiamond7.height) {
		changecolors();
        if (yellowDiamond7.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            yellowDiamond7.isClicked = true;
            yellowDiamond7.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore7();
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