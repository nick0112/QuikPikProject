/**
 * Bonus Stage
 */

function resetBonus() {
	bonus1.x = -60;
	bonus1.y = 130;
	bonus2.x = -50;
	bonus2.y = 230;
	bonus3.x = -30;
	bonus3.y = 330;
	bonus4.x = -70;
	bonus4.y = 430;
	bonus5.x = -150;
	bonus5.y = 180;
	bonus6.x = -180;
	bonus6.y = 270;
	bonus7.x = -210;
	bonus7.y = 360;
	bonus8.x = -190;
	bonus8.y = 450;
	bonus9.x = -300;
	bonus9.y = 150;
	bonus10.x = -350;
	bonus10.y = 250;
	bonus11.x = -320;
	bonus11.y = 350;
	bonus12.x = -380;
	bonus12.y = 440;
	bonus13.x = -450;
	bonus13.y = 130;
	bonus14.x = -420;
	bonus14.y = 230;
	bonus15.x = -430;
	bonus15.y = 330;
	bonus16.x = -460;
	bonus16.y = 430;
	bonus17.x = -550;
	bonus17.y = 180;
	bonus18.x = -500;
	bonus18.y = 270;
	bonus19.x = -580;
	bonus19.y = 360;
	bonus20.x = -600;
	bonus20.y = 450;
	bonus21.x = -680;
	bonus21.y = 150;
	bonus22.x = -690;
	bonus22.y = 250;
	bonus23.x = -750;
	bonus23.y = 350;
	bonus24.x = -700;
	bonus24.y =	440;
}





function setBonusFalse() {
	bonus1.opClick = false;
	bonus2.opClick = false;
	bonus3.opClick = false;
	bonus4.opClick = false;
	bonus5.opClick = false;
	bonus6.opClick = false;
	bonus7.opClick = false;
	bonus8.opClick = false;
	bonus9.opClick = false;
	bonus10.opClick = false;
	bonus11.opClick = false;
	bonus12.opClick = false;
	bonus13.opClick = false;
	bonus14.opClick = false;
	bonus15.opClick = false;
	bonus16.opClick = false;
	bonus17.opClick = false;
	bonus18.opClick = false;
	bonus19.opClick = false;
	bonus20.opClick = false;
	bonus21.opClick = false;
	bonus22.opClick = false;
	bonus23.opClick = false;
	bonus24.opClick = false;
}

/*Draws the score*/
function drawBonusScore() {
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Bonus Stage", canvas.width / 2, 25);
    //ctx.fillText("x" + livesCount, canvas.width - 20, 25);
    ctx.font = "18px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Click as many bubbles as you can", canvas.width / 2, 65);
    //tracklives();
	bonusScore = level10Score;
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + bonusScore, 65, canvas.height - 5);
    ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

/*click level bonus action*/
function levelBonusAction(){
	for(var i = 0; i < bonusBubbles.length; i++){
		if (cx >= bonusBubbles[i].x && cx <= bonusBubbles[i].x + bonusBubbles[i].width && cy >= bonusBubbles[i].y && cy <= bonusBubbles[i].y + bonusBubbles[i].height) {
			if (bonusBubbles[i].opClick == 0) {
				if (playMusic == true) {
				bubblePop.play();
				}
				bonusScore += 5;
				bonusBubbles[i].isClicked = true;
				bonusBubbles[i].opClick++;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawBonusScore();
			}
		}
	}	
}