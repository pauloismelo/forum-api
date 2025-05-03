import { Body, Controller, Inject, Param, Post, Get, Patch, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import {Prisma, User as UserModel} from 'generated/prisma';
import { AuthGuard } from 'src/auth/auth.guard';

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

    @UseGuards(AuthGuard)
    @Get(':id')
    async getUser(@Param('id') id: number): Promise<UserModel | null>{
        return this.userService.user({ id: Number(id) });
    }

    @UseGuards(AuthGuard)
    @Patch()
    async updateUser(
        @Body() userData: Prisma.UserUpdateInput,
        @Param('id') id: number,
    ): Promise<UserModel>{
        return this.userService.updateUser({ 
            where:{id: Number(id)}, 
            data: userData
        });
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteUser(@Param('id') id: number): Promise<UserModel>{
        return this.userService.deleteUser({ id: Number(id) });
    }

}
