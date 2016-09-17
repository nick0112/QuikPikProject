/**
 * Created by nick on 5/18/2016.
 */



function resetFive(){
    blueTwo.x = window.innerWidth / 2;
    greenTwo2.x = 175;
    redSeven.x = 65;
    redTwo.x = 10;
    redSix.x = window.innerWidth - 100;
    yellowSeven.x = window.innerWidth - 100;
	redFive2.x = window.innerWidth-100;
    missionBubble.x= 60;
    blueTwo.y = window.innerHeight / 2;
    greenTwo2.y = 150;
    redSeven.y = 225;
    redTwo.y = 350;
    redSix.y = 430;
    yellowSeven.y = windowHeight / 5;
	redFive2.y = windowHeight / 2;
    missionBubble.y = window.innerHeight - 200;
}


/*click level Fifth action*/
function levelFiveAction(){
    if (cx >= redSeven.x && cx <= redSeven.x + redSeven.width && cy >= redSeven.y && cy <= redSeven.y + redSeven.height) {
        if (redSeven.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level5Score += 5;
            levelFiveCorrect++;
            redSeven.isClicked = true;
            redSeven.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore5();
        }

    } else if (cx >= redTwo.x && cx <= redTwo.x + redTwo.width && cy >= redTwo.y && cy <= redTwo.y + redTwo.height) {
        if (redTwo.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level5Score += 5;
            levelFiveCorrect++;
            redTwo.isClicked = true;
            redTwo.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore5();
        }
    } else if (cx >= redFive2.x && cx <= redFive2.x + redFive2.width && cy >= redFive2.y && cy <= redFive2.y + redFive2.height) {
        if (redFive2.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level5Score += 5;
            levelFiveCorrect++;
            redFive2.isClicked = true;
            redFive2.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore5();
        }
    } else if (cx >= blueTwo.x && cx <= blueTwo.x + blueTwo.width && cy >= blueTwo.y && cy <= blueTwo.y + blueTwo.height) {
        if (blueTwo.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            blueTwo.isClicked = true;
            blueTwo.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore5();
        }
    } else if (cx >= greenTwo2.x && cx <= greenTwo2.x + greenTwo2.width && cy >= greenTwo2.y && cy <= greenTwo2.y + greenTwo2.height) {
        if (greenTwo2.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            greenTwo2.isClicked = true;
            greenTwo2.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore5();
        }
    } else if (cx >= redSix.x && cx <= redSix.x + redSix.width && cy >= redSix.y && cy <= redSix.y + redSix.height) {
        if (redSix.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            redSix.isClicked = true;
            redSix.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore5();
        }
    } else if (cx >= yellowSeven.x && cx <= yellowSeven.x + yellowSeven.width && cy >= yellowSeven.y && cy <= yellowSeven.y + yellowSeven.height) {
        if (yellowSeven.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            yellowSeven.isClicked = true;
            yellowSeven.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore5();
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

/*Draws the score*/
function drawScore5() {
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillText("x" + livesCount, canvas.width - 20, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L5Question, canvas.width / 2, 65);
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level5Score, 65, canvas.height - 5);
	ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

/* Resets level five to false*/
function setLevelFiveFalse(){
	blueTwo.opClick = false;
	greenTwo2.opClick = false;
	redSeven.opClick = false;
	redTwo.opClick = false;
	redSix.opClick = false;
	yellowSeven.opClick = false;
	redFive2.opClick = false;
}



function addLives(){
    if (livesCount <= 2) {
        livesCount++;
    }
}

