// Buttons
var startButton = new Image();
var nextButton = new Image();
var skipButton = new Image();
startButton.src = "images/start.png";
nextButton.src = "images/next.png";
skipButton.src = "images/skip.png";

// Cursor Image
var cursorX = window.innerWidth / 2;
var cursorX2 = window.innerWidth / 2;
var cursorY = window.innerHeight * 0.7;
var cursorY2 = window.innerHeight * 0.7;
var cursorMoveX = 0.5;
var cursorMoveX2 = -1;
var cursorMoveY = 2;
var cursorMoveY2 = 2;
var cursor = new bubble(30,30,"images/finger.png", cursorX, cursorY,"image",cursorMoveX,cursorMoveY,false,0);
var cursor2 = new bubble(30,30,"images/finger.png", cursorX2, cursorY2,"image",cursorMoveX2,cursorMoveY2,false,0);

// Cursor clicks
var click = 0;
var click1 = 0;
var click2 = 0;
var click3 = 0;

// First page of tutorial
var tutorial1 = function () {
		var textWidth = 15;
		var blueRectangle1 = new bubble(canvas.width/10,canvas.width/10,"images/bluesquare.png", canvas.width / 2 - canvas.width/10, canvas.height/2,"image",0,0,false,0);
		var greenRectangle1 = new bubble(canvas.width/10,canvas.width/10,"images/greensquare.png", canvas.width /2 , canvas.height/2,"image",0,0,false,0);
		
		if(canvas.width/10 < 75){
			blueRectangle1.width = 75;
			blueRectangle1.height = 75;
			blueRectangle1.x = canvas.width/2-75;
			greenRectangle1.width = 75;
			greenRectangle1.height = 75;
		}
		if(canvas.width > 1200 && canvas.height > 550){
			textWidth = 27;
		}
		tutorialStage = true;
		ctx.clearRect(0,0,canvas.width,canvas.height);
        currentScene = 7;
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.font = "50px myFont";
        ctx.fillText("Tutorial", canvas.width / 2, 100);
		ctx.font = textWidth + "px myFont";
		ctx.fillText("Instruction will be", canvas.width / 2, canvas.height * 0.25);
		ctx.fillText("written in BLACK", canvas.width / 2, canvas.height * 0.30);
		ctx.fillText("Click the green square!",canvas.width/2,canvas.height*0.35);
//		ctx.strokeRect(canvas.width / 2 - canvas.width * 0.3, canvas.height / 2 - canvas.height * 0.3, canvas.width * 0.6, canvas.height * 0.6);
		greenRectangle1.update();
        blueRectangle1.update();

        var btn = new Button({
            x: canvas.width / 2 - 160,
            y: canvas.height - 120,
            width: 100,
				    height: 75,
            label: "SKIP",
            image: skipButton,
            click: function () {
				levels++;
                drawStage1();
                resizeCanvas();
                this.click = null;
                btn2.click = null;
            }
        });
        btn.draw();

        var btn2 = new Button({
            x: canvas.width / 2 + 60,
            y: canvas.height - 120,
            width: 100,
            height: 75,
            label: "NEXT",
            image: nextButton,
            click: function () {
                tutorial2();
                resizeCanvas();
				this.click = null;
				btn.click = null;
            }
        });
        btn2.draw();
		
        window.onclick = function () {
			if (btn.clicked()) {
                btn.click();
            }
            if (btn2.clicked()) {
                btn2.click();
            }
        };
}

