import { IsNotEmpty } from "class-validator";
import { ApiProperty, } from "@nestjs/swagger";
 
export class CreateUserDto {
   @IsNotEmpty()
   @ApiProperty({
      type: 'string',
      format: 'string',
      description: 'The name of the Users'
   })
   name: string;

   @IsNotEmpty()
   @ApiProperty({
      type: 'number',
      format: 'number',
      description: 'The email of the Users'
   })
   email: number;
}
