import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsEmailInputComponent } from './email-input.component';


@NgModule({
    declarations: [
        GsEmailInputComponent,
    ],
    providers: [],
    bootstrap: [
    	GsEmailInputComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule
    ],
    exports: [
    	GsEmailInputComponent,
    ]
})

export class GsInputModule { }

