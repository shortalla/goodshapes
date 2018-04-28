import { BrowserModule } from '@angular/platform-browser';

// Page
import { GsHeaderModule } from './page/header/header.module';
import { GsWorkoutModule } from './page/workout/workout.module';
import { GsNutritionModule } from './page/nutrition/nutrition.module';
import { GsCommunityModule } from './page/community/community.module';
import { GsGuideModule } from './page/guide/guide.module';
import { GsFooterModule } from './page/footer/footer.module';

import { ScrollService } from './shared/scroll/scroll.service';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
        ScrollService,
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        BrowserModule,
        GsHeaderModule,
        GsWorkoutModule,
        GsNutritionModule,
        GsCommunityModule,
        GsGuideModule,
        GsFooterModule,
    ],
})

export class AppModule { }
