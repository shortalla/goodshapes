import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsListItemComponent } from './list-item.component';


@NgModule({
    declarations: [
        GsListItemComponent,
    ],
    providers: [],
    bootstrap: [
        GsListItemComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        GsListItemComponent,
    ]
})
export class GsListModule { }

