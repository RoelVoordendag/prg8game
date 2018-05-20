import * as PIXI from "pixi.js"
import Map from "./Map"
import Player from "./Characters/Player"

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
  public player!: Player;
  public keyState:any[] = []

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
        .add('grasstiles', 'res/grasstiles.json')
        .load()
        PIXI.loader.onComplete.add(() => {this.setup();});   
  }

  private setup () {

    this.map.build();
    this.player = new Player(10, 10)
    this.map.addPlayer(this.player)

    //player movement listeners
    window.addEventListener('keydown', function(e){
      Game.getInstance().keyState[e.keyCode || e.which] = true;
    }, true)
    window.addEventListener('keyup', function(e){
      Game.getInstance().keyState[e.keyCode || e.which] = false;
    }, true)


    requestAnimationFrame(() => this.gameLoop());
  }
  
  private gameLoop():void {
    //update all the map elements
    this.map.update()
    //send keystate to player for movement
    this.player.keyPressed(this.keyState);


    requestAnimationFrame(() => this.gameLoop());
  }
}

window.addEventListener("load", () => {
  Game.getInstance();
})