import { Component } from '@angular/core';
import { ListItemModel } from '../../model/list/list-item';
import { GUIDE_LIST } from '../../data/lists';

@Component({
  selector: 'gs-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})

export class GsGuideComponent { 
	private guideList: ListItemModel[] = GUIDE_LIST;
}
