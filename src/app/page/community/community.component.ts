import { Component, OnInit } from '@angular/core';
import { ListItemModel } from '../../model/list/list-item';
import { COMMUNITY_LIST } from '../../data/lists';

@Component({
	selector: 'gs-community',
	templateUrl: './community.component.html',
	styleUrls: ['./community.component.scss']
})

export class GsCommunityComponent {
	private communityList: ListItemModel[] = COMMUNITY_LIST;
}
