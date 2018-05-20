export default class Collidable {
    protected x: number
    protected y: number
    protected width: number
    protected height: number
    protected hit: boolean = false
    protected collisionX: number = 0
    protected collisionY: number = 0
    protected collisionWidth: number = 0
    protected collisionHeight: number = 0

    constructor (x: number, y:number, width: number, height: number) {
        // colissionX: number = 0, colissionY: number = 0, collisionWidth: number = 0, colissionHeight: number = 0
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        // this.collisionX = colissionX
        // this.collisionY = colissionY
        // this.collisionHeight = colissionHeight
        // this.collisionWidth = collisionWidth
    }

    isColliding(x: number, y: number): boolean {

        // if(this.collisionX !== 0 && this.collisionY !== 0 && this.collisionWidth !== 0 && this.collisionHeight !== 0 ) {
        //     console.log("jawor werkt pik");

            
        // } else

        if(this.collisionX ==0) {
            this.collisionX = this.x
        }
        if(this.collisionY ==0) {
            this.collisionY = this.y
        }
        if(this.collisionWidth ==0) {
            this.collisionWidth = this.width
        }
        if(this.collisionHeight ==0) {
            this.collisionHeight = this.height
        }
        

        if (
            x + 64 > this.collisionX
            && x < this.collisionX + this.collisionWidth
            && y + 64 > this.collisionY
            && y < this.collisionY + this.collisionHeight
        ) {
            // console.log(this.x);
            
            return true
        }

        return false
    }
}