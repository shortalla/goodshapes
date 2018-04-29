import { Component } from '@angular/core';
import { RegisterService } from '../../shared/services/register.service';

@Component({
	selector: 'gs-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss']
})

export class GsSignUpComponent { 

	constructor(private registerService: RegisterService) { }

	public register(): void {
		this.registerService.register();
	}
}
