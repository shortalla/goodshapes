import { Component, OnInit } from '@angular/core';
import { SectionDataModel } from '../../model/section/section-data';
import { COMMUNITY_DATA } from '../../data/data';

@Component({
	selector: 'gs-community',
	templateUrl: './community.component.html',
	styleUrls: ['./community.component.scss']
})

export class GsCommunityComponent {
	private data: SectionDataModel = COMMUNITY_DATA;
}
