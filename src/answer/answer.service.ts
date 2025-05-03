import { Inject, Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AnswerService {

  @Inject()
  private readonly prisma: PrismaService;


  async create(createAnswerDto: CreateAnswerDto, userId: number) {
    const questionId = 1;
    const newAnswer={
      body: createAnswerDto.body,
      user: {
        connect: {id: userId},
      },
      question: {
        connect: {id: questionId},
      }
    };
    return await this.prisma.answers.create({
      data: newAnswer,
    });
  }

  async findAll() {
    return await this.prisma.answers.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.answers.findUnique({ where: {id}})
  }

  async update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return await this.prisma.answers.update({
      where: {id},
      data: updateAnswerDto,
    })
  }

  async remove(id: number) {
    return await this.prisma.answers.delete({where: {id}})
  }
}