// Second scene of the tutorial
var tutorial2 = function () {
	var textWidth = 15;
	var tutScore = 0;
	currentScene = 8;
	var tutHeight = canvas.height * 0.38;
	var tutWidth = canvas.width * 0.55;
	var tutHeight1 = canvas.height * 0.38;
	var tutWidth1 = canvas.width * 0.55;
	var livesX = canvas.width * 0.4;
	var livesY = canvas.height * 0.35;
	var blueRectangle1 = new bubble(canvas.width/10,canvas.width/10,"images/bluesquare.png", canvas.width / 2 - canvas.width/10, canvas.height/2,"image",0,0,false,0);
	var greenRectangle1 = new bubble(canvas.width/10,canvas.width/10,"images/greensquare.png", canvas.width /2 , canvas.height/2,"image",0,0,false,0);
	
		if(canvas.width/10 < 75){
			blueRectangle1.width = 75;
			blueRectangle1.height = 75;
			blueRectangle1.x = canvas.width/2-75;
			greenRectangle1.width = 75;
			greenRectangle1.height = 75;
		}
		
		if(canvas.width > 1200 && canvas.height > 550){
			textWidth = 25;
			cursorMoveY = 1;	
		} else{
			tutHeight = canvas.height * 0.4;
			tutWidth = canvas.width /2;
			livesX = canvas.width * 0.38;
			tutWidth1 = canvas.width /2;
			tutHeight1 = canvas.height * 0.38;
			livesY = canvas.height * 0.33;
		}
		
		if(click == 0){
			window.setTimeout('tutorial2();',40);
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.font = "50px myFont";
			ctx.fillText("Tutorial", canvas.width / 2, 100);
			ctx.font = textWidth + "px myFont";
			ctx.fillText("If you select the RIGHT answer", canvas.width / 2, canvas.height * 0.25);
			ctx.fillText("Your score will increment by 5", canvas.width / 2, canvas.height * 0.30);
			ctx.fillText("Click the green rectangle!",canvas.width/2,canvas.height*0.35);
			ctx.fillStyle = "red";
			ctx.fillText("Score: " + tutScore, tutWidth, tutHeight + 30);
//			ctx.strokeRect(canvas.width / 2 - canvas.width * 0.3, canvas.height / 2 - canvas.height * 0.3, canvas.width * 0.6, canvas.height * 0.6);
			blueRectangle1.update();
			ctx.drawImage(lives,livesX,livesY + 25,25,25);
			ctx.drawImage(lives,livesX + 31,livesY + 25,25,25);
			ctx.drawImage(lives,livesX + 62,livesY + 25,25,25);
			
			var btn = new Button({
				x: canvas.width / 2 - 160,
            y: canvas.height - 120,
            width: 100,
				    height: 75,
				label: "SKIP",
        image: skipButton,
				click: function () {
					levels++;
					drawStage1();
					resizeCanvas();
					this.click = null;
					btn2.click = null;
				}
				});
			btn.draw();

			var btn2 = new Button({
				x: canvas.width / 2 + 60,
        y: canvas.height - 120,
        width: 100,
        height: 75,
				label: "NEXT",
        image: nextButton,
				click: function () {
					tutorial3();
					resizeCanvas();
					this.click = null;
					btn.click = null;
				}
			});
			btn2.draw();
			
			window.onclick = function () {
				if (btn.clicked()) {
					click = 1;
					click1 = 1;
					btn.click();
				}
				if (btn2.clicked()) {
					click = 1;
					click1 = 1;
					btn2.click();
				}
			};
		
			if(cursor.y > (canvas.height/2) + greenRectangle1.height - 50){
			greenRectangle1.update();
			cursor.update();
			cursor.y -= cursor.speedY;
			cursor.x += cursor.speedX;
			}else if (cursor.y <= (canvas.height/2) + greenRectangle1.height - 49){
				if(click1 == 0){
					if(canvas.width > 1200 && canvas.height > 550){
						ctx.clearRect(tutWidth1 - 70,tutHeight1 + 5,130,30);
					} else{
						ctx.clearRect(tutWidth1 - 35,tutHeight1 + 30,70,20);
					}
				tutScore = 5;
				ctx.font = textWidth + "px myFont";
				ctx.fillStyle = "red";
				ctx.fillText("Score: " + tutScore, tutWidth, tutHeight + 30);
				click = 1;
				click1 = 1;
			}
		} 
	}
}

