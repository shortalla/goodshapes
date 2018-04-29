import { Component } from '@angular/core';
import { NavService } from '../../shared/services/nav.service';
import { RegisterService } from '../../shared/services/register.service';
import { HEADER_LIST } from '../../data/lists';
import { ListItemModel } from '../../model/list/list-item';

@Component({
	selector: 'gs-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class GsHeaderComponent {
	private headerList: ListItemModel[] = HEADER_LIST;

	constructor(private navService: NavService,
				private registerService: RegisterService) { }

	/**
	 *  Toggle the mobile menu
	 */
	public toggleMenu(): void {
		this.navService.toggleMobileNav();
	}

	/**
	 *  Toggle the mobile menu
	 */
	public closeMenu(): void {
		this.navService.closeMobileNav();
	}
	
	/**
	 *  Whether the menu is open
	 */
	public isMenuOpen(): boolean {
		return this.navService.isMobileNavOpen;
	}

	/**
	 *  Whether the user is registered
	 */
	public isRegistered(): boolean {
		return this.registerService.isRegistered;
	}
}
