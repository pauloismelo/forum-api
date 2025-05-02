import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {Prisma, User as UserModel} from 'generated/prisma';

@Controller('user')
export class UserController {
    @Inject()
    private readonly userService: UserService;

    @Post('signup')
    async signupUser(
        @Body() userData: Prisma.UserCreateInput,
    ): Promise <UserModel>{
        return this.userService.createUser(userData);
    }
}
