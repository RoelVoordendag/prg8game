import * as PIXI from "pixi.js"
import Map from "./World/Map"
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

  public pixi: PIXI.Application
  public map: Map = new Map();
  public player!: Player;
  public keyState:any[] = []
  public tileContainer: PIXI.Container = new PIXI.Container()
  public objectContainer: PIXI.Container = new PIXI.Container()
  public characterContainer: PIXI.Container = new PIXI.Container()
  public propContainer: PIXI.Container = new PIXI.Container()


  private constructor() {    
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

    //add pixi to body
    document.body.appendChild(this.pixi.view);

    //Containers for different view, load order decides z-index
    this.pixi.stage.addChild(this.tileContainer)
    this.pixi.stage.addChild(this.propContainer)
    this.pixi.stage.addChild(this.characterContainer)
    this.pixi.stage.addChild(this.objectContainer)

    //load assets
    PIXI.loader
        .add('grasstiles', 'res/grasstiles.json')
        .add('tree', 'res/tree.png')
        .add('tent', 'res/tent.png')
        .add('tent2', 'res/tent2.png')
        .add('walking', 'res/walking.json')
        .add('campfire', 'res/campfire.png')
        .load()
        //wait for the loader to finish, then initiate setup
        PIXI.loader.onComplete.add(() => {this.setup();});   
  }

  private setup () {
    //build the map, then add a player
    this.map.build()
    this.player = new Player(540, 50)
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