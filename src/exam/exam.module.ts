import { Module } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ExamController } from './exam.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';
import { Question } from 'src/question/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exam, Question])],
  controllers: [ExamController],
  providers: [ExamService],
})
export class ExamModule {}
