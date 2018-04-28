import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsCommunityComponent } from './community.component';
import { GsQuotesComponent } from './quotes.component';


@NgModule({
    declarations: [
        GsCommunityComponent,
        GsQuotesComponent,
    ],
    providers: [],
    bootstrap: [
        GsCommunityComponent,
        GsQuotesComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        GsCommunityComponent
    ],
})

export class GsCommunityModule { }