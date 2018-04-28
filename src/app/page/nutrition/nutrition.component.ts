import { Component } from '@angular/core';
import { ListItemModel } from '../../model/list/list-item';
import { NUTRITION_LIST } from '../../data/lists';

@Component({
	selector: 'gs-nutrition',
	templateUrl: './nutrition.component.html',
	styleUrls: ['./nutrition.component.scss']
})

export class GsNutritionComponent {
	private nutritionList: ListItemModel[] = NUTRITION_LIST;
}
