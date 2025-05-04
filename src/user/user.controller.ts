import { Body, Controller, Inject, Param, Post, Get, Patch, Delete, UseGuards, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel} from 'generated/prisma';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('user')
export class UserController {
    @Inject()
    private readonly userService: UserService;

    @Post('signup')
    async signupUser(
        @Body(new ValidationPipe()) userData: CreateUserDto,
    ): Promise <UserModel>{
        return this.userService.createUser(userData);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<Omit<UserModel, 'password'> | null>{
        return this.userService.user({ id });
    }

    @UseGuards(AuthGuard)
    @Patch()
    async updateUser(
        @Body(new ValidationPipe()) userData: UpdateUserDto,
        @Param('id', ParseIntPipe) id: number,
    ): Promise<UserModel>{
        return this.userService.updateUser({ 
            where:{id}, 
            data: userData
        });
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserModel>{
        return this.userService.deleteUser({ id });
    }

}
