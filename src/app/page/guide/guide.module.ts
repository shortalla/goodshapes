import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsGuideComponent } from './guide.component';

import { GsListModule } from '../../shared/list/list.module';
import { GsButtonModule } from '../../shared/button/button.module';

@NgModule({
    declarations: [
        GsGuideComponent,
    ],
    providers: [],
    bootstrap: [
        GsGuideComponent,
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
    ]
})

export class GsGuideModule { }

