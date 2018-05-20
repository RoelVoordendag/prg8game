import Game from '../Game'

export default class Character {
    protected x = 0
    protected y = 0
    protected vx = 0
    protected vy = 0
    protected speed = 8
    protected sprite: PIXI.Sprite
    protected Temp_Frameset: any = []

    constructor(x: number, y: number, textureName: string) {

      //animation setup mby?
      var Temp_Frame = {
        texture: PIXI.loader.resources.walking.textures!['walking8'],
        time: 200
      }
      this.Temp_Frameset.push(Temp_Frame)

      this.sprite = new PIXI.extras.AnimatedSprite (
        this.Temp_Frameset
      )

      this.sprite.x = x
      this.sprite.y = y
      this.sprite.width = 64
      this.sprite.height = 64

      Game.getInstance().characterContainer.addChild(this.sprite)
    }

    update () {
        this.sprite.x = this.x
        this.sprite.y = this.y
    }

    move(vx: number, vy:number) {
        let colliders = Game.getInstance().map.collidables
        let willCollide = false

        for(const collider of colliders) {
            if (collider.isColliding(this.x + vx, this.y + vy)) {
                willCollide = true
                break
            }
        }

        if (!willCollide) {
            this.x += vx
            this.y += vy
        }        
    }
}