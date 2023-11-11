import { Author } from "./author.model"

export interface Quote {
    quoteId: number,
    text : string,
    authorId?: number
    author?: Author
}