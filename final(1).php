<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>QuikPik
    </title>
    <script src = "Javascript/sound.js" type ="text/javascript"></script>
    <script src = "Javascript/bubbles.js" type ="text/javascript"></script>
    <script src = "Javascript/levelOne.js" type ="text/javascript"></script>
    <script src = "Javascript/levelTwo.js" type ="text/javascript"></script>
    <script src = "Javascript/levelThree.js" type ="text/javascript"></script>
    <script src = "Javascript/levelFour.js" type ="text/javascript"></script>
	<script src = "Javascript/levelFive.js" type ="text/javascript"></script>
	<script src = "Javascript/levelSix.js" type ="text/javascript"></script>
	<script src = "./Javascript/levelSeven.js" type = "text/javascript"></script>
	<script src = "./Javascript/levelEight.js" type = "text/javascript"></script>
	<script src = "Javascript/levelNine.js" type = "text/javascript"></script>
	<script src = "Javascript/levelTen.js" type = "text/javascript"></script>
	<script src = "./Javascript/bonusStage.js" type = "text/javascript"></script>
    <script src = "Javascript/drawEachStage.js" type ="text/javascript"></script>
	<script src = "Javascript/tutorial.js" type = "text/javascript"></script>
    <link href="CSS/style.css" rel="stylesheet" type="text/css"/>
    <link href="CSS/score.css" rel="stylesheet" type="text/css"/>
  
</head>

<body>
<div id="gameArea">
	<div id = "options" class = "overlay"> <!-- for overlay -->
		<div class = "overlay_content">
		<img id = "optionBanner" src = "images/optionsbanner.png"> <!-- Heading for options menu -->
		<h3> - Game Paused - </h3>
		<!-- Links for option menu -->
			<a href = "#" onclick = "resume()"><img src = "images/resume.png" id ="optionButton" alt="resume"></a>
			<a href = "#" onclick = "music()"><img id="muteButton" src = "images/mute.png"></a>
			<a href = "#" onclick = "returnHome()"><img src = "images/home2.png" id ="optionButton" alt="home"></a>
		</div>
	</div>
    <canvas id="myCanvas" width="window.innerWidth" height="window.innerHeight">
    </canvas>
    <span id="counter"></span>
  <span id="text" hidden>
	<form onsubmit="return false;" method="post">
      <div class="form">
        <input type="text" name="Name" id="Name" maxlength="15" placeholder="Enter Your Name">
      </div>
      <div class="form">
        <input type="image" src="images/submit2.png" alt="Submit" width="50" height="40" id="button" onclick="sendScore(); getScore(); clearScene(); drawScoreBoard();">
      </div>

</form>
</span>
</div>

