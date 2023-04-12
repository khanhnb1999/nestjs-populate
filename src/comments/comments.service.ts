import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Posts, PostsDocument } from 'src/schemas/post.schema';
import { Users, UsersDocument } from 'src/schemas/user.schema';
import { Comments, CommentsDocument } from 'src/schemas/comment.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
   constructor(
      @InjectModel(Posts.name)
      private postModel: Model<PostsDocument>,
      @InjectModel(Users.name)
      private userModel: Model<UsersDocument>,
      @InjectModel(Comments.name)
      private commentModel: Model<CommentsDocument>,
   ) { }

   async createComments(data: CreateCommentDto) {
      try {
         const { postId } = data;
         const comments = new this.commentModel(data);
         await comments.save();

         const { _id } = comments;
         await this.postModel
            .updateOne(
               { _id: postId },
               { $addToSet: { comments: _id } }
            );
         return {
            error: 1,
            data: comments,
            success: HttpStatus.OK
         }
      } catch (error) {
         return error.message;
      }
   }

   async findAllComments() {
      try {
         const comments = await this.commentModel.find();
         return {
            error: 1,
            data: comments,
            success: HttpStatus.OK
         }
      } catch (error) {
         return error.message;
      }
   }

   // findOne(id: number) {
   //    return `This action returns a #${id} comment`;
   // }

   // update(id: number, updateCommentDto: UpdateCommentDto) {
   //    return `This action updates a #${id} comment`;
   // }

   async deleteComment(id: string) {
      try {
         const comments = await this.commentModel
            .findByIdAndDelete({_id: id});
         // delete commentId in filed comments array in collection Posts      
         const { postId } = comments;
         await this.postModel
            .findByIdAndUpdate(postId, {
               $pull: {}
            })   
      return {
         error: 1,
         data: comments,
         success: HttpStatus.OK
      }      
      } catch (error) {
         return error.message;
      }
   }
}
