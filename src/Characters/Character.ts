import Game from '../Game'

//Parent class for all characters (player, npc, mob etc)
export default class Character {
    protected x = 0
    protected y = 0
    protected vx = 0
    protected vy = 0
    protected speed = 4
    protected sprite: PIXI.extras.AnimatedSprite
    protected Temp_Frameset: any = []
    protected upFrames:any = []
    protected downFrames:any = []
    protected leftFrames:any = []
    protected rightFrames:any = []
    protected playingAnimation!:string

    constructor(x: number, y: number, textureName: string) {
      //Initial frame on load
      var Temp_Frame = {
        texture: PIXI.loader.resources.walking.textures!['walking8'],
        time: 200
      }
      this.Temp_Frameset.push(Temp_Frame)
      this.sprite = new PIXI.extras.AnimatedSprite (
        this.Temp_Frameset
      )

      //properties for the sprite
      this.sprite.x = x
      this.sprite.y = y
      this.sprite.width = 64
      this.sprite.height = 64
      this.sprite.play()

      //Characters belong in the character container
      Game.getInstance().characterContainer.addChild(this.sprite)
    }

    update () {
        this.sprite.x = this.x
        this.sprite.y = this.y
    }

    move(vx: number, vy:number) {
        //Get all colliders from map
        let colliders = Game.getInstance().map.collidables
        let willCollide = false

        //Check for collisions
        for(const collider of colliders) {
            if (collider.isColliding(this.x + vx, this.y + vy)) {
                willCollide = true
                break
            }
        }

        //If there is no collision, move!
        if (!willCollide) {
            this.x += vx
            this.y += vy
        }        
    }
}