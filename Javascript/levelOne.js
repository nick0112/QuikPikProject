/**
* Created by nick on 5/15/2016.
*/

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
/*Image Variables for bonus Stage*/
var bonus1 = new bubble(66,66,"images/redtwo.png",-60,130,"image",5,0,false,0);
var bonus2 = new bubble(66,66,"images/blueeight.png",-50,230,"image",5,0,false,0);
var bonus3 = new bubble(66,66,"images/bluefive.png",-30,330,"image",5,0,false,0);
var bonus4 = new bubble(66,66,"images/greeneight.png",-70,430,"image",5,0,false,0);
var bonus5 = new bubble(66,66,"images/greenfive.png",-150,180,"image",5,0,false,0);
var bonus6 = new bubble(66,66,"images/greenfour.png",-180,270,"image",5,0,false,0);
var bonus7 = new bubble(66,66,"images/redthree.png",-210,360,"image",5,0,false,0);
var bonus8 = new bubble(66,66,"images/redsix.png",-190,450,"image",5,0,false,0);
var bonus9 = new bubble(66,66,"images/yellowdiamond.png",-300,150,"image",5,0,false,0);
var bonus10 = new bubble(66,66,"images/yellowfive.png",-350,250,"image",5,0,false,0);
var bonus11 = new bubble(66,66,"images/greencircle.png",-320,350,"image",5,0,false,0);
var bonus12 = new bubble(66,66,"images/bluecircle.png",-380,440,"image",5,0,false,0);
var bonus13 = new bubble(66,66,"images/yellowred.png",-450,130,"image",5,0,false,0);
var bonus14 = new bubble(66,66,"images/redyellow.png",-420,230,"image",5,0,false,0);
var bonus15 = new bubble(66,66,"images/greenyellow.png",-430,330,"image",5,0,false,0);
var bonus16 = new bubble(66,66,"images/redsquare.png",-460,430,"image",5,0,false,0);
var bonus17 = new bubble(66,66,"images/yellowzero.png",-550,180,"image",5,0,false,0);
var bonus18 = new bubble(66,66,"images/yellowsix.png",-500,270,"image",5,0,false,0);
var bonus19 = new bubble(66,66,"images/bluegreen.png",-580,360,"image",5,0,false,0);
var bonus20 = new bubble(66,66,"images/greenone.png",-600,450,"image",5,0,false,0);
var bonus21 = new bubble(66,66,"images/bluethree.png",-680,150,"image",5,0,false,0);
var bonus22 = new bubble(66,66,"images/blueRectangle.png",-690,250,"image",5,0,false,0);
var bonus23 = new bubble(66,66,"images/reddiamond.png",-750,350,"image",5,0,false,0);
var bonus24 = new bubble(66,66,"images/greendiamond.png",-700,440,"image",5,0,false,0);

/*Image Variables for level 10*/
var redTwo10 = new bubble(66,66,"images/redtwo.png",window.innerWidth/2,window.innerHeight/2,"image",2,-2,false,0);
var redEight10 = new bubble(66,66,"images/redeight.png",window.innerWidth/2,window.innerHeight/2,"image",3,-4,false,0);
var blueCircle10 = new bubble(66,66,"images/bluecircle.png",windowWidth/2,windowHeight/2, "image" , 1, -1,false,0);
var greenTriangle10 = new bubble(66,66,"images/greentriangle.png",window.innerWidth/2,window.innerHeight/2,"image",2,0,false,0);
var yellowOne10 = new bubble(66,66,"images/yellowone.png",150,200, "image" , -1, 4,false,0);
var greenSix10 = new bubble(66,66,"images/greensix.png",window.innerWidth/2,window.innerHeight/2,"image",0,-3,false,0);
var blueTwo10 = new bubble(66,66,"images/bluetwo.png",windowWidth/2,windowHeight/2, "image" , 3, -1,false,0);

