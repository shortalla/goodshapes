import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsHeaderComponent } from './header.component';
import { GsHeadlineBannerComponent } from './headline-banner.component';
import { GsUniqueSellingPointsComponent } from './unique-selling-points.component';

import { GsButtonModule } from '../../shared/button/button.module';


@NgModule({
    declarations: [
        GsHeaderComponent,
        GsHeadlineBannerComponent,
        GsUniqueSellingPointsComponent,
    ],
    providers: [],
    bootstrap: [
    	GsHeaderComponent,
        GsHeadlineBannerComponent,
        GsUniqueSellingPointsComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        GsButtonModule,
        CommonModule,
    ],
    exports: [
    	GsHeaderComponent,
    ]
})

export class GsHeaderModule { }

