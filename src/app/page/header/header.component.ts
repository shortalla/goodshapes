import { Component } from '@angular/core';
import { NavService } from '../../shared/services/nav.service';
import { RegisterService } from '../../shared/services/register.service';
import { HEADER_DATA } from '../../data/data';
import { SectionDataModel } from '../../model/section/section-data';

@Component({
	selector: 'gs-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class GsHeaderComponent {
	private data: SectionDataModel = HEADER_DATA;

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
