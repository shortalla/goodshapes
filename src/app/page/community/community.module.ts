import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsCommunityComponent } from './community.component';
import { GsQuotesComponent } from './quotes.component';

import { GsListModule } from '../../shared/list/list.module';
import { GsSectionModule } from '../../shared/section/section.module';


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
        GsListModule,
        GsSectionModule,
    ],
    exports: [
        GsCommunityComponent
    ],
})

export class GsCommunityModule { }