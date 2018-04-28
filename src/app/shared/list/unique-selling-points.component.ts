import { Component, Input } from '@angular/core';
import { ListItemModel } from '../../model/list/list-item';

@Component({
	selector: 'gs-unique-selling-points',
	templateUrl: './unique-selling-points.component.html',
	styleUrls: ['./unique-selling-points.component.scss'],
})

/**
 *  A component that displays a given list of USPs
 */
export class GsUniqueSellingPointsComponent { 
	@Input() list: ListItemModel[];
}
