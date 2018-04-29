
/**
 * Model for a quote by a Goodshapes customer
 */
export class QuoteModel {
	/* 
	 *  The quoted text
	 */
    public quote: string;

    /* 
	 *  The person who gave the quote
	 */
    public source: string;

    /**
     *  The url of the image
     */
    public imageUrl: string;
}