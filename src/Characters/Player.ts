import Character from './Character'
import Game from '../Game'

export default class Player extends Character{    

  constructor(x: number, y: number){
    super(x, y, '1')
    this.x = x
    this.y = y
    //A lot of sprite animation setup going on here
    //This is to define the animation frames for every action
    //Quite a mess, will look for better way to do this


    //Put walking up frames in array
    for(var i = 1; i<= 3; i++) {
      var Temp_Frame = {
        texture: PIXI.loader.resources.walking.textures!['walking'+i],
        time: 200
      }
      this.upFrames.push(Temp_Frame)
    }
    var Temp_Frame = {
        texture: PIXI.loader.resources.walking.textures!['walking2'],
        time: 200
    }
    this.upFrames.push(Temp_Frame)

    //Put walking down frames in array
    for(var i = 7; i<= 9; i++) {
      var Temp_Frame = {
        texture: PIXI.loader.resources.walking.textures!['walking'+i],
        time: 200
      }
      this.downFrames.push(Temp_Frame)
    }
    var Temp_Frame = {
        texture: PIXI.loader.resources.walking.textures!['walking8'],
        time: 200
    }
    this.downFrames.push(Temp_Frame)

    //Put walking left frames in array
    for(var i = 10; i<= 12; i++) {
      var Temp_Frame = {
        texture: PIXI.loader.resources.walking.textures!['walking'+i],
        time: 200
      }
      this.leftFrames.push(Temp_Frame)
    }
    var Temp_Frame = {
        texture: PIXI.loader.resources.walking.textures!['walking11'],
        time: 200
    }
    this.leftFrames.push(Temp_Frame)

    //Put walking right frames in array
    for(var i = 4; i<= 6; i++) {
      var Temp_Frame = {
        texture: PIXI.loader.resources.walking.textures!['walking'+i],
        time: 200
      }
      this.rightFrames.push(Temp_Frame)
    }
    var Temp_Frame = {
        texture: PIXI.loader.resources.walking.textures!['walking5'],
        time: 200
    }
    this.rightFrames.push(Temp_Frame)
  }

  //Handle keypress events. fist move, then play animation 
  //if it wasnt animated in that direction already
  keyPressed(keyState: any){
    if (keyState[87]) { //w - up
        this.move(0, -this.speed)
        if(this.playingAnimation !== "up") {
          this.playingAnimation = "up"
          this.sprite.textures = this.upFrames
          this.sprite.play()
        }  
      }
    else if (keyState[65]) { //a - left
        this.move(-this.speed, 0)
        if(this.playingAnimation !== "left") {
          this.playingAnimation = "left"
          this.sprite.textures = this.leftFrames
          this.sprite.play()
        }
      }
    else if (keyState[83]) { //s - down
        this.move(0, this.speed)
        if(this.playingAnimation !== "down") {
          this.playingAnimation = "down"
          this.sprite.textures = this.downFrames
          this.sprite.play()
        }
      }
    else if (keyState[68]) { //d - right
        this.move(this.speed, 0)
        if(this.playingAnimation !== "right") {
          this.playingAnimation = "right"
          this.sprite.textures = this.rightFrames
          this.sprite.play()
        }
    } else {
      //When there is no keypress, no walking animation
      this.sprite.stop()
    }
  }
}