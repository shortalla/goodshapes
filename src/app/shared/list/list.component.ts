import { Component, Input } from '@angular/core';
import { ListItemModel } from '../../model/list/list-item';

@Component({
	selector: 'gs-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})

/**
 *  A component that displays a given list
 *  of items
 */
export class GsListComponent {
	@Input() list: ListItemModel[];
}
