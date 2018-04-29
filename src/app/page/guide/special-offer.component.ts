import { Component } from '@angular/core';
import { PriceModel } from '../../model/price/price';
import { PRICE_DATA } from '../../data/data';

@Component({
	selector: 'gs-special-offer',
	templateUrl: './special-offer.component.html',
	styleUrls: ['./special-offer.component.scss']
})

export class GsSpecialOfferComponent { 
	private data: PriceModel = PRICE_DATA;
}
