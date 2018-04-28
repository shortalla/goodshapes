import { Component } from '@angular/core';
import { NUTRITION_LIST } from '../../data/lists';

@Component({
	selector: 'gs-nutrition',
	templateUrl: './nutrition.component.html',
	styleUrls: ['./nutrition.component.scss']
})

export class GsNutritionComponent {
	nutrition = NUTRITION_LIST;
}
