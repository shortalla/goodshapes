import { Injectable, Inject } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';

export const topMargin = 0;

/**
 * A service for controlling the scroll behaviour of the page.
 */
@Injectable()
export class ScrollService {

    private _topOffset: number | null;
    private _topOfPageElement: Element;

    // Offset from the top of the document to bottom of any static elements
    // at the top (e.g. toolbar) + some margin
    get topOffset() {
        if (!this._topOffset) {
            const toolbar = this.document.querySelector('.app-toolbar');
            this._topOffset = (toolbar && toolbar.clientHeight || 0) + topMargin;
        }
        return this._topOffset!;
    }

    get topOfPageElement() {
        if (!this._topOfPageElement) {
            this._topOfPageElement = this.document.getElementById('header') || this.document.body;
        }
        return this._topOfPageElement;
    }

    constructor(
        @Inject(DOCUMENT) private document: any) { }

    /**
     * Scroll to the element if one exists.
     */
    scrollToElement(element: Element|null) {
        if (element) {
            element.scrollIntoView();

            if (window && window.scrollBy) {
                // Scroll as much as necessary to align the top of `element` at `topOffset`.
                // (Usually, `.top` will be 0, except for cases where the element cannot be scrolled all the
                //  way to the top, because the viewport is larger than the height of the content after the
                //  element.)
                window.scrollBy(0, element.getBoundingClientRect().top - this.topOffset);

                // If we are very close to the top (<20px), then scroll all the way up.
                // (This can happen if `element` is at the top of the page, but has a small top-margin.)
                if (window.pageYOffset < 20) {
                    window.scrollBy(0, -window.pageYOffset);
                }
            }
        }
    }

    /**
     * Scroll to the top of the document.
     */
    scrollToTop() {
        this.scrollToElement(this.topOfPageElement);
    }

    isScrollToTopShown() {
        return false;
    }
}