/*Image Variables for level 9*/
var blueNine9 = new bubble(66,66,"images/blueseven.png",windowWidth/2,windowHeight/2, "image" , 4, -2,false,0);
var greenNine9 = new bubble(66,66,"images/greennine.png",windowWidth/2,windowHeight/2, "image" , -2, 3,false,0);
var redNine9 =  new bubble(66,66,"images/rednine.png",windowWidth/2,windowHeight/2, "image" , -5, 0,false,0);
var redThree9 = new bubble(66,66,"images/redthree.png",window.innerWidth/2,window.innerHeight/2,"image",2,-2,false,0);
var yellowFour9 = new bubble(66,66,"images/yellowfour.png",150,200, "image" , -1, 3,false,0);
var redZero9 = new bubble(66,66,"images/redzero.png",250,100, "image" , -3, 3,false,0);
var redSix9 = new bubble(66,66,"images/redsix.png",150,200, "image" , 1, -2,false,0);

/*Image Variables for level 8*/
var blueEight8 = new bubble(66,66,"images/blueeight.png",window.innerWidth/2,window.innerHeight/2,"image",3,0,false,0);
var blueFour8 = new bubble(66,66,"images/bluefour.png",window.innerWidth/2,window.innerHeight/2,"image",0,-4,false,0);
var greenSix8 = new bubble(66,66,"images/greensix.png",window.innerWidth/2,window.innerHeight/2,"image",2,-5,false,0);
var redTwo8 = new bubble(66,66,"images/redtwo.png",window.innerWidth/2,window.innerHeight/2,"image",-2,4,false,0);
var redThree8 = new bubble(66,66,"images/redthree.png",window.innerWidth/2,window.innerHeight/2,"image",-4,3,false,0);
var greenFive8 = new bubble(66,66,"images/greenfive.png",window.innerWidth/2,window.innerHeight/2,"image",-2,2,false,0);
var greenOne8 = new bubble(66,66,"images/greenone.png",window.innerWidth/2,window.innerHeight/2,"image",3,-2,false,0);
var blueFive8 = new bubble(66,66,"images/bluefive.png",window.innerWidth/2,window.innerHeight/2,"image",-1,5,false,0);

/* Image Variables for level 7*/

var blueCircle7 = new bubble(66,66,"images/bluecircle.png",windowWidth/2,windowHeight/2, "image" , 1, -4,false,0);
var blueDiamond7 = new bubble(66,66,"images/bluediamond.png",windowWidth/2,windowHeight/2, "image" , 2, -4,false,0);
var greenDiamond7 = new bubble(66,66,"images/greendiamond.png",windowWidth/2,windowHeight/2, "image" , -3, 1,false,0);
var greenCircle7 = new bubble(66,66,"images/greencircle.png",windowWidth/2,windowHeight/2, "image" , 4, 0,false,0);
var greenSquare7 = new bubble(66,66,"images/greensquare.png",windowWidth/2,windowHeight/2, "image" , -2, 1,false,0);
var greenTriangle7 = new bubble(66,66,"images/greentriangle.png",windowWidth/2,windowHeight/2, "image" , -3, 3,false,0);
var redSquare7 = new bubble(66,66,"images/redsquare.png",windowWidth/2,windowHeight/2, "image" , -5, 1,false,0);
var yellowDiamond7 = new bubble(66,66,"images/yellowdiamond.png",windowWidth/2,windowHeight/2, "image" , 0, -5,false,0);

/* Image Variables for level 6*/
var blueEight6 = new bubble(66,66,"images/blueeight.png",windowWidth/2,windowHeight/2, "image" , 3, -1,false,0);
var blueNine6 = new bubble(66,66,"images/bluenine.png",windowWidth/2,windowHeight/2, "image" , 2, -3,false,0);
var blueTwo6 = new bubble(66,66,"images/bluetwo.png",windowWidth/2,windowHeight/2, "image" , -1, 2,false,0);
var greenFive6 = new bubble(66,66,"images/greenfive.png",windowWidth/2,windowHeight/2, "image" , 1, -1,false,0);
var greenThree6 = new bubble(66,66,"images/greenthree.png",windowWidth/2,windowHeight/2, "image" ,-3, -2,false,0);
var greenTwo6 = new bubble(66,66,"images/greentwo.png",windowWidth/2,windowHeight/2, "image" , 4, -1,false,0);
var redSix6 = new bubble(66,66,"images/redsix.png",windowWidth/2,windowHeight/2, "image" , 0, 4,false,0);

