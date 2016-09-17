/**
 * Created by nick on 5/19/2016.
 */




/*Resets the x and y co-ord of level 4*/
function resetFour(){
    redInRed.x = 150;
    redInGreen.x = windowWidth/2 - 550;
    redInBlue.x = windowWidth /2;
    redRects.x = 220;
    redBlue.x = windowWidth/2 + 10;
    nineInRed2.x = 55;
    missionBubble.x= 60;
    missionBubble.y = window.innerHeight - 200;
    nineInRed2.y = windowHeight/2 - 40;
    redInRed.y = 200;
    redInGreen.y = windowHeight/2 - 40;
    redInBlue.y  = windowHeight - 180;
    redRects.y = 115;
    redBlue.y = windowHeight/2 - 30;
}

/*click level Two action*/
function levelFourAction(){
    if (cx >= redInRed.x && cx <= redInRed.x + redInRed.width && cy >= redInRed.y && cy <= redInRed.y + redInRed.height) {
        if (redInRed.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level4Score += 5;
            levelFourCorrect++;
            redInRed.isClicked = true;
            redInRed.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore4();
        }

    } else if (cx >= redInGreen.x && cx <= redInGreen.x + redInGreen.width && cy >= redInGreen.y && cy <= redInGreen.y + redInGreen.height) {
        if (redInGreen.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level4Score += 5;
            levelFourCorrect++;
            redInGreen.isClicked = true;
            redInGreen.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore4();
        }
    } else if (cx >= redInBlue.x && cx <= redInBlue.x + redInBlue.width && cy >= redInBlue.y && cy <= redInBlue.y + redInBlue.height) {
        if (redInBlue.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level4Score += 5;
            levelFourCorrect++;
            redInBlue.isClicked = true;
            redInBlue.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore4();
        }
    } else if (cx >= redRects.x && cx <= redRects.x + redRects.width && cy >= redRects.y && cy <= redRects.y + redRects.height) {
		changecolors();
        if (redRects.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            redRects.isClicked = true;
            redRects.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore4();
        }
    } else if (cx >= redBlue.x && cx <= redBlue.x + redBlue.width && cy >= redBlue.y && cy <= redBlue.y + redBlue.height) {
		changecolors();
        if (redBlue.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            redBlue.isClicked = true;
            redBlue.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore4();
        }
    } else if (cx >= nineInRed2.x && cx <= nineInRed2.x + nineInRed2.width && cy >= nineInRed2.y && cy <= nineInRed2.y + nineInRed2.height) {
		changecolors();
        if (nineInRed2.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            nineInRed2.isClicked = true;
            nineInRed2.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore4();
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

function setLevelFourFalse(){
	redInRed.opClick = false;
	redInGreen.opClick = false;
	redInBlue.opClick = false;
	redRects.opClick = false;
	redBlue.opClick = false;
	nineInRed2.opClick = false;
}

/*Draws the score*/
function drawScore4() {
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillText("x" + livesCount, canvas.width - 20, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L4Question, canvas.width / 2, 65);
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level4Score, 65, canvas.height - 5);
	ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}