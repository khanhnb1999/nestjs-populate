import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { Users } from './user.schema';
import { Comments } from './comment.schema';

export type PostsDocument =  Posts & Document;

@Schema({
   timestamps: true,
})
export class  Posts {
   @Transform(({ value }) => value.toString())
   _id: string;

   @Prop()
   title: string;

   @Prop()
   body: string;

   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users' })
   @Type(() => Users)
   userId: Users

   @Prop({
      type: [
         { type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }
      ],
   })
   @Type(() => Comments)
   comments: Comments
}

export const  PostsSchema = SchemaFactory.createForClass(Posts);