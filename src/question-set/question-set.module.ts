import { Module } from '@nestjs/common';
import { QuestionSetService } from './question-set.service';
import { QuestionSetController } from './question-set.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionSet } from './entities/question-set.entity';
import { Question } from 'src/question/entities/question.entity';
import { Curriculum } from 'src/curriculum/entities/curriculum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionSet, Question, Curriculum])],
  controllers: [QuestionSetController],
  providers: [QuestionSetService],
  exports: [QuestionSetService],
})
export class QuestionSetModule {}
