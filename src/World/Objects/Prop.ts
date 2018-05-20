//A prop is a sprite on top of the tiles, but has no collider so characters can move over it.
import Game from '../../Game'

export default class Prop {
    private sprite: PIXI.Sprite
    private textureName: string

    constructor (x: number, y:number, width: number, height: number, textureName: string) {
        this.textureName = textureName
        this.sprite = PIXI.Sprite.fromImage(textureName)
        this.sprite.x = x
        this.sprite.y = y
        this.sprite.width = width
        this.sprite.height = height

        Game.getInstance().propContainer.addChild(this.sprite)
    }
}