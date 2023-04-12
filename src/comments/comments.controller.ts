import {
   Controller,
   Get,
   Post,
   Body,
   Patch,
   Param,
   Delete
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Comments')
@Controller('api')
export class CommentsController {
   constructor(private readonly commentsService: CommentsService) { }

   @Post('addComment')
   createComments(@Body() data: CreateCommentDto) {
      return this.commentsService.createComments(data);
   }

   @Get('listAllComment')
   findAllComments() {
      return this.commentsService.findAllComments();
   }

   // @Get(':id')
   // findOne(@Param('id') id: string) {
   //    return this.commentsService.findOne(+id);
   // }

   // @Patch(':id')
   // update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
   //    return this.commentsService.update(+id, updateCommentDto);
   // }

   @Delete('deleteComment/:id')
   removeComment(@Param('id') id: string) {
      return this.commentsService.deleteComment(id);
   }
}
