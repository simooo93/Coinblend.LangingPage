import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class NavMenuService {
    private menuOpened = new Subject<boolean>();

    // Observable string streams
    menuOpened$ = this.menuOpened.asObservable();

    openMenu() {
        console.log('fromService')
        this.menuOpened.next(true);
    }

    closeMenu() {
        console.log('fromService')
        this.menuOpened.next(false);
    }
}