import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from '../../shared/services/nav.service';

import { GsHeaderComponent } from './header.component';
import { GsHeadlineBannerComponent } from './headline-banner.component';
import { GsGuideAdBannerComponent } from './guide-ad-banner.component';

import { GsButtonModule } from '../../shared/button/button.module';
import { GsListModule } from '../../shared/list/list.module';


@NgModule({
    declarations: [
        GsHeaderComponent,
        GsHeadlineBannerComponent,
        GsGuideAdBannerComponent,
    ],
    providers: [
        NavService,
    ],
    bootstrap: [
    	GsHeaderComponent,
        GsHeadlineBannerComponent,
        GsGuideAdBannerComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        GsButtonModule,
        GsListModule,
        CommonModule,
    ],
    exports: [
    	GsHeaderComponent,
    ]
})

export class GsHeaderModule { }

