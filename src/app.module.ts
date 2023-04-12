import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
   imports: [
      MongooseModule.forRoot('mongodb://127.0.0.1:27017/test-populate'),
      MulterModule.register({dest: './uploads',}),
      UsersModule,
      PostsModule,
      CommentsModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule { }
