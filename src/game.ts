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
    let app = new PIXI.Application(window.innerWidth - 10, window.innerHeight - 10, {
      backgroundColor: 0x000000,
      resolution: window.devicePixelRatio,
      autoResize: true,
      forceCanvas: true
    });

    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;
    app.renderer.resize(window.innerWidth, window.innerHeight);
    
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

    document.body.appendChild(this.app.view);

    this.gameLoop()
  }
  
  private gameLoop():void{
    
    requestAnimationFrame(() => this.gameLoop());
  }
}

window.addEventListener("load", () => {
  Game.getInstance();
})