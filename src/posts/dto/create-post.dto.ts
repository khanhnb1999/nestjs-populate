import { IsNotEmpty } from "class-validator";
import { ApiProperty, } from "@nestjs/swagger";
import { Users } from "src/schemas/user.schema";
 
export class CreatePostDto {
   @IsNotEmpty()
   @ApiProperty({
      type: 'string',
      format: 'string',
      description: 'The title of the Posts'
   })
   title: string;

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
}
