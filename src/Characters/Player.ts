import Character from './Character'

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

}