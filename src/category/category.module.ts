import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { LessonModule } from 'src/lesson/lesson.module';
import { Lesson } from 'src/lesson/entities/lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Lesson]), LessonModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
