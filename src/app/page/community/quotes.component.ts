import { Component } from '@angular/core';
import { QUOTES_LIST } from '../../data/lists';

@Component({
	selector: 'gs-quotes',
	templateUrl: './quotes.component.html',
	styleUrls: ['./quotes.component.scss']
})

/**
* Outputs the list of quotes on the landing page.
*/
export class GsQuotesComponent {
	quotes = QUOTES_LIST;
}
