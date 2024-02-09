import { AppState } from "../AppState.js"
import { playerServices } from "../services/playerServices.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class PlayersController {
    constructor() {
        //REVIEW - taking user input and new players can be added to the game
        console.log("Players have been loaded!")
        this.drawPlayers()
        AppState.on("players", this.drawPlayers)
    }
    
    createPlayer() {
        Pop.confirm("Add New Player")
    }
    
    drawPlayers() {
        console.log("New Player Added!")
        const players = AppState.players
        console.log(players)
        
        let html = ''
        
        players.forEach(player => {
            html += player.PlayerTemplateCard
        })
        
        setHTML('players', html)
      
    }
    
    addPlayer(){
        event.preventDefault()
        const form = event.target
        const playerName = form.playerName.value
        console.log('new player', playerName)
        //TODO pass name to service
        playerServices.addNewPlayer(playerName)
       // this.drawPlayers()
    }
    
    increasePoint(playerName) {
        console.log('Increasing player score', playerName)
        playerServices.increaseScore(playerName)
        //this.drawPlayers()
    }
    
    decreasePoint(playerName) {
        console.log('Descreasing player score', playerName)
        playerServices.decreaseScore(playerName)
        //this.drawPlayers()
    }
}