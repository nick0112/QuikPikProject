/**
 * Created by nick on 5/17/2016.
 */

/*Draws Level One Objects*/
function drawLevelOneBubbles(){
    greenRectangle.update();
    greenInRed.update();
    nineInRed.update();
    nineInBlue.update();
    missionBubble.update();
    blueInBlack.update();
}

function drawLevelTwoBubbles(){
    blueRectangle.update();
    greenFive.update();
    missionBubble.update();
    blueThree.update();
    greenInRed.update();
    redDiamond.update();
}

function drawLevelThreeBubbles(){
    redFive.update();
    redThree.update();
    missionBubble.update();
    redEight.update();
    greenTwo.update();
    orangeFive.update();
    blueNine.update();
}

function drawLevelFourBubbles(){
    redInRed.update();
    redInGreen.update();
    redInBlue.update();
    redRects.update();
    redBlue.update();
    nineInRed2.update();
}

function drawLevelFiveBubbles(){
    blueTwo.update();
    greenTwo2.update();
    redSeven.update();
    redTwo.update();
    redSix.update();
    yellowSeven.update();
	redFive2.update();
}


function drawLevelSixBubbles(){
    blueEight6.update();
    greenTwo6.update();
    redSix6.update();
    blueNine6.update();
    blueTwo6.update();
    greenFive6.update();
    greenThree6.update();
}

function drawLevelSevenBubbles(){
    blueCircle7.update();
    blueDiamond7.update();
    greenDiamond7.update();
    greenCircle7.update();
    greenSquare7.update();
    greenTriangle7.update();
    redSquare7.update();
	yellowDiamond7.update();
}

function drawLevelEightBubbles(){
    blueEight8.update();
    blueFour8.update();
    greenSix8.update();
    redTwo8.update();
    redThree8.update();
    greenFive8.update();
    greenOne8.update();
	blueFive8.update();
}

function drawLevelNineBubbles(){
    blueNine9.update();
    greenNine9.update();
    redNine9.update();
    redThree9.update();
    yellowFour9.update();
    redZero9.update();
    redSix9.update();
}


function drawLevelTenBubbles(){
    redEight10.update();
    redTwo10.update();
    blueCircle10.update();
    greenTriangle10.update();
    yellowOne10.update();
    greenSix10.update();
    blueTwo10.update();
}

function drawBonusStageBubbles(){
	bonus1.update();
	bonus2.update();
	bonus3.update();
	bonus4.update();
	bonus5.update();
	bonus6.update();
	bonus7.update();
	bonus8.update();
	bonus9.update();
	bonus10.update();
	bonus11.update();
	bonus12.update();
	bonus13.update();
	bonus14.update();
	bonus15.update();
	bonus16.update();
	bonus17.update();
	bonus18.update();
	bonus19.update();
	bonus20.update();
	bonus21.update();
	bonus22.update();
	bonus23.update();
	bonus24.update();
}
function drawLayoutOne(){
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(question, canvas.width / 2, 65);
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + score, 65, canvas.height - 5);
	ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

function drawLayoutTwo(){
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(newQuestion, canvas.width / 2, 65);
    ctx.fillStyle = "black";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level2Score, 65, canvas.height - 5);
	ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

function drawLayoutThree(){
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L3Question, canvas.width / 2, 65);
    ctx.fillStyle = "black";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level3Score, 65, canvas.height - 5);
	ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

function drawLayoutFour(){
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L4Question, canvas.width / 2, 65);
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level4Score, 65, canvas.height - 5);
	ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

function drawLayoutFive(){
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L5Question, canvas.width / 2, 65);
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level5Score, 65, canvas.height - 5);
	ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

function drawLayoutSix(){
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L6Question, canvas.width / 2, 65);
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    level6Score = totalScore;
    ctx.fillText("Score: " + level6Score, 65, canvas.height - 5);
    ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

function drawLayoutSeven(){
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L7Question, canvas.width / 2, 65);
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level7Score, 65, canvas.height - 5);
    ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

function drawLayoutEight(){
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L8Question, canvas.width / 2, 65);
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level8Score, 65, canvas.height - 5);
    ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

function drawLayoutNine(){
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L9Question, canvas.width / 2, 65);
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level9Score, 65, canvas.height - 5);
    ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}


function drawLayoutTen(){
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(L10Question, canvas.width / 2, 65);
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + level10Score, 65, canvas.height - 5);
    ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

function drawLayoutBonus(){
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Bonus Stage", canvas.width / 2, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText("Click as many bubbles as you can", canvas.width / 2, 65);
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    //tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    bonusScore = totalScore;
    ctx.fillText("Score: " + bonusScore, 65, canvas.height - 5);
    ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

function passSceneHelper(){
    currentScene = 4;
    ctx.font = "25px myFont";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount+ " Complete", canvas.width / 2, 150);
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    if(livesCount == 3) {
        ctx.drawImage(lives, (canvas.width / 2) - 62, 210, 35, 35);
        ctx.drawImage(lives, (canvas.width / 2) - 18, 210, 35, 35);
        ctx.drawImage(lives, (canvas.width / 2) + 27, 210, 35, 35);
    } else if(livesCount == 2) {
        ctx.drawImage(lives, (canvas.width / 2) - 62, 210, 35, 35);
        ctx.drawImage(lives, (canvas.width / 2) - 18, 210, 35, 35);
    } else {
        ctx.drawImage(lives, (canvas.width / 2) - 62, 210, 35, 35);
    }

    ctx.fillStyle = "red";
    ctx.font = "35px myFont";
    ctx.fillText("Score: " + totalScore, (canvas.width / 2), 190);

    text.style.display = "none";
}

function tracklives(){
    if (livesCount == 3){
        ctx.drawImage(lives, canvas.width - 105, 9, 30, 30);
        ctx.drawImage(lives2, canvas.width - 70, 9, 30, 30);
        ctx.drawImage(lives3, canvas.width - 35, 9, 30, 30);
    } else if(livesCount == 2){
        ctx.drawImage(lives2, canvas.width - 70, 9, 30, 30);
        ctx.drawImage(lives3, canvas.width - 35, 9, 30, 30);
    } else {
        ctx.drawImage(lives3, canvas.width - 35, 9, 30, 30);
    }
}


function addLives(){
	if (extralife == 0){
		if(livesCount < 3) {
        livesCount++;
		}
		extralife++;
	}
}

function addBonusScore(){
	if(extralife1 == 0){
		if(livesCount > 0){
			bonusScore = bonusScore + (livesCount * 50);
		}
		extralife1++;
	}
}
