import { Author } from "./author.model"

export interface QuoteRequest {
    text : string,
    //authorId: number
    author?: Author
}