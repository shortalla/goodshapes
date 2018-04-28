import { Component, Input } from '@angular/core';
import { ListItemModel } from '../../model/list/list-item';

@Component({
	selector: 'gs-list-item',
	templateUrl: './list-item.component.html',
	styleUrls: ['./list-item.component.scss']
})

export class GsListItemComponent {
	@Input() item: ListItemModel;
}