/* Image Variables for level 5*/
var blueTwo = new bubble(66,66,"images/bluetwo.png",150,200, "image" , 2.5, -2.5,false,0);
var greenTwo2 = new bubble(66,66,"images/greentwo.png",150,200, "image" , 2.5, -2.5,false,0);
var redSeven = new bubble(66,66,"images/redseven.png",150,200, "image" , 2.5, -2.5,false,0);
var redTwo = new bubble(66,66,"images/redtwo.png",150,200, "image" , 2.5, -2.5,false,0);
var redSix = new bubble(66,66,"images/redsix.png",150,200, "image" , 2.5, -2.5,false,0);
var yellowSeven = new bubble(66,66,"images/yellowseven.png",150,200, "image" , 2.5, -2.5,false,0);
var redFive2 = new bubble(66,66,"images/redfive.png",150,200, "image" , 2.5, -2.5,false,0);

/*Image Variables for level 4*/
var redInRed = new bubble(66,66,"images/redred.png",150,200, "image" , 2, -2,false,0);
var redInGreen = new bubble(66,66,"images/greenred.png",windowWidth/2 - 60, windowHeight/2 + 70,"image",3,0,false,0);
var redInBlue = new bubble(66,66,"images/bluered.png",windowWidth/2,windowHeight - 180,"image",0,-2, false, 0);
var redRects = new bubble(66,66,"images/redsquare.png",220,105,"image",2,-2,false, 0);
var redBlue = new bubble(66,66,"images/redblue.png",windowWidth/2 + 10, windowHeight/2 - 30, "image",1,-2,false,0);
var nineInRed2 = new bubble(66,66,"images/rednine.png",255,windowHeight/2 + 150,"image",3,-1,false,0);

/*Image Declarations for level 3*/
var redFive = new bubble(66,66,"images/redfive.png",window.innerWidth/2,window.innerHeight / 2,"image",2,0,false,0);
var redThree = new bubble(66,66,"images/redthree.png",175,150,"image",1,-1,false,0);
var redEight = new bubble(66,66,"images/redone.png",65,225,"image",4,-1,false,0);
var greenTwo = new bubble(66,66,"images/redeight.png",10,380,"image",-1,3,false,0);
var orangeFive = new bubble(66,66,"images/yellowfive.png",window.innerWidth - 100,470,"image",2,-1,false,0);
var blueNine = new bubble(66,66,"images/bluenine.png",window.innerWidth - 100,windowHeight / 5,"image",2,-2,false,0);

/*Image Declarations for level 2*/
var blueRectangle = new bubble(66,66,"images/bluesquare.png",40,360,"image",2,-2,false,0);
var greenFive = new bubble(66,66,"images/greenfive.png",windowWidth/2 + 100 , windowHeight/2, "image",1,-2,false,0);
var blueThree = new bubble(66,66,"images/bluethree.png",65,225,"image",3,-3,false,0);
var redDiamond =  new bubble(66,66,"images/reddiamond.png",windowWidth - 100, windowHeight/4,"image",1,-3,false,0);
var greenInRed2 = new bubble(66,66,"images/redgreen.png",175,150,"image",-2,0,false,0);

/*Image Declarations for level 1*/
var greenRectangle = new bubble(66,66,"images/greensquare.png",window.innerWidth/2,window.innerHeight/2,"image",2,0,false,0);
var greenInRed = new bubble(66,66,"images/redgreen.png",175,150,"image",-2,0,false,0);
var nineInRed = new bubble(66,66,"images/rednine.png",115,255,"image",-1,3,false,0);
var nineInBlue = new bubble(66,66,"images/bluenine.png",15,380,"image",-1,1,false,0);
var blueInBlack = new bubble(66,66,"images/yellowblue.png",window.innerWidth - 100,470,"image",-3,2,false,0);
var missionBubble = new bubble(66,66,"images/fence.png",60,window.innerHeight - 200,"image",1,-2,false,0);

