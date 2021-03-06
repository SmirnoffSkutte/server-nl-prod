import { prop} from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'


export interface TagModel extends Base {}

export class TagModel extends TimeStamps {
	@prop()
	name: string

	@prop({ unique: true })
	slug: string
}