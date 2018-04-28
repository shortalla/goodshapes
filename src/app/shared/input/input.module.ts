import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsInputComponent } from './input.component';


@NgModule({
    declarations: [
        GsInputComponent,
    ],
    providers: [],
    bootstrap: [
    	GsInputComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule
    ],
    exports: [
    	GsInputComponent,
    ]
})

export class GsInputModule { }

