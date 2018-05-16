import * as PIXI from "pixi.js";

class Game {
  //singleton function 
  static instance: Game;

  static getInstance(): Game {
    if (!Game.instance) { 
      Game.instance = new Game();
    }
    return Game.instance;
  }

  public pixi: PIXI.Application;

  private constructor() {
    
    //making the canvas black and setting the canvas full screen
    this.pixi = new PIXI.Application(innerWidth, innerHeight, {
      backgroundColor: 0x000000,
      resolution: window.devicePixelRatio,
      autoResize: true
    });
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

    document.body.appendChild(this.pixi.view);

    this.gameLoop()
  }
  
  private gameLoop():void{
    
    requestAnimationFrame(() => this.gameLoop());
  }
}

window.addEventListener("load", () => {
  Game.getInstance();
})