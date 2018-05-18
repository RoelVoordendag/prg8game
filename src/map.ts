import Game from "./game"
import Tile from "./tile"


export default class Map {
    private static height = 64;
    private static width = 64;
    private static tileSize = 16;

    public tiles: Array<Tile> = new Array;

    build(){
        let mapArray: Array<string> = [
            "x", "x", "x", "x",
            "x", "x", "x", "x",
            "x", "x", "x", "x",
            "x", "x", "x", "x"
        ]

        // for(let i = 0; i < mapArray.length; i++) {
        //     switch (mapArray[i]) {
        //         case "x":
        //             console.log("x")

        //             let testSprite = new PIXI.Sprite(
        //                 PIXI.loader.resources["res/imgGround.png"].texture
        //             );
        //             this.Game.getInstance().pixi.stage.addChild(testSprite)
        //     }
        // }

        for (let x = 0; x < Map.width; x+Map.tileSize) {
            for (let y = 0; y < Map.height; y+Map.tileSize){
                this.setTile(x, y, mapArray[y/Map.tileSize])
            }
        }
    }

    setTile(x: number, y: number, texture: string) {
        this.tiles.push(new Tile(x, y, texture))
    }


}