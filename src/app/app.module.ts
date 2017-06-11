import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms'; // <-- NgModel lives here
import {HttpModule}    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {HeroesComponent}  from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {AppRoutingModule} from './app-routing.module';
import {HeroSearchComponent} from './hero-search.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent, HeroSearchComponent],
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
