import { Component } from '@angular/core';
import { SectionDataModel } from '../../model/section/section-data';
import { HEADER_DATA } from '../../data/data';

@Component({
	selector: 'gs-headline-banner',
	templateUrl: './headline-banner.component.html',
	styleUrls: ['./headline-banner.component.scss']
})

export class GsHeadlineBannerComponent { 
	private data: SectionDataModel = HEADER_DATA;
}
