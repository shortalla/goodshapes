import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsListItemComponent } from './list-item.component';
import { GsListComponent } from './list.component';
import { GsUspItemComponent } from './usp-item.component';
import { GsUniqueSellingPointsComponent } from './unique-selling-points.component';


@NgModule({
    declarations: [
        GsListItemComponent,
        GsListComponent,
        GsUspItemComponent,
        GsUniqueSellingPointsComponent,
    ],
    providers: [],
    bootstrap: [
        GsListItemComponent,
        GsListComponent,
        GsUspItemComponent,
        GsUniqueSellingPointsComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        GsListItemComponent,
        GsListComponent,
        GsUspItemComponent,
        GsUniqueSellingPointsComponent,
    ]
})
export class GsListModule { }

