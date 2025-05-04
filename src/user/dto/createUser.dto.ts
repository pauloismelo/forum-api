
import { IsAlpha, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
//Here I use the decorators from class-validator to validate the properties of the class.

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Length(6)
    @IsString()
    @IsNotEmpty()
    name: string;

    @Length(6)
    @IsAlpha()
    password: string;
}
