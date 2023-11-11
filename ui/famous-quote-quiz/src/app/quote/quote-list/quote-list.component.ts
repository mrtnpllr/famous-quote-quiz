import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { QuoteService } from "../quote.service";
import { Subscription } from "rxjs";
import { Quote } from "../models/quote.model";

@Component({
    selector: "quote-list",
    templateUrl: "./quote-list.component.html",
    styleUrls: ["./quote-list.component.scss"]
})

export class QuoteListComponent implements OnInit {
   
    @Output() updateEmitter = new EventEmitter();
    quotes?: Quote[];
    deleteQuoteSubscription?: Subscription;
    quoteSubscription?: Subscription;

    constructor(private quoteService : QuoteService) {}
    
    ngOnInit(): void {
        this.quoteSubscription = this.quoteService.getQuotes()
        .subscribe({
            next: (result) => {
                console.log(result)
                this.quotes = result;
            }
        })
    }

    //TODO empty string as class?
    // getClasses(expense: Expense) {
    //     return this.openedExpenses.indexOf(expense) === -1 ? "hidden" : "";
    // }

    deleteQuote(id: number) {
        this.deleteQuoteSubscription = this.quoteService.deleteQuote(id)
        .subscribe({
            next: (result) => {
                console.log("deleted: ", result);
                this.updateEmitter.emit();
            }
        })
    }

    refresh() {
        this.updateEmitter.emit();
    }

    ngOnDestroy(): void {
        this.deleteQuoteSubscription?.unsubscribe();
        this.quoteSubscription?.unsubscribe();
    }
}