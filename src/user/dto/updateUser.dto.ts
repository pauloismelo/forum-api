import { PartialType } from "@nestjs/mapped-types"; 
import { CreateUserDto } from "./createUser.dto";

//Here, I'm creating a dto with base on the CreateUserDto, but with all properties optional.
export class UpdateUserDto extends PartialType(CreateUserDto) {}