import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Lesson } from 'src/lesson/entities/lesson.entity';
import { Chapter } from 'src/chapter/entities/chapter.entity';
import { Curriculum } from 'src/curriculum/entities/curriculum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Lesson, Chapter, Curriculum])],
  controllers: [QuestionController],
  providers: [QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
