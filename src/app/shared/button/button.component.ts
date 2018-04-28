import { Component, Input } from '@angular/core';

@Component({
	selector: 'gs-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})

/**
 * A component for displaying a regular text
 * button which can be styled optionally
 */
export class GsButtonComponent {
	// Whether the button is white
	@Input() styleWhite: boolean;
}
