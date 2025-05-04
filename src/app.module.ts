import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, QuestionModule],
  controllers: [],
  providers: [{
    provide: APP_PIPE,
    useClass: ValidationPipe,
  }],
})
export class AppModule {}
