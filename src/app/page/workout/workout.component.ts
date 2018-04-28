import { Component } from '@angular/core';
import { ListItemModel } from '../../model/list/list-item';
import { WORKOUT_LIST } from '../../data/lists';

@Component({
	selector: 'gs-workout',
	templateUrl: './workout.component.html',
	styleUrls: ['./workout.component.scss']
})

export class GsWorkoutComponent {
	private workoutList: ListItemModel[] = WORKOUT_LIST;
}
