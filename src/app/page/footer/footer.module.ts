import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterService } from '../../shared/services/register.service';

import { GsFooterComponent } from './footer.component';
import { GsInfoComponent } from './info.component';
import { GsSignUpComponent } from './sign-up.component';

import { GsInputModule } from '../../shared/input/input.module';
import { GsButtonModule } from '../../shared/button/button.module';


@NgModule({
    declarations: [
        GsFooterComponent,
        GsInfoComponent,
        GsSignUpComponent,
    ],
    providers: [
        RegisterService,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
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

