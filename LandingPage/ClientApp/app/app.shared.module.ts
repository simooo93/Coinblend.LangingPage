import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { OurServicesComponent } from './components/ourservices/ourservices.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contactus/contactUs.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ParticlesModule } from 'angular-particle';
import { WINDOW_PROVIDERS } from "./utils/windowService";

import { NavMenuService } from './components/services/navmenuService';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        AboutComponent,
        OurServicesComponent,
        ContactUsComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ParticlesModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'our-services', component: OurServicesComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [WINDOW_PROVIDERS, NavMenuService]
})
export class AppModuleShared {
}
