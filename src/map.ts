import Game from "./Game"
import Tile from "./Tile"
import Player from './Characters/Player'


export default class Map {
    private static height = 256;
    private static width = 256;
    private static tileSize = 64;

    public tiles: Array<Tile> = new Array;
    public playerCharacters: Array<Player> = new Array;

    build(){

        let map = 
            [
                [16, 16, 16, 16, 16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16], 
                [16, 16, 8, 4, 12, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16], 
                [16, 16, 6, 1, 11, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16], 
                [16, 16, 14, 13, 15, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 16, 16, 16, 8, 2, 11, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 8, 4, 4, 2, 1, 11, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 9, 13, 13, 13, 15, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 3, 12, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 1, 11, 16, 16, 16, 16, 16, 8, 4, 4], 
                [16, 16, 16, 16, 6, 1, 11, 16, 16, 16, 16, 16, 6, 1, 1], 
                [16, 16, 16, 16, 6, 1, 11, 16, 16, 16, 16, 16, 6, 1, 1]
            ]

        let rows = map.length
        let cols = map[0].length

        //render row by row
        //loop through rows
        for (let i=0; i < rows; i++) {
            let posY = i*Map.tileSize
            //in each row, render col
            for (let o=0; o < cols; o++){
                let posX = o*Map.tileSize
                this.setTile(posX, posY, JSON.stringify(map[i][o]))
            }
        }    
    }

    setTile(x: number, y: number, texture: string) {
        this.tiles.push(new Tile(x, y, texture, Map.tileSize))
    }

    addPlayer(playerCharacter: Player){
        this.playerCharacters.push(playerCharacter)
    }

    update () {
        for (const playerCharacter of this.playerCharacters) {
            playerCharacter.update()
        }
    }


}