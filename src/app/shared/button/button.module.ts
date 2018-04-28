import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GsButtonComponent } from './button.component';
import { GsMenuButtonComponent } from './menu-button.component';


@NgModule({
    declarations: [
        GsButtonComponent,
        GsMenuButtonComponent,
    ],
    providers: [],
    bootstrap: [
    	GsButtonComponent,
        GsMenuButtonComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
    	GsButtonComponent,
        GsMenuButtonComponent,
    ]
})

export class GsButtonModule { }

