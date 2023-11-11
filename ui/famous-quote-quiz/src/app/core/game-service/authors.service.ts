import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Author } from "src/app/quote/models/author.model";

@Injectable({
    providedIn: 'root'
})

export class AuthorService {    
    constructor(private http : HttpClient) {
    }

    addAuthors(author: Author) : Observable<Author> {
        return this.http.post<Author>(`${environment.apiBaseUrl}/api/authors`, author);
    }

    getAuthors() : Observable<Author[]> {
        return this.http.get<Author[]>(`${environment.apiBaseUrl}/api/authors`);
    }

    getAuthorById(id: number | null) : Observable<Author> {
        return this.http.get<Author>(`${environment.apiBaseUrl}/api/authors/${id}`);
    }
    
    updateAuthor(id: number, author: Author) : Observable<Author> {
        return this.http.put<Author>(`${environment.apiBaseUrl}/api/authors/${id}`, author)
    }

    deleteAuthor(id: number) : Observable<Author> {
        return this.http.delete<Author>(`${environment.apiBaseUrl}/api/authors/${id}`);
    }
}