import { HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts, PostsDocument } from 'src/schemas/post.schema';
import { Users, UsersDocument } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
   constructor(
      @InjectModel(Posts.name)
      private postModel: Model<PostsDocument>,
      @InjectModel(Users.name)
      private userModel: Model<UsersDocument>,
   ) { }
   async createPost(data: CreatePostDto) {
      try {
         const { userId } = data;
         const posts = new this.postModel(data);
         await posts.save();

         // push userId in collection Users;
         const { _id } = posts;
         await this.userModel
            .updateOne(
               { _id: userId },
               { $addToSet: { postsId: _id } }
            );
         return {
            error: 1,
            data: posts,
            success: HttpStatus.OK
         }
      } catch (error) {
         return error.message;
      }
   }

   async findAllPosts() {
      try {
         const posts = await this.postModel.find();
         return {
            error: 1,
            data: posts,
            success: HttpStatus.OK
         }
      } catch (error) {
         return error.message;
      }
   }

   // findOne(id: number) {
   //    return `This action returns a #${id} post`;
   // }

   // update(id: number, updatePostDto: UpdatePostDto) {
   //    return `This action updates a #${id} post`;
   // }

   // remove(id: number) {
   //    return `This action removes a #${id} post`;
   // }
}
