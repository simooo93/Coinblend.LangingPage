import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { OurServicesComponent } from './components/ourservices/ourservices.component';
import { OurTeamComponent } from './components/ourteam/ourteam.component';
import { ContactUsComponent } from './components/contactus/contactUs.component';

import { ParticlesModule } from 'angular-particle';
import { WINDOW_PROVIDERS } from "./utils/windowService";

import { NavMenuService } from './components/services/navmenuService';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        OurTeamComponent,
        OurServicesComponent,
        ContactUsComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ParticlesModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'our-team', component: OurTeamComponent },
            { path: 'our-services', component: OurServicesComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [WINDOW_PROVIDERS, NavMenuService]
})
export class AppModuleShared {
}
