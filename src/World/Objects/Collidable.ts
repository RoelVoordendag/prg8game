//Parent class for all colliders
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
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    //The collision x, y, width and height are meant for colliders where
    //you dont want the entire sprite to be a collider
    //Example: A character can walk behind a tree, but not
    //through the trunk even though it is one sprite

    isColliding(x: number, y: number): boolean {
        //But if there is no special collision props given,
        //do use the entire sprite
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
        //The actual collision check  
        if (
            x + 64 > this.collisionX
            && x < this.collisionX + this.collisionWidth
            && y + 64 > this.collisionY
            && y < this.collisionY + this.collisionHeight
        ) {
            return true
        }
        return false
    }
}