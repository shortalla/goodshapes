import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GsSectionHeadingComponent } from './section-heading.component';


@NgModule({
    declarations: [
        GsSectionHeadingComponent,
    ],
    providers: [],
    bootstrap: [
    	GsSectionHeadingComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
    	GsSectionHeadingComponent,
    ]
})

export class GsSectionModule { }

