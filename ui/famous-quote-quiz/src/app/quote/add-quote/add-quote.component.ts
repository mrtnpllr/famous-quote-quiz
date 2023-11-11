import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { QuoteService } from "../quote.service";
import { QuoteRequest } from "../models/quote-request.model";

@Component({
    selector: "add-quote",
    templateUrl: "./add-quote.component.html",
    styleUrls: ["./add-quote.component.scss"]
})
export class AddQuoteComponent {
    addQuoteSubscription?: Subscription;
    quote: QuoteRequest = {text: 'default', author: {name: 'Author Name'}};

    constructor(private quoteService: QuoteService){}

    onFormSubmit() {
        this.addQuoteSubscription = this.quoteService.addQuote(this.quote)
        .subscribe({
            next: (response) => {
                console.log(response);
            }
        })
    }
}