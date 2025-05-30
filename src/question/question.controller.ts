import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, ParseIntPipe } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createQuestionDto: CreateQuestionDto, @Request() req: any) {
    return this.questionService.create(createQuestionDto, req);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.questionService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id', ParseIntPipe) id: number, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.update(id, updateQuestionDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.questionService.remove(id);
  }
}
