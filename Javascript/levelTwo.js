/**
 * Created by nick on 5/16/2016.
 */


function resetTwo(){
    blueRectangle.x = 40;
    greenFive.x = windowWidth/2 + 80;
    blueThree.x = 65;
    redDiamond.x = windowWidth - 100;
    greenInRed2.x = 175;
    missionBubble.x= 60;
    blueRectangle.y = 360;
    greenFive.y = windowHeight/2;
    blueThree.y = 225;
    redDiamond.y = windowHeight/4;
    greenInRed2.y = 150;
    missionBubble.y = window.innerHeight - 200;
}

/*click level Two action*/
function levelTwoAction(){
    if (gameState == true) {
		if (cx >= blueRectangle.x && cx <= blueRectangle.x + blueRectangle.width && cy >= blueRectangle.y && cy <= blueRectangle.y + blueRectangle.height) {
			if (blueRectangle.opClick == 0) {
				if (playMusic == true) {
				bubblePop.play();
				}
				level2Score += 5;
				levelTwoCorrect++;
				blueRectangle.isClicked = true;
				blueRectangle.opClick++;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawScore2();
			}

		} else if (cx >= blueThree.x && cx <= blueThree.x + blueThree.width && cy >= blueThree.y && cy <= blueThree.y + blueThree.height) {
			if (blueThree.opClick == 0) {
				if (playMusic == true) {
				bubblePop.play();
				}
				level2Score += 5;
				levelTwoCorrect++;
				blueThree.isClicked = true;
				blueThree.opClick++;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawScore2();
			}
		} else if (cx >= greenFive.x && cx <= greenFive.x + greenFive.width && cy >= greenFive.y && cy <= greenFive.y + greenFive.height) {
			changecolors();
			if (greenFive.opClick == 0) {
				if (playMusic == true) {
				bubblePop.play();
				}
				changecolors();
				livesCount--;
				greenFive.isClicked = true;
				greenFive.opClick++;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawScore2();
			}
		} else if (cx >= redDiamond.x && cx <= redDiamond.x + redDiamond.width && cy >= redDiamond.y && cy <= redDiamond.y + redDiamond.height) {
			if (redDiamond.opClick == 0) {
				if (playMusic == true) {
				bubblePop.play();
				}
				changecolors();
				livesCount--;
				redDiamond.isClicked = true;
				redDiamond.opClick++;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawScore2();
			}
		} else if (cx >= greenInRed2.x && cx <= greenInRed2.x + greenInRed2.width && cy >= greenInRed2.y && cy <= greenInRed2.y + greenInRed2.height) {
			
			if (greenInRed2.opClick == 0) {
				if (playMusic == true) {
				bubblePop.play();
				}
				changecolors();
				livesCount--;
				greenInRed2.isClicked = true;
				greenInRed2.opClick++;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawScore2();
			}
		}else if (cx >= missionBubble.x && cx <= missionBubble.x + missionBubble.width && cy >= missionBubble.y && cy <= missionBubble.y + missionBubble.height) {
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
}

function drawScore2() {
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillText("x" + livesCount, canvas.width - 20, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(newQuestion, canvas.width / 2, 65);
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level2Score, 65, canvas.height - 5);
	ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}
