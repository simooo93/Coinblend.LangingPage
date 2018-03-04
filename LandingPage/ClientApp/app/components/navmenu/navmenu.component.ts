import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../utils/windowService";
import { NavMenuService } from "./../services/navmenuService";


import './../navmenu/navmenu.component.scss';
const logo = require("./../../../assets/img/logo.png");

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html'
})

export class NavMenuComponent implements OnInit {
    public logo = logo;
    public transparent: boolean;
    private scrollDistance: Number;
    private menuOpened: boolean;

    constructor( @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) private window: Window,
        @Inject(NavMenuService) private navMenuService: NavMenuService) {
    }

    ngOnInit() {
        this.scrollDistance = 500;
        this.transparent = true;
        this.navMenuService.menuOpened$.subscribe(
            data => {
                this.menuOpened = data;
            });
    }

    scroll(elementId: string) {
        var el: HTMLElement | null = document.getElementById(elementId);
        if (el != null) {
            el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let scrollTop: Number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (scrollTop > this.scrollDistance) {
            this.transparent = false;
        } else {
            this.transparent = true;
        }
    }

    toggleMenu() {
        console.log('fromNavMenu')
        if (this.menuOpened) {
            this.navMenuService.closeMenu();
        } else {
            this.navMenuService.openMenu();
        }
    }
}
