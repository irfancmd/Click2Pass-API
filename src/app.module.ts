import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { LessonModule } from './lesson/lesson.module';
import { QuestionModule } from './question/question.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data.source';
import { CommonModule } from './common/common.module';
import { QuestionSetModule } from './question-set/question-set.module';
import { UserModule } from './user/user.module';
import { ExamModule } from './exam/exam.module';
import { CurriculumModule } from './curriculum/curriculum.module';

@Module({
  imports: [
    CategoryModule,
    LessonModule,
    QuestionModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...dataSourceOptions,
        autoLoadEntities: true,
        // synchronize: true, // TODO: Remove before going to production
      }),
    }),
    CommonModule,
    QuestionSetModule,
    UserModule,
    ExamModule,
    CurriculumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
