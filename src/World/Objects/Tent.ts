import Game from '../../Game'
import Collidable from './Collidable'

export default class Tent extends Collidable {
    private sprite: PIXI.Sprite
    private textureName: string
    
    constructor(x: number, y:number, width: number, height: number, textureName: string) {
        super(x, y, width, height)
        this.textureName = textureName
        this.sprite = PIXI.Sprite.fromImage(textureName)
        
        this.sprite.x = this.x
        this.sprite.y = this.y
        this.sprite.width = this.width
        this.sprite.height = this.height
        this.collisionX = this.sprite.x
        this.collisionY = this.sprite.y + 64
        this.collisionWidth = this.width
        this.collisionHeight = this.height - 64
    
        Game.getInstance().objectContainer.addChild(this.sprite)
    }
}