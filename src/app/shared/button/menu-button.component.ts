import { Component, Input } from '@angular/core';
import { NavService } from '../services/nav.service';

@Component({
	selector: 'gs-menu-button',
	templateUrl: './menu-button.component.html',
	styleUrls: ['./menu-button.component.scss']
})

/**
 *	A component for displayed a menu button
 *  or a close button, given a parameter
 */
export class GsMenuButtonComponent {

	constructor(private navService: NavService) { }

	/**
	 *  Whether the button should display the
	 *  close icon. 
	 */
	public isCloseShown(): boolean {
		return this.navService.isMobileNavOpen;
	}
}
