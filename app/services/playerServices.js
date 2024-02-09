import { AppState } from "../AppState.js";
import { Player } from "../models/player.js";

// NOTE we should only change data in the appstate in our service

class playerService {
    increaseScore(playerName) {
        const players = AppState.players
        const foundPlayer = players.find(player => player.name == playerName)
        foundPlayer.score++
        AppState.emit("players")
    }
    
    decreaseScore(playerName) {
        const players = AppState.players
        const foundPlayer = players.find(player => player.name == playerName)
        foundPlayer.score--
        AppState.emit("players")
    }
    
    addNewPlayer(playerName) {
        const players = AppState.players
        players.push(new Player(playerName)) 
    }
}

// NOTE creates a single instance of our service and exports that to other modules
export const playerServices = new playerService()