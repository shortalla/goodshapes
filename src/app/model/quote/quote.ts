
/**
 * Model for a quote on the landing page .
 */
export class QuoteModel {
    public quote: string;
    public source: string;
    public imageUrl: string;

    constructor(quote: string,
    			source: string,
    			imageUrl: string) {
        this.quote = quote;
        this.source = source;
        this.imageUrl = imageUrl;
    }
}