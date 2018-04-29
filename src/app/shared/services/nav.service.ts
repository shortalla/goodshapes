import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


/**
 * A service for controlling the behaviour of the navigation menu
 */
@Injectable()
export class NavService {

    private _isMobileNavOpen: boolean;
    private _navElement: Element;

    get isMobileNavOpen(): boolean {
        return this._isMobileNavOpen;
    }

    get navElement(): Element {
        if (!this._navElement) {
            this._navElement = this.document.getElementById('nav');
        }
        return this._navElement;
    }

    constructor(@Inject(DOCUMENT) private document: any) { }   

    /**
     * Toggle the mobile navigation menu
     */
    public toggleMobileNav(): void {
        this._isMobileNavOpen = !this._isMobileNavOpen;
    }

    /**
     * Open the mobile navigation menu
     */
    public openMobileNav(): void {
        this._isMobileNavOpen = true;
    }

    /**
     * Close the mobile navigation menu
     */
    public closeMobileNav(): void {
        this._isMobileNavOpen = false;
    }
}
