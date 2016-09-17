/**
 * Created by nick on 5/14/2016.
 */



/* Create the bubble Image Object */
function bubble(width, height, src, x , y, type, speedX, speedY,isClicked,opClick) {
    this.type = type;
    if(type == "image") {
        this.image = new Image();
        this.image.src = src;
    }
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.isClicked = isClicked;
    this.opClick = opClick;
    this.update = function(){
        if(type == "image") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}

