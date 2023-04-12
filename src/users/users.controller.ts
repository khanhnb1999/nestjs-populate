import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('api')
export class UsersController {
   constructor(private readonly usersService: UsersService) { }

   @Post('createUser')
   createUsers(@Body() data: CreateUserDto) {
      return this.usersService.createUsers(data);
   }

   @Get('getAllUsers')
   findAllUsers() {
      return this.usersService.findAllUsers();
   }

   // @Get(':id')
   // findOne(@Param('id') id: string) {
   //    return this.usersService.findOne(+id);
   // }

   // @Patch(':id')
   // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
   //    return this.usersService.update(+id, updateUserDto);
   // }

   // @Delete(':id')
   // remove(@Param('id') id: string) {
   //    return this.usersService.remove(+id);
   // }
}
