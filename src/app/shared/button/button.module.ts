import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from '../services/nav.service';

import { GsButtonComponent } from './button.component';
import { GsMenuButtonComponent } from './menu-button.component';


@NgModule({
    declarations: [
        GsButtonComponent,
        GsMenuButtonComponent,
    ],
    providers: [
        NavService
    ],
    bootstrap: [
    	GsButtonComponent,
        GsMenuButtonComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    imports: [
        CommonModule,
    ],  
    exports: [
    	GsButtonComponent,
        GsMenuButtonComponent,
    ]
})

export class GsButtonModule { }

