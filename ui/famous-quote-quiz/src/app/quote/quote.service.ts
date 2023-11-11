import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { QuoteRequest } from "./models/quote-request.model";
import { Quote } from "./models/quote.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class QuoteService {    
    constructor(private http : HttpClient) {
    }

    addQuote(quote: QuoteRequest) : Observable<Quote> {
        return this.http.post<Quote>(`${environment.apiBaseUrl}/api/quotes`, quote);
    }

    getQuotes() : Observable<Quote[]> {
        return this.http.get<Quote[]>(`${environment.apiBaseUrl}/api/quotes`);
    }

    getQuoteById(id: number | null) : Observable<Quote> {
        return this.http.get<Quote>(`${environment.apiBaseUrl}/api/quotes/${id}`);
    }
    
    updateQuote(id: number, quote: Quote) : Observable<Quote> {
        return this.http.put<Quote>(`${environment.apiBaseUrl}/api/quotes/${id}`, quote)
    }

    deleteQuote(id: number) : Observable<Quote> {
        return this.http.delete<Quote>(`${environment.apiBaseUrl}/api/quotes/${id}`);
    }
}