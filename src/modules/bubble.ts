
export class Bubble {
    private x: number = 10;
    private y: number = 10;
    private size: number = 10;
    private xSpeed: number = random(0, 0);
    private ySpeed: number = random(-3, -1);
    private stopped: boolean = false;
    private color: string = "#FFFFFF80";
    private borderColor: string = "white";

    /* TODO REQUIRED - What's missing here? Add it! */
    constructor(x: number, y: number, size: number, color = "#FFFFFF80", borderColor = "white") {
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

    public draw(): void {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }/* TODO REQUIRED - draw the bubbles */

    public move(): void {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }

    /* TODO REQUIRED - Make the bubbles move as long as they aren't stopped. Model after ball behavior. */
    /* The doBorderBehavior is built in for you below. */

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    /* This border behavior implements a wrap, so bubbles will flip over to the other side */
    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
