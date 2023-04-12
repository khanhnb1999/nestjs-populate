import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Users, UsersDocument } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
   constructor(
      @InjectModel(Users.name)
      private usersModel: Model<UsersDocument>,
   ) { }
   async createUsers(data: CreateUserDto) {
      try {
         const users = new this.usersModel(data);
         await users.save();
         return {
            error: 1,
            data: users,
            success: HttpStatus.OK
         }
      } catch (error) {
         return error.message;
      }
   }

   async findAllUsers() {
      try {
         const users = await this.usersModel
         .find()
         .populate({
            path: 'postsId',
            populate: {
               path: 'comments',
            }
         });
         return {
            error: 1,
            data: users,
            success: HttpStatus.OK
         }
      } catch (error) {
         return error.message;
      }
   }

   // findOne(id: number) {
   //    return `This action returns a #${id} user`;
   // }

   // update(id: number, updateUserDto: UpdateUserDto) {
   //    return `This action updates a #${id} user`;
   // }

   // deleteComment(id: string) {
   //    return `This action removes a #${id} user`;
   // }
}
