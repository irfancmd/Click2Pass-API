import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterController } from './chapter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from './entities/chapter.entity';
import { LessonModule } from 'src/lesson/lesson.module';
import { Lesson } from 'src/lesson/entities/lesson.entity';
import { Curriculum } from 'src/curriculum/entities/curriculum.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Chapter, Lesson, Curriculum]),
    LessonModule,
  ],
  controllers: [ChapterController],
  providers: [ChapterService],
})
export class ChapterModule {}
