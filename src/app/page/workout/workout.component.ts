import { Component } from '@angular/core';
import { SectionDataModel } from '../../model/section/section-data';
import { WORKOUT_DATA } from '../../data/data';

@Component({
	selector: 'gs-workout',
	templateUrl: './workout.component.html',
	styleUrls: ['./workout.component.scss']
})

export class GsWorkoutComponent {
	private data: SectionDataModel = WORKOUT_DATA;
}
