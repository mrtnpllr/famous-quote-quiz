import { AfterContentInit, AfterViewInit, Component, OnInit } from "@angular/core";
import { GameService } from "../core/game-service/game.service";
import { Quote } from "../quote/models/quote.model";
import { Author } from "../quote/models/author.model";
import { Game } from "../core/game-service/game.model";

@Component({
    selector: "game",
    templateUrl: "./game.component.html",
    styleUrls: ["./game.component.scss"]
})
export class GameComponent implements OnInit {

    gameCompleted?: boolean = false;
    gameOutcome?: boolean;
    data?: any;
    constructor(public gameService: GameService){}
    
    ngOnInit(): void {
      this.gameService.newGame();
    //   console.log("all authors on init: ", this.gameService.allAuthors);
    //   console.log("current Quote on init: ", this.gameService.currentQuote);
    //   console.log("random auth on init: ", this.gameService.selectedRandomAuthors);
    }

    startNewGame(){
        this.gameCompleted = false;
        this.gameService.newGame();
        // console.log("all authors on init: ", this.gameService.allAuthors);
        // console.log("current Quote on init: ", this.gameService.currentQuote);
        // console.log("random auth on init: ", this.gameService.selectedRandomAuthors);
    }

    selectAnswer(author: Author) {
        this.gameCompleted = true;
        this.gameOutcome = this.gameService.validateAnswer(author);
        console.log(this.gameOutcome);
    }
}