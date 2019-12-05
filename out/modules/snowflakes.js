export class Snowflake {
    constructor(x, y, size, color = "white", borderColor = "black") {
        this.x = 10;
        this.y = 10;
        this.size = 10;
        this.xSpeed = random(0, 0);
        this.ySpeed = random(1, 1);
        this.stopped = false;
        this.color = "white";
        this.borderColor = "black";
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = this.xSpeed;
        this.ySpeed = this.ySpeed;
        this.stopped = this.stopped;
        this.color = color;
        this.borderColor = borderColor;
    }
    stop() {
        this.stopped = false;
    }
    go() {
        this.stopped = true;
    }
    move() {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }
    draw() {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }
    doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        }
        else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        }
        else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
//# sourceMappingURL=snowflakes.js.map