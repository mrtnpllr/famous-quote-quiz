import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Subscription, forkJoin } from "rxjs";
import { Author } from "src/app/quote/models/author.model";
import { Quote } from "src/app/quote/models/quote.model";
import { QuoteService } from "src/app/quote/quote.service";
import { AuthorService } from "./authors.service";

@Injectable({
    providedIn: 'root'
})

export class GameService implements OnDestroy {    
    gameMode: "multiple" | "binary" = "multiple";
    quotes?: Quote[];
    allAuthors?: Author[];
    selectedRandomAuthors?: Author[] = [];
    currentQuote?: Quote;
    quotesSubscription?: Subscription;
    authorSubscription?: Subscription;

    constructor(private quoteService : QuoteService, private authorService: AuthorService) {
        this.init();
    }

    init() {
        const observable = forkJoin({
            quotes: this.quoteService.getQuotes(),
            authors: this.authorService.getAuthors()
          });
          observable.subscribe({
           next: (value) => {
            this.quotes = value.quotes;
            this.allAuthors = value.authors;
           },
           complete: () => {
            this.newGame()
           }
          });
    }
    
    newGame() {
        //TODO error handling, might be undefind
        if(this.quotes) {
            this.currentQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        }

        this.createAuthorsArray(3);
    }

    //TODO separate into multiple functions
    createAuthorsArray(numberOfSelections: number) {
        let uniqueAuthors = this.allAuthors?.filter(this.onlyUnique);
        if(!!uniqueAuthors && uniqueAuthors.length < 3) {
            throw Error("not enough authors to start a game");
        }
        //clear array
        this.selectedRandomAuthors = [];
        
        this.selectedRandomAuthors?.push(this.currentQuote?.author!);
        while(this.selectedRandomAuthors?.length < numberOfSelections) {
            let author = uniqueAuthors![Math.floor(Math.random() * uniqueAuthors!.length)]
            if(author.authorId !== this.currentQuote?.author!.authorId && 
                this.selectedRandomAuthors.indexOf(author) === -1) {
                this.selectedRandomAuthors?.push(author);
            }
        }

        this.selectedRandomAuthors = this.shuffle(this.selectedRandomAuthors);
    }

    shuffle (array:any[]) { 
        return array.sort(() => Math.random() - 0.5); 
    }; 

    validateAnswer(answer: Author) {
        return this.currentQuote?.author === answer;
    }

    onlyUnique(value: any, index: any, array: any) {
        return array.indexOf(value) === index;
    }
      
    ngOnDestroy(): void {
        this.quotesSubscription?.unsubscribe();
        this.authorSubscription?.unsubscribe();
    }
}