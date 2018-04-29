import { Component, Input, Output } from '@angular/core';

@Component({
	selector: 'gs-email-input',
	templateUrl: './email-input.component.html',
	styleUrls: ['./email-input.component.scss']
})

export class GsEmailInputComponent { 
	@Input() placeholder: string;
}
