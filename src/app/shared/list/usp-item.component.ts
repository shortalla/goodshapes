import { Component, Input } from '@angular/core';
import { ListItemModel } from '../../model/list/list-item';

@Component({
	selector: 'gs-usp-item',
	templateUrl: './usp-item.component.html',
	styleUrls: ['./usp-item.component.scss']
})

/**
 *  A component that displays a USP
 *
 *  The item includes an icon and a text.
 */
export class GsUspItemComponent {
	@Input() item: ListItemModel;
}
