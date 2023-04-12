import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { Users } from './user.schema';
import { Posts } from './post.schema';

export type CommentsDocument = Comments & Document;

@Schema({
   timestamps: true,
})
export class Comments {
   @Transform(({ value }) => value.toString())
   _id: string;

   @Prop()
   body: string;

   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users' })
   @Type(() => Users)
   userId: Users

   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' })
   @Type(() => Posts)
   postId: Posts
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);