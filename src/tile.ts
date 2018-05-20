import Game from './Game'
import Map from './Map'
import { Rectangle } from 'pixi.js'

export default class Tile {
    public x: number;
    public y: number;
    public textureName: string;
    private sprite: PIXI.Sprite;

    constructor(x: number, y: number, textureName: string, zoomedTileSize: number){
        this.x = x;
        this.y = y;
        this.textureName = textureName;
        this.sprite = new PIXI.Sprite(
            PIXI.loader.resources["grasstiles"].textures![textureName]
        )
        this.sprite.width = zoomedTileSize;
        this.sprite.height = zoomedTileSize;
        this.sprite.x = x;
        this.sprite.y = y;

        Game.getInstance().pixi.stage.addChild(this.sprite);
    }
}