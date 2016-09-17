/**
 * Created by nick on 5/24/2016.
 */
function resetNine(){
    blueNine9.x = 30;
    blueNine9.y = windowHeight/3;
    redZero9.x  = windowWidth - 170;
    redZero9.y = windowHeight/3;
    greenNine9.x = windowWidth/2;
    greenNine9.y = windowHeight/2;
    redNine9.x = 60;
    redNine9.y = windowHeight - 160;
    redThree9.x = windowWidth/2 + 105;
    redThree9.y = windowHeight/2 - 80;
    yellowFour9.x = windowWidth - 100;
    yellowFour9.y = windowHeight - 160;
    redSix9.x = 175;
    redSix9.y = 120;
    missionBubble.x = 105;
    missionBubble.y = 300;
}

function setLevelNineFalse(){
	blueNine9.opClick = false;
	greenNine9.opClick = false;
	redNine9.opClick = false;
	redThree9.opClick = false;
	yellowFour9.opClick = false;
	redZero9.opClick = false;
	redSix9.opClick = false;
}

/*Draws the score*/
function drawScore9() {
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillText("x" + livesCount, canvas.width - 20, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L9Question, canvas.width / 2, 65);
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level9Score, 65, canvas.height - 5);
    ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

/*click level Nine action*/
function levelNineAction(){
    if (cx >= blueNine9.x && cx <= blueNine9.x + blueNine9.width && cy >= blueNine9.y && cy <= blueNine9.y + blueNine9.height) {
        if (blueNine9.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level9Score += 5;
            levelNineCorrect++;
            blueNine9.isClicked = true;
            blueNine9.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore9();
        }
    } else if (cx >= redNine9.x && cx <= redNine9.x + redNine9.width && cy >= redNine9.y && cy <= redNine9.y + redNine9.height) {
        if (redNine9.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level9Score += 5;
            levelNineCorrect++;
            redNine9.isClicked = true;
            redNine9.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore9();
        }
    } else if (cx >= greenNine9.x && cx <= greenNine9.x + greenNine9.width && cy >= greenNine9.y && cy <= greenNine9.y + greenNine9.height) {
        if (greenNine9.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level9Score += 5;
            levelNineCorrect++;
            greenNine9.isClicked = true;
            greenNine9.opClick++;
            bubblePop.play();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore9();
        }
    } else if (cx >= redThree9.x && cx <= redThree9.x + redThree9.width && cy >= redThree9.y && cy <= redThree9.y + redThree9.height) {
        if (redThree9.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            redThree9.isClicked = true;
            redThree9.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore9();
        }
    } else if (cx >= yellowFour9.x && cx <=yellowFour9.x + yellowFour9.width && cy >= yellowFour9.y && cy <= yellowFour9.y + yellowFour9.height) {
        if (yellowFour9.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            yellowFour9.isClicked = true;
            yellowFour9.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore9();
        }
    } else if (cx >= redZero9.x && cx <= redZero9.x + redZero9.width && cy >= redZero9.y && cy <= redZero9.y + redZero9.height) {
        if (redZero9.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            redZero9.isClicked = true;
            redZero9.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore9();
        }
    } else if (cx >= redSix9.x && cx <= redSix9.x + redSix9.width && cy >= redSix9.y && cy <= redSix9.y + redSix9.height) {
        if (redSix9.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            redSix9.isClicked = true;
            redSix9.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore9();
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
