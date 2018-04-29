import { Component } from '@angular/core';
import { SectionDataModel } from '../../model/section/section-data';
import { GUIDE_DATA } from '../../data/data';

@Component({
  selector: 'gs-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})

export class GsGuideComponent { 
	private data: SectionDataModel = GUIDE_DATA;
}
