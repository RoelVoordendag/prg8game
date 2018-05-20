import Game from '../Game'

export default class Character {
    protected x = 0
    protected y = 0
    protected vx = 0
    protected vy = 0
    protected speed = 8
    protected sprite: PIXI.Sprite

    constructor(x: number, y: number, textureName: string) {
      this.sprite = new PIXI.Sprite (
        PIXI.loader.resources["grasstiles"].textures![textureName]
      )

      this.sprite.x = x
      this.sprite.y = y
      this.sprite.width = 64
      this.sprite.height = 64


      Game.getInstance().pixi.stage.addChild(this.sprite)
    }

    update () {
        this.sprite.x = this.x
        this.sprite.y = this.y
    }

    move(vx: number, vy:number) {
        this.x += vx
        this.y += vy
        
    }
}