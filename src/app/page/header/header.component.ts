import { Component } from '@angular/core';
import { NavService } from '../../shared/services/nav.service';
import { HEADER_LIST } from '../../data/lists';
import { ListItemModel } from '../../model/list/list-item';

@Component({
	selector: 'gs-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class GsHeaderComponent {
	private headerList: ListItemModel[] = HEADER_LIST;

	constructor(private navService: NavService) { }

	toggleMenu(): void {
		this.navService.toggleMobileNav();
	}

	isMenuOpen(): boolean {
		return this.navService.isMobileNavOpen;
	}
}
