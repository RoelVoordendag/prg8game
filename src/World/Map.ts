//This is where the world gets rendered
import Game from "../Game"
import Tile from "./Tile"
import Player from '../Characters/Player'
import Collidable from '../World/Objects/Collidable'
import Tree from '../World/Objects/Tree'
import Tent from '../World/Objects/Tent'
import Prop from '../World/Objects/Prop'


export default class Map {
    private static tileSize = 64
    public tiles: Array<Tile> = new Array
    public playerCharacters: Array<Player> = new Array
    public collidables: Array<Collidable> = new Array
    public props: Array<Prop> = new Array

    //Called in Game.ts to make the map
    build(){
        //Array storing all tiles in the map
        let map = 
            [
                [16, 16, 16, 16, 16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 16, 16, 16, 8, 2, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 8, 4, 4, 2, 1, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 9, 13, 13, 13, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 3, 12, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 1, 11, 16, 16, 16, 16, 16, 8, 4, 4, 12, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 1, 11, 16, 16, 16, 16, 16, 6, 1, 1, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], 
                [16, 16, 16, 16, 6, 1, 11, 16, 16, 16, 16, 16, 6, 1, 1, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
            ]

        let rows = map.length
        let cols = map[0].length

        //Render row by row
        //Loop through rows
        for (let i=0; i < rows; i++) {
            let posY = i*Map.tileSize
            //In each row, render col
            for (let o=0; o < cols; o++){
                let posX = o*Map.tileSize
                //Call setTile with position and what tile it should be
                this.setTile(posX, posY, JSON.stringify(map[i][o]))
            }
        }   

        //Make collidable objects
        this.collidables.push(new Tree(-100, -100, (4*Map.tileSize), (4*Map.tileSize), "tree"))
        this.collidables.push(new Tree(200, -100, (4*Map.tileSize), (4*Map.tileSize), "tree"))
        this.collidables.push(new Tree(80, 10, (4*Map.tileSize), (4*Map.tileSize), "tree"))
        this.collidables.push(new Tree(-50, 100, (4*Map.tileSize), (4*Map.tileSize), "tree"))
        this.collidables.push(new Tree(-100, 250, (4*Map.tileSize), (4*Map.tileSize), "tree"))       
        this.collidables.push(new Tent(300, 150, (2*Map.tileSize), (3*Map.tileSize), "tent"))
        this.collidables.push(new Tent(120, 350, (2*Map.tileSize), (3*Map.tileSize), "tent2"))

        //Make props
        this.props.push(new Prop(500, 500, (3*Map.tileSize), (3*Map.tileSize), "campfire"))
    }

    //Make a new tile and push it to the tile array
    setTile(x: number, y: number, texture: string) {
        this.tiles.push(new Tile(x, y, texture, Map.tileSize))
    }

    //Make a new player and push it to the playerCharacters array
    addPlayer(playerCharacter: any){
        this.playerCharacters.push(playerCharacter)
    }

    //Update everything that should move (player, npc, mob)
    update () {
        for (const playerCharacter of this.playerCharacters) {
            playerCharacter.update()            
        }
    }


}