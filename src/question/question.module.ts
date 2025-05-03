import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService],
  imports: [DatabaseModule],
})
export class QuestionModule {}
