import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { Posts } from './post.schema';

export type UsersDocument = Users & Document;

@Schema({
   timestamps: true,
})
export class Users {
   @Transform(({ value }) => value.toString())
   _id: string;

   @Prop()
   name: string;

   @Prop()
   email: string;
   
   @Prop({
      type: [
         { type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }
      ],
   })
   @Type(() => Posts)
   postsId: Posts
}

export const UsersSchema = SchemaFactory.createForClass(Users);