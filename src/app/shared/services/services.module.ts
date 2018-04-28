import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from './nav.service';

@NgModule({
    declarations: [],
    providers: [
        NavService,
    ],
    bootstrap: [],
    imports: [
        CommonModule,
    ],
    exports: [
        NavService,
    ]
})

export class GsServicesModule { }

