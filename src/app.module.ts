import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { LessonModule } from './lesson/lesson.module';
import { SubjectModule } from './subject/subject.module';
import { QuestionModule } from './question/question.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data.source';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    CategoryModule,
    LessonModule,
    SubjectModule,
    QuestionModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...dataSourceOptions,
        autoLoadEntities: true,
        synchronize: true, // TODO: Remove before going to production
      }),
    }),
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
