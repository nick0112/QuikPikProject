/**
 * Created by nick on 5/18/2016.
 */



function resetThree(){
    redFive.x = window.innerWidth / 2;
    redThree.x = 175;
    redEight.x = 65;
    greenTwo.x = 10;
    orangeFive.x = window.innerWidth - 100;
    blueNine.x = window.innerWidth - 100;
    missionBubble.x= 60;
    redFive.y = window.innerHeight / 2;
    redThree.y = 150;
    redEight.y = 225;
    greenTwo.y = 380;
    orangeFive.y = 470;
    blueNine.y = windowHeight / 5;
    missionBubble.y = window.innerHeight - 200;
}


/*click level Two action*/
function levelThreeAction(){
    if (cx >= redFive.x && cx <= redFive.x + redFive.width && cy >= redFive.y && cy <= redFive.y + redFive.height) {
        if (redFive.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level3Score += 5;
            levelThreeCorrect++;
            redFive.isClicked = true;
            redFive.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore3();
        }

    } else if (cx >= redThree.x && cx <= redThree.x + redThree.width && cy >= redThree.y && cy <= redThree.y + redThree.height) {
        if (redThree.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level3Score += 5;
            levelThreeCorrect++;
            redThree.isClicked = true;
            redThree.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore3();
        }
    } else if (cx >= redEight.x && cx <= redEight.x + redEight.width && cy >= redEight.y && cy <= redEight.y + redEight.height) {
        if (redEight.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            level3Score += 5;
            levelThreeCorrect++;
            redEight.isClicked = true;
            redEight.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore3();
        }
    } else if (cx >= greenTwo.x && cx <= greenTwo.x + greenTwo.width && cy >= greenTwo.y && cy <= greenTwo.y + greenTwo.height) {
		changecolors();
        if (greenTwo.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            greenTwo.isClicked = true;
            greenTwo.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore3();
        }
    } else if (cx >= orangeFive.x && cx <= orangeFive.x + orangeFive.width && cy >= orangeFive.y && cy <= orangeFive.y + orangeFive.height) {
		changecolors();
        if (orangeFive.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            orangeFive.isClicked = true;
            orangeFive.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore3();
        }
    } else if (cx >= blueNine.x && cx <= blueNine.x + blueNine.width && cy >= blueNine.y && cy <= blueNine.y + blueNine.height) {
		changecolors();
        if (blueNine.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            blueNine.isClicked = true;
            blueNine.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore3();
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
function drawScore3() {
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillText("x" + livesCount, canvas.width - 20, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L3Question, canvas.width / 2, 65);
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level3Score, 65, canvas.height - 5);
	ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}
function setLevelThreeFalse(){
	redFive.opClick = false;
    redThree.opClick = false;
    redEight.opClick = false;
    greenTwo.opClick = false;
    orangeFive.opClick = false;
    blueNine.opClick = false;
	
}