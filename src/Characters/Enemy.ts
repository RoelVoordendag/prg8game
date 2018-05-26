import Character from "./Character"

export default class Enemy extends Character{
    
    private randomDirection:number

    constructor(x:number , y:number){
        super(x , y , '1');
        this.x = x
        this.y = y
        this.randomDirection = 0
        //start random number generator
        setTimeout(() => this.randomDirectionGenerator(), 1000 )
    }  
    moveEnemy(){
        //random number determines which direction the player goes to
        if(this.randomDirection <= 250){
            // rigth
            this.move(this.speed , 0)            
        }else if(this.randomDirection <=500 && this.randomDirection >= 250){
            // left
            this.move(-this.speed , 0)  
        }else if(this.randomDirection <=750 && this.randomDirection >= 500){
            //up
            this.move(0 , -this.speed)    
             
        }else if(this.randomDirection <=1000 && this.randomDirection >= 750){
            //down
            this.move(0 , this.speed)     
        }
        //checking if enemy is not leaving the field
        if(this.x == window.innerWidth){
            this.move(this.speed , 0);
        }else if(this.x == 0){
            this.move(this.speed , 0)
        }else if(this.y == window.innerHeight){
            this.move(0 , -this.speed)
        }else if(this.y == 0){
            this.move(0 , this.speed)
        }

    }
    randomDirectionGenerator(){
        //with the random generatad number the enemy goes a certain with what will not be predictable
        this.randomDirection =  Math.floor((Math.random() * 1000) + 1);
        console.log(this.randomDirection);

        this.moveEnemy()
        //to keep generating random numbers
        setTimeout(() => this.randomDirectionGenerator(), 1000 )
    }
}