// Scene Three
var tutorial3 = function () {
		window.clearTimeout('tutorial2();');
		currentScene = 9;
		var textWidth = 15;
		var tutScore = 0;
		var tutHeight = canvas.height * 0.38;
		var tutWidth = canvas.width * 0.55;
		var tutHeight1 = canvas.height * 0.38;
		var tutHeight2 = canvas.height * 0.35;
		var tutWidth1 = canvas.width * 0.55;
		var tutWidth2 = canvas.width * 0.45;
		var livesX = canvas.width * 0.4;
		var livesY = canvas.height * 0.35;
		var blueRectangle1 = new bubble(canvas.width/10,canvas.width/10,"images/bluesquare.png", canvas.width / 2 - canvas.width/10, canvas.height/2,"image",0,0,false,0);
		var greenRectangle1 = new bubble(canvas.width/10,canvas.width/10,"images/greensquare.png", canvas.width /2 , canvas.height/2,"image",0,0,false,0);
		
		if(canvas.width/10 < 75){
			blueRectangle1.width = 75;
			blueRectangle1.height = 75;
			blueRectangle1.x = canvas.width/2-75;
			greenRectangle1.width = 75;
			greenRectangle1.height = 75;
		}
		
		if(canvas.width > 1200 && canvas.height > 550){
			textWidth = 25;
			
		} else{
			tutHeight = canvas.height * 0.4;
			tutWidth = canvas.width /2;
			tutWidth1 = canvas.width /2;
			tutHeight1 = canvas.height * 0.38;
			livesX = canvas.width * 0.38;
			tutWidth2 = canvas.width * 0.53;
			tutHeight2 = canvas.height * 0.33;
			livesY = canvas.height * 0.33;
		}
		
		if(click2 == 0){
			window.setTimeout('tutorial3();',40);
		ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.font = "50px myFont";
        ctx.fillText("Tutorial", canvas.width / 2, 100);
		ctx.font = textWidth + "px myFont";
		ctx.fillText("If you select the WRONG answer", canvas.width / 2, canvas.height * 0.25);
		ctx.fillText("You will lose a live", canvas.width / 2, canvas.height * 0.30);
		ctx.fillText("Click the green rectangle!",canvas.width/2,canvas.height*0.35);
		ctx.fillStyle = "red";
		ctx.fillText("Score: " + tutScore, tutWidth, tutHeight + 30);
//		ctx.strokeRect(canvas.width / 2 - canvas.width * 0.3, canvas.height / 2 - canvas.height * 0.3, canvas.width * 0.6, canvas.height * 0.6);
		greenRectangle1.update();
		ctx.drawImage(lives,livesX,livesY + 25,25,25);
		ctx.drawImage(lives,livesX +31,livesY + 25,25,25);
		ctx.drawImage(lives,livesX + 62,livesY + 25,25,25);
		
        var btn = new Button({
            x: canvas.width / 2 - 160,
            y: canvas.height - 120,
            width: 100,
				    height: 75,
            label: "SKIP",
            image: skipButton,
            click: function () {
				levels++;
                drawStage1();
                resizeCanvas();
                this.click = null;
                btn2.click = null;
            }
        });
        btn.draw();

        var btn2 = new Button({
            x: canvas.width / 2 + 60,
            y: canvas.height - 120,
            width: 100,
            height: 75,
            label: "NEXT",
            image: nextButton,
            click: function () {
				tutorial4();
                resizeCanvas();
            }
        });
        btn2.draw();
		
        window.onclick = function () {
			if (btn.clicked()) {
                btn.click();
            }
            if (btn2.clicked()) {
                btn2.click();
            }
        };
		
		if(cursor2.y > (canvas.height/2) + greenRectangle1.height - 70){
			blueRectangle1.update();
			cursor2.update();
			cursor2.y -= cursor2.speedY;
			cursor2.x += cursor2.speedX;
			}else if (cursor2.y <= (canvas.height/2) + greenRectangle1.height - 49){
				if(click3 == 0){
					if(canvas.width > 1200 && canvas.height > 550){
						ctx.clearRect(livesX + 62,tutHeight2 + 25,25,25);
					} else{
						ctx.clearRect(livesX + 62,tutHeight2 + 25,25,25);
					}
				click2 = 1;
				click3 = 1;
			}
		}
	}
		
}

// tutorial last scene
var tutorial4 = function () {
	window.clearTimeout('tutorial3();');
	var textWidth = 15;
	var tutScore = 0;
	var tutHeight = canvas.height * 0.38;
	var tutWidth = canvas.width * 0.55;
	var tutHeight1 = canvas.height * 0.38;
	var tutWidth1 = canvas.width * 0.55;

		if(canvas.width > 1200 && canvas.height > 550){
			textWidth = 25;
		} else{
			tutHeight = canvas.height * 0.4;
			tutWidth = canvas.width /2;
			tutWidth1 = canvas.width /2;
			tutHeight1 = canvas.height * 0.38;
		}

		ctx.clearRect(0,0,canvas.width,canvas.height);
		currentScene = 10;
		ctx.fillStyle = "black";
		ctx.textAlign = "center";
		ctx.font = "50px myFont";
		ctx.fillText("Tutorial", canvas.width / 2, 100);
		ctx.font = textWidth + "px myFont";
		ctx.fillText("Lastly, leftover time", canvas.width / 2, canvas.height * 0.25);
		ctx.fillText("will be multiplied by 5", canvas.width / 2, canvas.height * 0.30);
		ctx.fillText("and be added to your score", canvas.width / 2, canvas.height * 0.35);
		ctx.fillStyle = "red";
		ctx.fillText("0:30 X 5 = 150",canvas.width/2,canvas.height*0.40);
		ctx.fillText("Score: 150", canvas.width/2, tutHeight + 30);
//		ctx.strokeRect(canvas.width / 2 - canvas.width * 0.3, canvas.height / 2 - canvas.height * 0.3, canvas.width * 0.6, canvas.height * 0.6);
		
			var btn = new Button({
				x: canvas.width / 2 - 70,
				y: canvas.height - 120,
				width: 150,
        height: 100,
        label: "START",
        image: startButton,
				click: function () {
					levels++;
					ctx.clearRect(0,0,canvas.width,canvas.height);
					drawStage1();
					resizeCanvas();
					this.click = null;
				}
				});
			btn.draw();

        window.onclick = function () {
			if (btn.clicked()) {
                btn.click();
            }
        };	
} 
	

