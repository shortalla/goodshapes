import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsNutritionComponent } from './nutrition.component';
import { GsVideoComponent } from './video.component';

import { GsSectionModule } from '../../shared/section/section.module';
import { GsButtonModule } from '../../shared/button/button.module';
import { GsListModule } from '../../shared/list/list.module';


@NgModule({
    declarations: [
        GsNutritionComponent,
        GsVideoComponent,
    ],
    providers: [],
    bootstrap: [
        GsNutritionComponent,
        GsVideoComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule,
        GsSectionModule,
        GsButtonModule,
        GsListModule,
    ],
    exports: [
        GsNutritionComponent,
    ]
})

export class GsNutritionModule { }

