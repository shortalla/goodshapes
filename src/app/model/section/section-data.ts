import { ListItemModel } from '../list/list-item';

/**
 * Model for the data in a section
 */
export class SectionDataModel {
	/* 
	 *  The section id
	 */
	public id: string;

	/* 
	 *  The first line of the header, usually displayed in colour
	 */
    public firstHeader: string;

	/* 
	 *  The first line of the header
	 */
    public secondHeader: string;

	/* 
	 *  The main body of text
	 */
    public text: string;

	/* 
	 *  A list of bullet points
	 */
    public list: ListItemModel[];
}