import { Module } from '@nestjs/common';
import { QuestionSetService } from './question-set.service';
import { QuestionSetController } from './question-set.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionSet } from './entities/question-set.entity';
import { Question } from 'src/question/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionSet, Question])],
  controllers: [QuestionSetController],
  providers: [QuestionSetService],
  exports: [QuestionSetService],
})
export class QuestionSetModule {}