var firstLevelList = [greenRectangle,greenInRed, nineInRed, nineInBlue, blueInBlack];
var secondLevelList = [blueRectangle,greenFive,blueThree,redDiamond,greenInRed2];
var thirdLevelList = [redFive,redThree,redEight,greenTwo,orangeFive,blueNine];
var fourthLevelList = [redInRed,redBlue,redRects,redInGreen,redInBlue,nineInRed2];
var fifthLevelList = [blueTwo,greenTwo2,redSeven,redTwo,redSix,yellowSeven,redFive2];
var sixLevelList = [blueEight6,blueNine6,blueTwo6,greenFive6, greenThree6,greenTwo6,redSix6];
var seventhLevelList = [blueCircle7,blueDiamond7,greenDiamond7,greenCircle7,greenSquare7,greenTriangle7,redSquare7,yellowDiamond7];
var eighthLevelList = [blueEight8,blueFour8,greenSix8,redTwo8,redThree8,greenFive8,greenOne8,blueFive8];
var nineLevelList = [blueNine9,greenNine9,redNine9,redThree9,yellowFour9,redZero9,redSix9];
var tenLevelList = [redTwo10,redEight10,blueCircle10,greenTriangle10,yellowOne10,greenSix10,blueTwo10];
var bonusBubbles = [bonus1,bonus2,bonus3,bonus4,bonus5,bonus6,bonus7,bonus8,bonus9,bonus10,bonus11,bonus12,bonus13,bonus14,bonus15,bonus16,bonus17,bonus18,bonus19,bonus20,bonus21,bonus22,bonus23,bonus24];

var missionList = [missionBubble];
var everything = firstLevelList.concat(secondLevelList).concat(thirdLevelList).concat(fourthLevelList).concat(missionList).concat(fifthLevelList).concat(seventhLevelList).concat(eighthLevelList);
everything = everything.concat(sixLevelList).concat(nineLevelList).concat(tenLevelList).concat(bonusBubbles);
var tempList;



/*Check levels*/
function checkLevels(){
    switch(levels){
        case 1:
            tempList = missionList.concat(firstLevelList);
            break;
        case 2:
            tempList = missionList.concat(secondLevelList);
            break;
        case 3:
            tempList = missionList.concat(thirdLevelList);
            break;
        case 4:
            tempList = missionList.concat(fourthLevelList);
			break;
		case 5:
			tempList = missionList.concat(fifthLevelList);
			break;
        case 6:
            tempList = missionList.concat(sixLevelList);
            break;
		case 7:
			tempList = missionList.concat(seventhLevelList);
			break;
		case 8:
			tempList = missionList.concat(eighthLevelList);
			break;
        case 9:
            tempList = missionList.concat(nineLevelList);
            break;
        case 10:
            tempList = missionList.concat(tenLevelList);
			break;
		case 11:
			tempList = bonusBubbles;
			break;
    }
}

/*Validate the ball boundaries*/
function boundariesValidation(){
    checkLevels();
    for (i = 0; i < tempList.length; i++) {
        if (tempList[i].x + tempList[i].width / 2 < 35 || tempList[i].x + tempList[i].width / 2 > canvas.width - 35) {
            tempList[i].speedX = - tempList[i].speedX;
        }
        if (tempList[i].y + tempList[i].height / 2 < 140 || tempList[i].y + tempList[i].height/ 2 > canvas.height - 100) {
            tempList[i].speedY = - tempList[i].speedY;
        }
    }
}

