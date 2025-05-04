import { Inject, Injectable } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    @Inject()
    private readonly prisma: PrismaService;

    async user(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ): Promise<Omit<User, 'password'> | null>{
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
            select:{
                id: true,
                name: true,
                email: true,
                password: false, //remove password do result
                createdAt: true,
                updatedAt: true,
            }
        });
    }

    async createUser(data: Prisma.UserCreateInput){
        const hashPassword = await bcrypt.hash(data.password, 10);
        return this.prisma.user.create({
            data: {...data, password: hashPassword},
        });
    }

    async updateUser(params:{
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User>{
        const { where, data } = params;
        return this.prisma.user.update({
            where,
            data
        });
    }

    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User>{
        return this.prisma.user.delete({
            where,
        });
    }
}
