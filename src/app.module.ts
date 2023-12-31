import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { LessonModule } from './lesson/lesson.module';
import { SubjectModule } from './subject/subject.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [CategoryModule, LessonModule, SubjectModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
