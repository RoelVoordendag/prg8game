//A singular tile
import Game from '../Game'
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
        //Create a sprite form the tiles json file (linked to tileset)
        //that has the number given in the big array in Map.ts
        this.sprite = new PIXI.Sprite(
            PIXI.loader.resources["grasstiles"].textures![textureName]
        )
        this.sprite.width = zoomedTileSize;
        this.sprite.height = zoomedTileSize;
        this.sprite.x = x;
        this.sprite.y = y;

        //Tiles belong in the tilecontainer
        Game.getInstance().tileContainer.addChild(this.sprite);
    }
}