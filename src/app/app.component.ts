import { Component, OnInit } from '@angular/core';

import { ScrollService } from './shared/scroll/scroll.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit { 

	constructor(
		private scrollService: ScrollService
	) { }

	ngOnInit() { }

	public scrollToTop(): void {
	    this.scrollService.scrollToTop();
	}

	public isScrollToTopShown(): boolean {
		return this.isScrollToTopShown();
	}
}
