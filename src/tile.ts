import Game from './game'

export default class Tile {
    public x: number;
    public y: number;
    public textureName: string;
    private sprite: PIXI.Sprite;

    constructor(x: number, y: number, textureName: string){
        this.x = x;
        this.y = y;
        this.textureName = textureName;
        this.sprite = new PIXI.Sprite(
                        PIXI.loader.resources["res/"+textureName+".png"].texture
                    );
        this.sprite.x = x;
        this.sprite.y = y;

        Game.getInstance().pixi.stage.addChild(this.sprite);
    }
}