/*Out of bounds function*/
function outOfBounds(){
	
	//Canvas boundary variables
	var minWidth = 35;
	var maxWidth = canvas.width - 25;
	var minHeight = 140;
	var maxHeight = canvas.height - 90;
	
    checkLevels();
	
    for (i = 0 ; i < tempList.length; i ++) {
		
		//Checks for if the bubble is beyond the x outer boundary 
        if((tempList[i].x + (tempList[i].width/2)) > maxWidth + 4) {
			tempList[i].x = maxWidth - (tempList[i].width/2 - 10);
            //tempList[i].speedX = - tempList[i].speedX;
        }
		
		//Checks for if the bubble is beyond the y outer boundary
        if((tempList[i].y + (tempList[i].height/2)) > maxHeight + 4) {
            tempList[i].y = maxHeight - (tempList[i].height/2) - 10;
            //tempList[i].speedY = - tempList[i].speedY;
        }
		
		//Checks for if the bubble is beyond the x inner boundary
		if ((tempList[i].x + (tempList[i].width / 2)) < minWidth - 5) {
			tempList[i].x = minWidth + (tempList[i].height / 2) - 10;
		}
		
		//Check for if the bubble is beyond the y inner boundary
		if ((tempList[i].y + tempList[i].height / 2) < minHeight - 5) {
			tempList[i].y = minHeight + (tempList[i].height / 2) + 10;
		}
    }
}

/*if the bubbles are clicked, move them out of bounds, if it is not move it*/
function checkBubblesAreClicked(){
    checkLevels();
    for (i = 0; i < tempList.length; i++) {
        if (tempList[i].isClicked == true) {
            tempList[i].x = -300;
            tempList[i].y = 0;
        } else {
            tempList[i].update();
            tempList[i].x += tempList[i].speedX;
            tempList[i].y += tempList[i].speedY;
        }
    }
}


/*Reset the clicking values so the user can reclick when the game restarts*/
function resetValues(){
    checkLevels();
    if(levels == 1) {
        resetOne();
    } else if (levels == 2) {
        resetTwo();
    } else if(levels == 3) {
        resetThree();
    } else if(levels == 4) {
        resetFour();
    } else if(levels == 5) {
		resetFive();
	} else if (levels == 6) {
        resetSix();
    } else if (levels == 7) {
		resetSeven();
	} else if (levels == 8) {
		resetEight();
	} else if (levels == 9) {
        resetNine();
    } else if (levels == 10) {
        resetTen();
    } else if (levels == 11) {
		resetBonus();
	}
    for (i = 0 ; i < everything.length ; i++) {
        everything[i].isClicked = false;
    }
}


/*Move the objects back to place*/
function resetOne(){
    greenRectangle.x = window.innerWidth/2;
    greenInRed.x = 175;
    nineInRed.x = 65;
    nineInBlue.x = 10;
    blueInBlack.x = window.innerWidth - 100;
    missionBubble.x= 60;
    greenRectangle.y = window.innerHeight / 2;
    greenInRed.y = 150;
    nineInRed.y = 225;
    nineInBlue.y = 380;
    blueInBlack.y = 470;
    missionBubble.y = window.innerHeight - 200;
}

/*Check collision function*/
function checkBubbleCollision(bubble1, bubble2){
    var xPos = bubble2.x - bubble1.x;
    var yPos = bubble2.y - bubble1.y;
    var distance = Math.sqrt((xPos * xPos) + (yPos * yPos));
    var sumOfRadius = 67;
    var distanceVariance = 18;
    var adjustedPosition = 28;

    if(distance < sumOfRadius){
        if(distance < sumOfRadius - distanceVariance) {
            bubble1.x += adjustedPosition;
            bubble1.y += adjustedPosition;
            bubble2.x -= adjustedPosition;
            bubble2.y -= adjustedPosition;
        } else
        {
            var ballMass = sumOfRadius;
            var newVelX1 = (2 * ballMass * bubble2.speedX) / (ballMass + ballMass);
            var newVelX2 = (2 * ballMass * bubble1.speedX) / (ballMass + ballMass);
            var newVelY1 = (2 * ballMass * bubble2.speedY) / (ballMass + ballMass);
            var newVelY2 = (2 * ballMass * bubble1.speedY) / (ballMass + ballMass);

            bubble1.speedX = newVelX1;
            bubble1.speedY = newVelY1;
            bubble2.speedX = newVelX2;
            bubble2.speedY = newVelY2;

            bubble1.x += bubble1.speedX;
            bubble2.x += bubble2.speedX;
            bubble2.y += bubble2.speedY;
            bubble1.y += bubble1.speedY;

        }

    }

}

