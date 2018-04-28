import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GsInputComponent } from './input.component';


@NgModule({
    declarations: [
        GsInputComponent,
    ],
    providers: [],
    bootstrap: [
    	GsInputComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
    	GsInputComponent,
    ]
})

export class GsInputModule { }

