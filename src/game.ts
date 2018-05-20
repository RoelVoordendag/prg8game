import * as PIXI from "pixi.js"
import Map from "./Map"

export default class Game {
  //singleton function 
  static instance: Game;

  static getInstance(): Game {
    if (!Game.instance) { 
      Game.instance = new Game();
    }
    return Game.instance;
  }  

  public pixi: PIXI.Application;
  public map: Map;

  private constructor() {

    this.map = new Map();
    
    //Initialise the canvas
    this.pixi = new PIXI.Application(window.innerWidth, window.innerHeight, {
      backgroundColor: 0x000000,
      resolution: window.devicePixelRatio,
      autoResize: true,
      forceCanvas: true
    });

    //Make canvas fullscreen, and auto resize
    this.pixi.renderer.view.style.position = "absolute";
    this.pixi.renderer.view.style.display = "block";
    this.pixi.renderer.autoResize = true;
    this.pixi.renderer.resize(window.innerWidth, window.innerHeight);
    
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

    document.body.appendChild(this.pixi.view);

    //load assets
    PIXI.loader
        .add('x', 'res/x.png')
        .add('d', 'res/d.png')
        .add('grasstiles', 'res/grasstiles.json')
        .load()
        PIXI.loader.onComplete.add(() => {this.map.build();});

    this.gameLoop();    
  }

  // private setup():void {
    
    
  //   Game.getInstance().gameLoop()
  // }
  
  private gameLoop():void {
    
    requestAnimationFrame(() => this.gameLoop());
  }
}

window.addEventListener("load", () => {
  Game.getInstance();
})