import { Component, OnInit, Inject } from '@angular/core';
import './app.component.scss';
import { NavMenuService } from "./../services/navmenuService";

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public menuOpened: boolean;

    constructor( @Inject(NavMenuService) private navMenuService: NavMenuService) {

    }

    ngOnInit() {
        this.navMenuService.menuOpened$.subscribe(
            data => {
                console.log('fromApp')
                this.menuOpened = data;
            });
    }

    closeMenu() {
        this.navMenuService.closeMenu();
    }
}