/*If they collide, move away from each other*/
function bubblesCollision(){
    checkLevels();
    for(i = 0; i < tempList.length; i++){
        for(j = 0; j < tempList.length; j++){
            if(tempList[i] != tempList[j] && j > i){
                checkBubbleCollision(tempList[i],tempList[j]);
            }
        }
    }
}

var colorX;
 
 function changecolors() {
     colorX = 1;
     setInterval(change, 100);
 }
 
 function change() {
     if (colorX === 1) {
         color = "red"
         colorX = 2;
     } else {
         color = "";
     }
   canvas.style.background = color; 
 }

/*click level one action*/
function levelOneAction(){
	if (cx >= greenRectangle.x && cx <= greenRectangle.x + greenRectangle.width && cy >= greenRectangle.y && cy <= greenRectangle.y + greenRectangle.height) {
        if (greenRectangle.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            score += 5;
            levelOneCorrect++;
            greenRectangle.isClicked = true;
            greenRectangle.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore();
        }

    } else if (cx >= greenInRed.x && cx <= greenInRed.x + greenInRed.width && cy >= greenInRed.y && cy <= greenInRed.y + greenInRed.height) {
        if (greenInRed.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
            greenInRed.isClicked = true;
            greenInRed.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
			score += 5;
            levelOneCorrect++;
            drawScore();
            }
    } else if (cx >= nineInRed.x && cx <= nineInRed.x + nineInRed.width && cy >= nineInRed.y && cy <= nineInRed.y + nineInRed.height) {
        if (nineInRed.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            nineInRed.isClicked = true;
            nineInRed.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore();
        }
    } else if (cx >= nineInBlue.x && cx <= nineInBlue.x + nineInBlue.width && cy >= nineInBlue.y && cy <= nineInBlue.y + nineInBlue.height) {
        if (nineInBlue.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            nineInBlue.isClicked = true;
            nineInBlue.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore();
        }
    } else if (cx >= blueInBlack.x && cx <= blueInBlack.x + blueInBlack.width && cy >= blueInBlack.y && cy <= blueInBlack.y + blueInBlack.height) {
        if (blueInBlack.opClick == 0) {
            if (playMusic == true) {
			bubblePop.play();
			}
			changecolors();
            livesCount--;
            blueInBlack.isClicked = true;
            blueInBlack.opClick++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore();
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


/*Bubble won't be reclicked twice*/
function resetOption(){
	setLevelThreeFalse();
	setLevelFourFalse();
	setLevelFiveFalse();
	setLevelSixFalse();
	setLevelSevenFalse();
	setLevelEightFalse();
    setLevelNineFalse();
	setLevelTenFalse();
	setBonusFalse();
	greenInRed2.opClick = false;
    greenRectangle.opClick = false;
    greenInRed.opClick = false;
    nineInBlue.opClick = false;
    nineInRed.opClick = false;
    missionBubble.opClick = false;
    blueInBlack.opClick = false;
    blueRectangle.opClick = false;
    blueThree.opClick = false;
    redDiamond.opClick = false;
    greenFive.opClick = false;
    
}



function drawScore() {
	tutorialStage = false;
    ctx.font = "20px myFont";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Stage " + stageCount, canvas.width / 2, 25);
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText(question, canvas.width / 2, 65);
    tracklives();
    ctx.font = "18px myFont";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + score, 65, canvas.height - 5);
	ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
}

function notClickable(){
	for(var a = 0; a < everything.length; a++){
		everything[a].x = -300;
		everything[a].y = -300;
	}
}

