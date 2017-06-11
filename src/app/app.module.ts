import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms'; // <-- NgModel lives here

import {HeroesComponent}  from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
    bootstrap: [AppComponent],
    providers: [HeroService]
})
export class AppModule {
}

/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
