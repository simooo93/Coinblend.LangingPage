import { Component, OnInit, Inject } from '@angular/core';
import './app.component.scss';
import { NavMenuService } from "./../services/navmenuService";
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public menuOpened: boolean;

    constructor( @Inject(NavMenuService) private navMenuService: NavMenuService, private translate: TranslateService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
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
