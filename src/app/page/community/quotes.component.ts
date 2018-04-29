import { Component } from '@angular/core';
import { QUOTES_DATA } from '../../data/data';
import { QuoteModel } from '../../model/quote/quote';

@Component({
	selector: 'gs-quotes',
	templateUrl: './quotes.component.html',
	styleUrls: ['./quotes.component.scss']
})

/**
* Outputs the list of quotes on the landing page.
*/
export class GsQuotesComponent {
	private quotesList: QuoteModel[] = QUOTES_DATA;
}
