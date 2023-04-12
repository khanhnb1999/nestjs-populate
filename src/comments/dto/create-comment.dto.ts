import { IsNotEmpty } from "class-validator";
import { ApiProperty, } from "@nestjs/swagger";
import { Users } from "src/schemas/user.schema";
import { Posts } from "src/schemas/post.schema";
 
export class CreateCommentDto {

   @IsNotEmpty()
   @ApiProperty({
      type: 'string',
      format: 'string',
      description: 'The email of the Posts'
   })
   body: string;

   @ApiProperty({
      type: 'string',
      format: 'string',
      enum: [
         '643653fecb3f7429a67dc4e4',
      ],
      description: 'The userId of the Posts'
   })
   userId: Users;

   @ApiProperty({
      type: 'string',
      format: 'string',
      enum: [
         '64367c03213deb91122dea12',
      ],
      description: 'The postId of the Posts'
   })
   postId: Posts;
}
