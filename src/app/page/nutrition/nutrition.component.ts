import { Component } from '@angular/core';
import { SectionDataModel } from '../../model/section/section-data';
import { NUTRITION_DATA } from '../../data/data';

@Component({
	selector: 'gs-nutrition',
	templateUrl: './nutrition.component.html',
	styleUrls: ['./nutrition.component.scss']
})

export class GsNutritionComponent {
	private data: SectionDataModel = NUTRITION_DATA;
}
