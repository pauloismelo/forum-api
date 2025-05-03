import { Controller, Inject, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Prisma } from "generated/prisma";

@Controller('auth')
export class AuthController{

    @Inject()
    private readonly authService: AuthService;

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    signin(@Body() body: Prisma.UserCreateInput){
        console.log(process.env.SECRET_KEY);
        return this.authService.signIn(body);
    }
}