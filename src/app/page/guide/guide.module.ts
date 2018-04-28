import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsGuideComponent } from './guide.component';
import { GsSpecialOfferComponent } from './special-offer.component';

import { GsListModule } from '../../shared/list/list.module';
import { GsButtonModule } from '../../shared/button/button.module';

@NgModule({
    declarations: [
        GsGuideComponent,
        GsSpecialOfferComponent,
    ],
    providers: [],
    bootstrap: [
        GsGuideComponent,
        GsSpecialOfferComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        GsListModule,
        CommonModule,
        GsButtonModule,
    ],
    exports: [
        GsGuideComponent,
        GsSpecialOfferComponent,
    ]
})

export class GsGuideModule { }

