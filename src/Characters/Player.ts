import Character from './Character'
import Game from '../Game'

export default class Player extends Character{    

    constructor(x: number, y: number){
        super(x, y, '1')
        this.x = x
        this.y = y
    }

    keyPressed(keyState: any){
        if (keyState[87]) { //w
            this.move(0, -this.speed)
          }
          if (keyState[65]) { //a
            this.move(-this.speed, 0)
          }
          if (keyState[83]) { //s
            this.move(0, this.speed)
          }
          if (keyState[68]) { //d
            this.move(this.speed, 0)
          }
    }

    animate(direction: string){
      let Temp_Frameset = []

      if(direction == "forward") {
        var Temp_Frame = {
          texture: PIXI.loader.resources.walking.textures!['walking2'],
          time: 200
        }
        Temp_Frameset.push(Temp_Frame)
        Temp_Frame = {
          texture: PIXI.loader.resources.walking.textures!['walking1'],
          time: 200
        }
        Temp_Frameset.push(Temp_Frame)
        Temp_Frame = {
          texture: PIXI.loader.resources.walking.textures!['walking2'],
          time: 200
        }
        Temp_Frameset.push(Temp_Frame)
        Temp_Frame = {
          texture: PIXI.loader.resources.walking.textures!['walking3'],
          time: 200
        }
        Temp_Frameset.push(Temp_Frame)
      }  
      let TempSprite = new PIXI.extras.AnimatedSprite(Temp_Frameset)

      TempSprite.play()

      TempSprite.scale.set(5, 5)

      Game.getInstance().characterContainer.addChild(TempSprite)
    }

}