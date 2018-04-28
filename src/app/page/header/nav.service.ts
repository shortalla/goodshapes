import { Injectable, Inject } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';


/**
 * A service for controlling the behaviour of the navigation menu.
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

    constructor(
        @Inject(DOCUMENT) private document: any) { }

    /**
     * Toggle the mobile navigation menu
     */
    toggleMobileNav(): void {
        this._isMobileNavOpen = !this._isMobileNavOpen;
    }
}
