import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, QuestionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
