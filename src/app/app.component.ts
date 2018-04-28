import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit { 
	backToTopStyle = {
		'right': '1em',
		'color': '#000000',
		'border-radius': '50%',
		'background': 'rgba(255,255,255,0.5)',
		'width': '3.5rem',
		'height': '3.5rem',
		'line-height': '1.2em',
		'text-transform': 'uppercase',
		'font-size': '0.6rem',
		'font-weight': 'bold',
	};

	constructor() { }

	ngOnInit() { }
}
