import { Component, Input } from '@angular/core';
import { ListItemModel } from '../../model/list/list-item';

@Component({
	selector: 'gs-list-item',
	templateUrl: './list-item.component.html',
	styleUrls: ['./list-item.component.scss']
})

/**
 *  A component that displays a given item
 *  from a list.
 *
 *  The item includes an icon, a text and
 *  an optional heading
 */
export class GsListItemComponent {
	@Input() item: ListItemModel;
}
