import { Component } from '@angular/core';
import { WORKOUT_LIST } from '../../data/lists';

@Component({
	selector: 'gs-workout',
	templateUrl: './workout.component.html',
	styleUrls: ['./workout.component.scss']
})

export class GsWorkoutComponent {
	workout = WORKOUT_LIST;
}
