import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GsFooterComponent } from './footer.component';

import { GsInputModule } from '../../shared/input/input.module';
import { GsButtonModule } from '../../shared/button/button.module';


@NgModule({
    declarations: [
        GsFooterComponent,
    ],
    providers: [],
    bootstrap: [
    	GsFooterComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        GsInputModule,
        GsButtonModule,
    ],
    exports: [
    	GsFooterComponent,
    ]
})

export class GsFooterModule { }

