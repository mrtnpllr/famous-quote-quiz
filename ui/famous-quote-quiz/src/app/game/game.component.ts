import { Component } from "@angular/core";
import { GameService } from "../core/game-service/game.service";
import { Author } from "../quote/models/author.model";

@Component({
    selector: "game",
    templateUrl: "./game.component.html",
    styleUrls: ["./game.component.scss"]
})
export class GameComponent {

    gameCompleted?: boolean = false;
    gameOutcome?: boolean;
    data?: any;
    gameMode?: string | null = localStorage.getItem("gameMode");
    
    constructor(public gameService: GameService){}

    startNewGame(){
        this.gameCompleted = false;
        this.gameService.newGame();
    }

    selectAnswer(author: Author) {
        this.gameOutcome = this.gameService.validateAnswer(author);
        this.gameCompleted = true;
    }

    selectNo(author: Author) {
        // this.gameCompleted = true;
        // this.gameOutcome = !this.gameService.validateAnswer(author);
        this.selectAnswer(author);
        //TODO better way?
        this.gameOutcome = !this.gameOutcome;
    }
}