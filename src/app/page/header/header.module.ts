import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from '../../shared/services/nav.service';
import { RegisterService } from '../../shared/services/register.service';

import { GsHeaderComponent } from './header.component';
import { GsHeadlineBannerComponent } from './headline-banner.component';
import { GsGuideAdBannerComponent } from './guide-ad-banner.component';

import { GsButtonModule } from '../../shared/button/button.module';
import { GsListModule } from '../../shared/list/list.module';
import { NgStickyDirective } from 'ng-sticky';


@NgModule({
    declarations: [
        GsHeaderComponent,
        GsHeadlineBannerComponent,
        GsGuideAdBannerComponent,
        NgStickyDirective,
    ],
    providers: [
        NavService,
        RegisterService,
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

