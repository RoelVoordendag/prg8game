import Game from '../../Game'
import Collidable from './Collidable'

export default class Tree extends Collidable {
    private sprite: PIXI.Sprite
    private textureName: string
    
    constructor(x: number, y:number, width: number, height: number, textureName: string) {
        super(x, y, width, height)
        this.textureName = textureName
        this.sprite = new PIXI.Sprite(
            PIXI.loader.resources.tree.texture
        )
        
        this.sprite.x = this.x
        this.sprite.y = this.y
        this.sprite.width = this.width
        this.sprite.height = this.height
        this.collisionX = this.sprite.x + 64
        this.collisionY = this.sprite.y + 192
        this.collisionWidth = 128
        this.collisionHeight = 64
    
        Game.getInstance().objectContainer.addChild(this.sprite)
    }
}