<script>

    /*Canvas variables*/
    var canvas;
    var canvasWidth;
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    /*Bonus stage*/
    var extralife = 0;
	var extralife1 = 0;
    /*Lives count*/
    var livesCount = 3;
    var levelOneCorrect = 0;
    var levelTwoCorrect = 0;
    var levelThreeCorrect = 0;
    var levelFourCorrect = 0;
    var levelFiveCorrect = 0;
    var levelSixCorrect = 0;
    var levelSevenCorrect = 0;
    var levelEightCorrect = 0;
    var levelNineCorrect = 0;
    var levelTenCorrect = 0;

    /*Stage count*/
    var stageCount = 1;
    var stageClear = false;

    /*question string*/
    var question = "Pick all words Green and Green Objects";
    var newQuestion = "Pick something blue";
    var L3Question = "Pick the red odd numbers";
    var L4Question = "Pick all words Red";
    var L5Question = "Pick the red prime numbers";
    var L6Question = "Pick the largest even number for green and blue";
    var L7Question = "Pick the green shape with 3 or more sides";
    var L8Question = "Pick all the numbers divisible by 2";
    var L9Question = "Pick the odd numbers greater than 5";
    var L10Question = "Pick the numbers that are NOT red";

    /*Tutorial Played*/
    var tutorialPlayed = 0;
	var tutorialStage; //Determines if the game is in tutorial

    /*Total Score*/
    totalScore = 0;

    /*Score for each level*/
    var score = 0;
    var level2Score = 0;
    var level3Score = 0;
    var level4Score = 0;
    var level5Score = 0;
    var level6Score = 0;
    var level7Score = 0;
    var level8Score = 0;
    var level9Score = 0;
    var level10Score = 0;
    var bonusScore = 0;

    /* Current scene that is being displayed*/
    var currentScene = 0;

    /*Couple bug fixed*/
    var resized = 0;

    /*Running Timer Boolean*/
    var timer = document.getElementById('counter');
    var msLeft;
    var timerHandle;
    var levelTime = 30; //Keeps track of the seconds left and also can be used to state the amount of seconds for the stage

    // Game bubble movement timer - Harvard
    var gameTimer;
    var gameState = false; // True = game is playing
    var optionStatus = false; //Determines if the options menu is open
    var stageHome = false; //Determines if the game is in home screen
    var homeClicked = 0; // Resets all scores if game is restarted

    /*Fail Stage*/
    var userInput = document.getElementById('Name');
    var lives = new Image();
    var lives2 = new Image();
    var lives3 = new Image();
    lives.src = "images/lives.png";
    lives2.src = "images/lives.png";
    lives3.src = "images/lives.png";
    var livesList = [lives, lives2, lives3];

    /* Audio variables*/
    var bubblePop;
    var playMusic = true; // Determines if sounds are on , true = on

    //Event x and y
    var canvasX;
    var canvasY;
    var cx;
    var cy;

    //Options button
    var options = new Image();
    options.src = "images/option.png";
    //Logo
    var logo = new Image();
    logo.src = "images/temp_logo.png";

    //Score board banner
    var banner = new Image();
    banner.src = "images/cloudbanner1.png";

    //Button images
    var startButton = new Image();
    var scoreButton = new Image();
    var homeButton = new Image();
    var restartButton = new Image();
    var homeButton2 = new Image();
    var nextStageButton = new Image();
    startButton.src = "images/start.png";
    scoreButton.src = "images/highscore.png";
    homeButton.src = "images/home.png";
    restartButton.src = "images/restart.png";
    homeButton2.src = "images/home2.png";
    nextStageButton.src = "images/nextstage.png";

    /*Levels*/
    var levels = 0;

    function mouseClickEvent(e) {
        canvasX = e.pageX;
        canvasY = e.pageY;
    }

    canvas.addEventListener("click", mouseClickEvent, false);

    window.onload = function () {
        bubblePop = new sounds("./gamesound/bubblepop.mp3");
        drawStartScene();
        resizeCanvas();
        window.addEventListener('mousedown', function (e) {
            canvasX = e.pageX;
            canvasY = e.pageY;
        });
        window.addEventListener("mousedown", onDown, false);
    }


    /*Countdown Timer*/
    function countdown(elementName, minutes, seconds) {
        var element,
                  endTime,
                  hours,
                  mins,
                  time;


        function twoDigits(n) {
            return (n <= 9 ? "0" + n : n);
        }
        function updateTimer() {

            

            //Only runs if gameState is true (not paused)
            if (gameState == true) {
                msLeft = endTime - (+new Date);

                if (livesCount == 0) {
                    element.innerHTML = "0:00";
                } else if (msLeft < 1000) {
                    element.innerHTML = "0:00";
                    //levels = 1;
                    //stageCount = 1;
                } else {
                    clearTimeout(timerHandle); //Clears anything in timerHandle just in case
                    time = new Date(msLeft);
                    hours = time.getUTCHours();
                    mins = time.getUTCMinutes();
                    levelTime -= 0.75; //Keeps track of time when paused - Harvard
                    element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
                    if (gameState == true) {
                        timerHandle = setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
                    }

                    if (gameState == false) {
                        clearTimeout(timerHandle);
                    }
                }
            }
        }
        element = document.getElementById(elementName);
        endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
        updateTimer();
    }

    function resetCountdown() {
        running = true;
        clearTimeout(timerHandle);
        if (levels == 1) {
            levelTime = 30;
            countdown("counter", 0, levelTime);
        } else if (levels == 2 || levels == 3) {
            levelTime = 25;
            countdown("counter", 0, levelTime);
        } else if (levels == 4 || levels == 5) {
            levelTime = 20;
            countdown("counter", 0, levelTime);
        } else if (levels == 6 || levels == 7 || levels == 8) {
            levelTime = 15;
            countdown("counter", 0, levelTime);
        } else if (levels == 9 || levels == 10) {
            levelTime = 10;
            countdown("counter", 0, levelTime);
        } else if (levels == 11) {
            levelTime = 4;
            countdown("counter", 0, levelTime);
        }
    };

    function clearScene() {
        ctx.clearRect(0, 0, 1500, 1500)
    }


    /* Ball moving function */
    function move() {
        ctx.save();

        ctx.clearRect(0, 100, canvas.width, canvas.height - 150);

        // other stuff

        // boundaries validation
        if (livesCount == 0) {
            timer.style.display = "none";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            failStage();
        } else if (msLeft < 1000 && levels == 11) {
			stageCount = 1;
			levels = 1;
			timer.style.display = "none";
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			totalScore = bonusScore;
			youWin();	
		} else if (msLeft < 1000 && levels < 11) {
				if(levels == 1){
					totalScore = score;
				} else if(levels == 2){
					totalScore = level2Score;
				} else if(levels == 3){
					totalScore = level3Score;
				} else if(levels == 4){
					totalScore = level4Score;
				} else if(levels == 5){
					totalScore = level5Score;
				} else if(levels == 6){
					totalScore = level6Score;
				} else if(levels == 7){
					totalScore = level7Score;
				} else if(levels == 8){
					totalScore = level8Score;
				} else if(levels == 9){
					totalScore = level9Score;
				} else if(levels == 10){
					totalScore = level10Score;
				}
				
				timer.style.display = "none";
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				failStage();
        } else if (levelOneCorrect == 2 || levelTwoCorrect == 2 || levelThreeCorrect == 3 ||
                       levelFourCorrect == 3 || levelFiveCorrect == 3 || levelSixCorrect == 2
                       || levelSevenCorrect == 3 || levelEightCorrect == 4 || levelNineCorrect == 3 || levelTenCorrect == 3) {
            ctx.clearRect(0, 100, canvas.width, canvas.height);
            stageClear = true;
            //if (stageClear = true) {
            timer.style.display = "none";
            passScene();
            //}
        } else if (stageHome == true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stageHome = false;
            gameState = true;
            homeClicked = 1;
            timer.style.display = "none";
            drawStartScene();
        }
        else {
            if (levels == 11) {
                checkBubblesAreClicked();
            } else {
                outOfBounds();
                boundariesValidation();
                checkBubblesAreClicked();
                bubblesCollision();
                ctx.restore();
                //clearTimeout(gameTimer); // removes anything inside gameTimer;
            }
            if (gameState == true) {
                gameTimer = setTimeout('move();', 20);
            }

            if (gameState == false) {
                clearTimeout(gameTimer);
            }
        }
    }

    //Allows anchor tag to call function to resume game when in option menu - Harvard
    function resume() {

        if (gameState == false && currentScene != 1) {
            gameState = true;
            optionStatus = false;
            countdown('counter', 0, levelTime);
            closeOptions();
            move();
        }

        if (currentScene == 1) {
            closeOptions();
            optionStatus = false;
        }
    }

    //Allows anchor tag to call function to go to home screen - Harvard
    function returnHome() {
        optionStatus = false;
        drawStartScene();
        closeOptions();
        resetOne();
        resetTwo();
        resetThree();
        resetFour();
        resetFive();
        resetSix();
        resetSeven();
        resetEight();
        resetNine();
        resetTen();
        resetBonus();
        stageHome = true;
        timer.style.display = "none";
    };

    //Opens the options screen - Harvard
    function openOptions() {
        document.getElementById("options").style.height = "100%";
        document.getElementById("options").style.transition = "0.5s";
    }

    //Closes the options screen - Harvard
    function closeOptions() {
        document.getElementById("options").style.height = "0%";
        document.getElementById("options").style.transition = "0.5s";
    }

    function music() {

        var text = document.getElementById("muteButton");

        //Mute the sounds if sounds is on
        if (playMusic == true) {
            text.src = "images/unmute.png";
            return playMusic = false;
        }

        if (playMusic == false) {
            text.src = "images/mute.png";
            return playMusic = true;
        }

    }

    /* Mouse click event */
    function onDown(event) {
        cx = event.pageX;
        cy = event.pageY;

        //options button clicked - Harvard
        //pauses the screen
        if(tutorialStage == false) {
			if (cx >= (canvas.width - 50) && cy >= (canvas.height - 50)) {
				if (gameState == true) {
					gameState = false; // Pauses the timer
					clearTimeout(gameTimer);
					openOptions();
				}
			}
		}
        if (gameState == true) {
            if (levels == 1) {
                levelOneAction();
            } else if (levels == 2) {
                levelTwoAction();
            } else if (levels == 3) {
                levelThreeAction();
            } else if (levels == 4) {
                levelFourAction();
            } else if (levels == 5) {
                levelFiveAction();
            } else if (levels == 6) {
                levelSixAction();
            } else if (levels == 7) {
                levelSevenAction();
            } else if (levels == 8) {
                levelEightAction();
            } else if (levels == 9) {
                levelNineAction();
            } else if (levels == 10) {
                levelTenAction();
            } else if (levels == 11) {
                levelBonusAction();
            }
        }
    }



    var passScene = function () {
        drawPassScene();
        resizeCanvas();
        window.addEventListener('mousedown', function (e) {
            canvasX = e.pageX;
            canvasY = e.pageY;
        });
    }

    // Creates button object  
    var Button = function (config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.width = config.width || 130;
        this.height = config.height || 90;
        this.image = config.image || null;
        this.label = config.label || "Click";
        this.click = config.click || function () { };
        this.clicked = function () {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var clicked = false;
            if ((mybottom > canvasY) && (mytop < canvasY) && (myright > canvasX) && (myleft < canvasX)) {
                clicked = true;
            }
            return clicked;
        };
    };

    // Draws button according to specs
    Button.prototype.draw = function () {
        // Draw button icon if button is assigned an image
        if (this.image != null) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = "gray";
            ctx.strokeRect(this.x, this.y, this.width, this.height, 5);
            ctx.fillStyle = "black";
            ctx.font = "20px myFont";
            ctx.textAlign = "center";
            ctx.fillText(this.label, this.x + this.width / 2, this.y + this.height * 2 / 3);
        }
    };

    var drawPassScene = function () {
		timer.style.display = "none";
	if (gameState == true) {
                if (levels == 1 && levelOneCorrect == 2) {
                    gameState = false;
                    score += (parseInt(msLeft / 1000) * 5);
                    resizeCanvas();
                }
                if (levels == 2 && levelTwoCorrect == 2) {
                    gameState = false;
                    level2Score += (parseInt(msLeft / 1000) * 5);
                    resizeCanvas();
                }
                if (levels == 3 && levelThreeCorrect == 3) {
                    gameState = false;
                    level3Score += (parseInt(msLeft / 1000) * 5);
                    resizeCanvas();
                }
                if (levels == 4 && levelFourCorrect == 3) {
                    gameState = false;
                    level4Score += (parseInt(msLeft / 1000) * 5);
                    resizeCanvas();
                }
                if (levels == 5 && levelFiveCorrect == 3) {
                    gameState = false;
                    level5Score += (parseInt(msLeft / 1000) * 5);
                    resizeCanvas();
                }
                if (levels == 6 && levelSixCorrect == 2) {
                    gameState = false;
                    level6Score += (parseInt(msLeft / 1000) * 5)
                    resizeCanvas();
                }
                if (levels == 7 && levelSevenCorrect == 3) {
                    gameState = false;
                    level7Score += (parseInt(msLeft / 1000) * 5)
                    resizeCanvas();
                }
                if (levels == 8 && levelEightCorrect == 4) {
                    gameState = false;
                    level8Score += (parseInt(msLeft / 1000) * 5)
                    resizeCanvas();
                }
                if (levels == 9 && levelNineCorrect == 3) {
                    gameState = false;
                    level9Score += (parseInt(msLeft / 1000) * 5)
                    resizeCanvas();
                }
                if (levels == 10 && levelTenCorrect == 3) {
                    gameState = false;
                    level10Score += (parseInt(msLeft / 1000) * 5)
                    resizeCanvas();
                }
            }
        notClickable();
        var level2Lives;
        var level3Lives;
        var level4Lives;
        var level5Lives;
        var level6Lives;
        var level7Lives;
        var level8Lives;
        var level9Lives;
        var level10Lives;
        level2Lives = livesCount;
        level3Lives = livesCount;
        level4Lives = livesCount;
        level5Lives = livesCount;
        level6Lives = livesCount;
        level7Lives = livesCount;
        level8Lives = livesCount;
        level9Lives = livesCount;
        level10Lives = livesCount;

        var tempLife;

        totalScore = score + level2Score;
        if (levels == 3) {
            totalScore = level3Score;
        } else if (levels == 4) {
            totalScore = level4Score;
        } else if (levels == 5) {
            totalScore = level5Score;

            tempLife = livesCount;
            if (tempLife == 3) {
                totalScore = level5Score + 100;
                ctx.font = "20px Arial";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText("Achievement I unlocked: Points + 100", canvas.width / 2, 400);
            } else {
                ctx.font = "20px Arial";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText("Achievement I unlocked + ", canvas.width / 2 - 50, 400);
                ctx.drawImage(lives, (canvas.width / 2) + 70, 370, 35, 35);
            }

            /*
            if (extralife == 0) {
            if (livesCount < 3) {
            livesCount++;
            }
            extralife++;
            }
            */



        } else if (levels == 6) {
            totalScore = level6Score;
        } else if (levels == 7) {
            totalScore = level7Score;
        } else if (levels == 8) {
            totalScore = level8Score;
        } else if (levels == 9) {
            totalScore = level9Score;
        } else if (levels == 10) {
            totalScore = level10Score;
            if (livesCount == 3){
                 totalScore = level10Score + 300;
                 ctx.font = "20px Arial";
                 ctx.fillStyle = "red";
                 ctx.textAlign = "center";
                 ctx.fillText("Achievement II unlocked: Points + 300", canvas.width / 2, 400);
            }
        } else if (levels == 11) {
            totalScore = bonusScore;
        }


        passSceneHelper();

        var stageBtn = new Button({
            x: canvas.width / 2 - 62,
            y: 260,
            width: 120,
            height: 80,
            image: nextStageButton,
            label: "Next Stage",
            click: function () {
                if (levels == 1) {
                    backToStart();
                    gameState = true;
                    levels++;
                    stageCount++;
                    livesCount = level2Lives;
                    drawStage1();
                    resizeCanvas();
                    stageBtn.click = function () { };
                } else if (levels == 2) {
                    backToStart();
                    gameState = true;
                    levels++;
                    stageCount++;
                    livesCount = level3Lives;
                    drawStage1();
                    resizeCanvas();
                    stageBtn.click = function () { };
                } else if (levels == 3) {
                    backToStart();
                    gameState = true;
                    levels++;
                    stageCount++;
                    livesCount = level4Lives;
                    drawStage1();
                    resizeCanvas();
                    stageBtn.click = function () { };
                } else if (levels == 4) {
                    backToStart();
                    gameState = true;
                    levels++;
                    stageCount++;
                    livesCount = level5Lives;
                    drawStage1();
                    resizeCanvas();
                    stageBtn.click = function () { };
                } else if (levels == 5) {
                    backToStart();
                    gameState = true;
                    levels++;
                    stageCount++;
                    livesCount = level6Lives;
                    drawStage1();
                    resizeCanvas();
                    stageBtn.click = function () { };
                } else if (levels == 6) {
                    backToStart();
                    gameState = true;
                    levels++;
                    stageCount++;
                    livesCount = level7Lives;
                    drawStage1();
                    resizeCanvas();
                    stageBtn.click = function () { };

                } else if (levels == 7) {
                    backToStart();
                    gameState = true;
                    levels++;
                    stageCount++;
                    livesCount = level8Lives;
                    drawStage1();
                    resizeCanvas();
                    stageBtn.click = function () { };
                } else if (levels == 8) {
                    backToStart();
                    gameState = true;
                    levels++;
                    stageCount++;
                    livesCount = level9Lives;
                    drawStage1();
                    resizeCanvas();
                    stageBtn.click = function () { };
                } else if (levels == 9) {
                    backToStart();
                    gameState = true;
                    levels++;
                    stageCount++;
                    livesCount = level10Lives;
                    drawStage1();
                    resizeCanvas();
                    stageBtn.click = function () { };
                } else if (levels == 10) {
                    backToStart();
                    gameState = true;
                    levels++;
                    drawStage1();
                    resizeCanvas();
                    stageBtn.click = function () { };
                }

            }
        });
        stageBtn.draw();

        window.onclick = function () {
            if (stageBtn.clicked()) {
                stageBtn.click();
            }
        };
    }

    var drawStartScene = function () {
        currentScene = 1;
        resetOption();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "40px myFont";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        text.style.display = "none";
        ctx.drawImage(logo, canvas.width / 2 - 100, 60, 200, 200);
        //ctx.drawImage(options, canvas.width - 50, canvas.height - 50, 50, 50);
        var start = new Button({
            x: canvas.width / 2 - 65,
            y: 270,
            image: startButton,
            label: "START",
            click: function () {
                if (tutorialPlayed == 0) {
                    gameState = true;
                    timer.style.display = "none";
                    backToStart();
                    tutorial1();
                    resizeCanvas();
                    start.click = function () { };
                    btn2.click = function () { };
                    tutorialPlayed++;
                } else {
                    backToStart();
                    drawStage1();
                    resizeCanvas();
                    start.click = function () { };
                    btn2.click = function () { };
                }
            }
        });
        start.draw();
        var btn2 = new Button({
            x: canvas.width / 2 - 65,
            y: 380,
            image: scoreButton,
            label: "SCOREBOARD",
            click: function () {
                drawScoreBoard();
                resizeCanvas();
                start.click = function () { };
                btn2.click = function () { };
            }
        });
        btn2.draw();

        /*var btn3 = new Button({
            x: canvas.width - 50,
            y: canvas.height - 50,
            label: "",
            click: function () {
                optionStatus = true;
                openOptions();
            }
        });*/

        window.onclick = function () {
            //Stops clicking of the background when options menu is open
            //if (optionStatus == false) {
                if (start.clicked()) {
                    start.click();
                }

                if (btn2.clicked()) {
                    btn2.click();
                }
            //}
            /*if (btn3.clicked()) {
                btn3.click();
            }*/

        };

        notClickable();

    }
    function backToStart() {
        notClickable();
        if (homeClicked == 1) {
            extralife = 0;
			extralife1 = 0;
            homeClicked = 0;
            livesCount = 3;
            levels = 1;
            stageCount = 1;
            totalScore = 0;
            level2Score = 0;
            level3Score = 0;
            level4Score = 0;
            level5Score = 0;
            level6Score = 0;
            level7Score = 0;
            level8Score = 0;
            level9Score = 0;
            level10Score = 0;
			bonusScore = 0;
        }
        if (livesCount <= 0 || levels == 11) {
            extralife = 0;
			extralife1 = 0;
            livesCount = 3;
            levels = 1;
            stageCount = 1;
            totalScore = 0;
            level2Score = 0;
            level3Score = 0;
            level4Score = 0;
            level5Score = 0;
            level6Score = 0;
            level7Score = 0;
            level8Score = 0;
            level9Score = 0;
            level10Score = 0;
			bonusScore = 0;
        }
        resetValues();
        resetOption();
        resized = 0;
        if (levels == 1) {
            level2Score = score;
            score = 0;
        } else if (levels == 2) {
            level3Score = level2Score;
        } else if (levels == 3) {
            level4Score = level3Score;
        } else if (levels == 4) {
            level5Score = level4Score;
        } else if (levels == 5) {
            level6Score = level5Score;
        } else if (levels == 6) {
            level7Score = level6Score;
        } else if (levels == 7) {
            level8Score = level7Score;
        } else if (levels == 8) {
            level9Score = level8Score;
        } else if (levels == 9) {
            level10Score = level9Score;
        } else if (levels == 10) {
            bonusScore = level10Score;
        }
        levelOneCorrect = 0;
        levelTwoCorrect = 0;
        levelThreeCorrect = 0;
        levelFourCorrect = 0;
        levelFiveCorrect = 0;
        levelSixCorrect = 0;
        levelSevenCorrect = 0;
        levelEightCorrect = 0;
        levelNineCorrect = 0;
        levelTenCorrect = 0;
        resetCountdown();
    }

    /* sends the score and name to the database */
    function sendScore() {
        var r = new XMLHttpRequest();
        var name = document.getElementById("Name").value;
        r.open("GET", "savescores.php?name=" + name + " &score=" + totalScore, true);
        r.send(null);
    }

    /* retrieves score from database */
    function getScore() {
        var x = new XMLHttpRequest();
        x.open("GET", "leader.php", true);
        x.onreadystatechange = function () {
            if (x.readyState == 4 && x.status == 200) {
                document.getElementById("scoreboard").innerHTML = x.responseText;
            }
        }
        x.send(null);
    }

    var failStage = function () {
        notClickable();
		if(levels == 1){
			totalScore = score;
		} else if(levels == 2){
			totalScore = level2Score;
		} else if (levels == 3) {
            totalScore = level3Score;
        } else if (levels == 4) {
            totalScore = level4Score;
        } else if (levels == 5) {
            totalScore = level5Score;
        } else if (levels == 6) {
            totalScore = level6Score;
        } else if (levels == 7) {
            totalScore = level7Score;
        } else if (levels == 8) {
            totalScore = level8Score;
        } else if (levels == 9) {
            totalScore = level9Score;
        } else if (levels == 10) {
            totalScore = level10Score;
        } else if (levels == 11) {
            totalScore = bonusScore;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        currentScene = 5;
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.font = "40px myFont";
        ctx.fillText("Stage Failed", canvas.width / 2, 120);
        text.style.display = "inline";
        ctx.fillText("Score: " + totalScore, canvas.width / 2, 160);
		stageCount = 1;
		levels = 1;
        var btn1 = new Button({
            x: canvas.width / 2 - 65,
            //y: canvas.height / 2 + 160,
            y: 430,
            width: 120,
            height: 80,
            label: "HOME",
            image: homeButton2,
            click: function () {
                backToStart();
                drawStartScene();
                resizeCanvas();
                this.click = null;
                btn2.click = null;
                btn3.click = null;
            }
        });
        btn1.draw();

        var btn2 = new Button({
            x: canvas.width / 2 - 65,
            //y: canvas.height / 2 + 50,
            y: 330,
            width: 120,
            height: 80,
            label: "SCOREBOARD",
            image: scoreButton,
            click: function () {
                drawScoreBoard();
                resizeCanvas();
                this.click = null;
                btn1.click = null;
                btn3.click = null;

            }
        });
        btn2.draw();
        var btn3 = new Button({
            x: canvas.width / 2 - 65,
            //            y: canvas.height / 2 - 60,
            y: 230,
            width: 120,
            height: 80,
            label: "RESTART",
            image: restartButton,
            click: function () {
                backToStart();
                drawStage1();
                resizeCanvas();
                this.click = null;
                btn1.click = null;
                btn2.click = null;
            }
        });
        btn3.draw();
        window.onclick = function () {
            if (btn1.clicked()) {
                btn1.click();
            }
            if (btn2.clicked()) {
                btn2.click();
            }
            if (btn3.clicked()) {
                btn3.click();
            }
        };
    }

    var drawScoreBoard = function () {
        currentScene = 3;
        getScore();
        ctx.textAlign = "center";
        //ctx.fillStyle = "black";
        ctx.drawImage(banner, canvas.width / 2 - 200, 40, 400, 100);
        //ctx.font = "20px Arial";
        //ctx.fillText("High Scores", canvas.width / 2, 160);
        scoreboard.style.display = "inline";
        timer.style.display = "none";
        text.style.display = "none";
        var home = new Button({
            x: canvas.width - 102,
            y: 22,
            width: 80,
            height: 60,
            image: homeButton,
            label: "HOME",
            click: function () {
                scoreboard.style.display = "none";
                backToStart();
                drawStartScene();
                resizeCanvas();
                home.click = function () { };
            }
        });
        home.draw();

        window.onclick = function () {
            if (home.clicked()) {
                home.click();
            }
        };
    }
    var drawStage1 = function () {
        currentScene = 2;
        notClickable();

        if (levels == 1) {
            resetOne();
            drawLayoutOne();
            drawLevelOneBubbles();
        } else if (levels == 2) {
            resetTwo();
            drawLayoutTwo();
            drawLevelTwoBubbles();
        } else if (levels == 3) {
            resetThree();
            drawLayoutThree();
            drawLevelThreeBubbles();
        } else if (levels == 4) {
            resetFour();
            drawLayoutFour();
            drawLevelFourBubbles();
        } else if (levels == 5) {
            resetFive();
            drawLayoutFive();
            drawLevelFiveBubbles();
        } else if (levels == 6) {
            addLives();
            resetSix();
            drawLayoutSix();
            drawLevelSixBubbles();
        } else if (levels == 7) {
            resetSeven();
            drawLayoutSeven();
            drawLevelSevenBubbles();
        } else if (levels == 8) {
            resetEight();
            drawLayoutEight();
            drawLevelEightBubbles();
        } else if (levels == 9) {
            resetNine();
            drawLayoutNine();
            drawLevelNineBubbles();
        } else if (levels == 10) {
            resetTen();
            drawLayoutTen();
            drawLevelTenBubbles();
        } else if (levels == 11) {
			addBonusScore();
            resetBonus();
            drawLayoutBonus();
            drawBonusStageBubbles();
        }
        timer.style.display = "";
        text.style.display = "none";

        if (resized == 0) {
            resetCountdown();
            move();
            drawScore();
            resized = 1;
        }

    }

    var youWin = function () {
        notClickable();
        if (levels == 3) {
            totalScore = level3Score;
        } else if (levels == 4) {
            totalScore = level4Score;
        } else if (levels == 5) {
            totalScore = level5Score;
        } else if (levels == 6) {
            totalScore = level6Score;
        } else if (levels == 7) {
            totalScore = level7Score;
        } else if (levels == 8) {
            totalScore = level8Score;
        } else if (levels == 9) {
            totalScore = level9Score;
        } else if (levels == 10) {
            totalScore = level10Score;
        } else if (levels == 11) {
            totalScore = bonusScore;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        currentScene = 11;
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.font = "40px myFont";
        ctx.fillText("You Win!", canvas.width / 2, 120);
        text.style.display = "inline";
        ctx.fillText("Score: " + bonusScore, canvas.width / 2, 160);

        var btn1 = new Button({
            x: canvas.width / 2 - 65,
            //y: canvas.height / 2 + 160,
            y: 430,
            width: 120,
            height: 80,
            label: "HOME",
            image: homeButton2,
            click: function () {
                backToStart();
                drawStartScene();
                resizeCanvas();
                this.click = null;
                btn2.click = null;
                btn3.click = null;
            }
        });
        btn1.draw();

        var btn2 = new Button({
            x: canvas.width / 2 - 65,
            //y: canvas.height / 2 + 50,
            y: 330,
            width: 120,
            height: 80,
            label: "SCOREBOARD",
            image: scoreButton,
            click: function () {
                drawScoreBoard();
                resizeCanvas();
                this.click = null;
                btn1.click = null;
                btn3.click = null;

            }
        });
        btn2.draw();
        var btn3 = new Button({
            x: canvas.width / 2 - 65,
            //          y: canvas.height / 2 - 60,
            y: 230,
            width: 120,
            height: 80,
            label: "RESTART",
            image: restartButton,
            click: function () {
                backToStart();
                drawStage1();
                resizeCanvas();
                this.click = null;
                btn1.click = null;
                btn2.click = null;
            }
        });
        btn3.draw();
        window.onclick = function () {
            if (btn1.clicked()) {
                btn1.click();
            }
            if (btn2.clicked()) {
                btn2.click();
            }
            if (btn3.clicked()) {
                btn3.click();
            }
        };
    }
    function init() {
        canvas = document.getElementById('myCanvas');
        if (canvas.getContext) {
            ctx = canvas.getContext("2d");
            window.addEventListener('resize', resizeCanvas, false);
            window.addEventListener('orientationchange', resizeCanvas, false);
            resizeCanvas();
        }
    }


    /*Resizes the canvas*/
    function resizeCanvas() {
        canvas.width = window.innerWidth - 22;
        canvas.height = window.innerHeight - 22;
        if (currentScene === 1) {
            drawStartScene();
        } else if (currentScene === 2) {
            drawStage1();
        } else if (currentScene === 3) {
            drawScoreBoard();
        } else if (currentScene === 4) {
            drawPassScene();
        } else if (currentScene === 5) {
            failStage();
        } else if (currentScene === 7) {
            tutorial1();
        } else if (currentScene === 8) {
            tutorial2();
        } else if (currentScene === 9) {
            tutorial3();
        } else if (currentScene === 10) {
            tutorial4();
        } else if (currentScene === 11) {
            youWin();
        }
    }

    init();

</script>

<div id="scoreboard" hidden></div>
  
</body>
</html>