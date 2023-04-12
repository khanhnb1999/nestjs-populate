import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { Users, UsersSchema } from 'src/schemas/user.schema';
import { Posts, PostsSchema } from 'src/schemas/post.schema';
import { Comments, CommentsSchema } from 'src/schemas/comment.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [
      MongooseModule.forFeature([
         {name: Comments.name, schema: CommentsSchema},
			{name: Posts.name, schema: PostsSchema},
			{name: Users.name, schema: UsersSchema},
		])
   ],
   controllers: [CommentsController],
   providers: [CommentsService]
})
export class CommentsModule { }
