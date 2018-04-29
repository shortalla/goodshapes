import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from './nav.service';
import { RegisterService } from './register.service';

@NgModule({
    declarations: [],
    providers: [
        NavService,
        RegisterService,
    ],
    bootstrap: [],
    imports: [
        CommonModule,
    ],
    exports: [
        NavService,
        RegisterService,
    ]
})

export class GsServicesModule { }

