import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Posts, PostsSchema } from 'src/schemas/post.schema';
import { UsersSchema, Users } from 'src/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [
      MongooseModule.forFeature([
			{name: Posts.name, schema: PostsSchema},
			{name: Users.name, schema: UsersSchema},
		])
   ],
   controllers: [PostsController],
   providers: [PostsService]
})
export class PostsModule { }
