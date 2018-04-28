import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsWorkoutComponent } from './workout.component';
import { GsPhotoDividerComponent } from './photo-divider.component';

import { GsListModule } from '../../shared/list/list.module';

@NgModule({
    declarations: [
        GsWorkoutComponent,
        GsPhotoDividerComponent,
    ],
    providers: [],
    bootstrap: [
        GsWorkoutComponent,
        GsPhotoDividerComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    imports: [
        GsListModule,
        CommonModule,
    ],
    exports: [
        GsWorkoutComponent,
    ],
})
export class GsWorkoutModule { }

