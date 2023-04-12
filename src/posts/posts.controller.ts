import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('api')
export class PostsController {
   constructor(private readonly postsService: PostsService) { }
   
   // @ApiConsumes('multipart/form-data')
   @Post('addPost')
   createPost(@Body() data: CreatePostDto) {
      return this.postsService.createPost(data);
   }

   @Get('listAllPost')
   findAllPost() {
      return this.postsService.findAllPosts();
   }

   // @Get(':id')
   // findOne(@Param('id') id: string) {
   //    return this.postsService.findOne(+id);
   // }

   // @Patch(':id')
   // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
   //    return this.postsService.update(+id, updatePostDto);
   // }

   // @Delete(':id')
   // remove(@Param('id') id: string) {
   //    return this.postsService.remove(+id);
   // }
}
