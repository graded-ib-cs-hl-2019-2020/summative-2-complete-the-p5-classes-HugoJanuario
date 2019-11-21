export class Snowflake {
    private x: number = 10;
    private y: number = 10;
    private size: number = 10;
    private xSpeed: number = random(-3, 3);
    private ySpeed: number = random(-3, 3);
    private stopped: boolean = false;
    private color: string = "white";
    private borderColor: string = "black";

    constructor(x: number, y: number, size: number, color = "blue", borderColor = "black") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = this.xSpeed;
        this.ySpeed = this.ySpeed;
        this.stopped = this.stopped;
        this.color = color;
        this.borderColor = borderColor;
    }
    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }
    public move(): void {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;

        }
    }


    /* TODO REQUIRED - Make this work. The snowflakes should drift slowly downward. I have implemented only the draw() method.
     * You can base the rest of the behavior after bubbles, with only a few changes. */

    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);

    }


}




