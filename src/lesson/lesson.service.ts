import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Repository } from 'typeorm';
import { Lesson } from './entities/lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';
import { Chapter } from 'src/chapter/entities/chapter.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async create(createLessonDto: CreateLessonDto): Promise<CommonResponseDto> {
    let lesson = this.lessonRepository.create(createLessonDto);

    if (lesson) {
      lesson = await this.lessonRepository.save(lesson);

      return {
        status: 0,
        message: 'Lesson created successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't create lesson.",
    };
  }

  async findAll(): Promise<CommonResponseDto> {
    const lessons = await this.lessonRepository.find({
      relations: ['chapter'],
    });

    return {
      status: lessons && lessons.length > 0 ? 0 : 1,
      data: lessons,
    };
  }

  async findOne(id: number): Promise<CommonResponseDto> {
    const lesson = await this.lessonRepository.findOne({
      where: {
        id,
      },
      relations: ['chapter'],
    });

    if (lesson) {
      return {
        status: 0,
        data: lesson,
      };
    }

    return {
      status: 1,
      message: "Couldn't find lesson.",
    };
  }

  async update(
    id: number,
    updateLessonDto: UpdateLessonDto,
  ): Promise<CommonResponseDto> {
    let updatedLesson = await this.lessonRepository.preload({
      id,
      ...updateLessonDto,
    });

    if (updatedLesson) {
      updatedLesson = await this.lessonRepository.save(updatedLesson);

      return {
        status: 0,
        data: updatedLesson,
      };
    }

    return {
      status: 1,
      message: "Couldn't find lesson to update.",
    };
  }

  async remove(id: number): Promise<CommonResponseDto> {
    const deleteResult = await this.lessonRepository.delete({ id });

    if (deleteResult.affected > 0) {
      return {
        status: 0,
        message: 'Lesson deleted successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't find lesson to delete.",
    };
  }

  async preloadLessons(createLessonDtos: CreateLessonDto[], chapter: Chapter) {
    for (const createLessonDto of createLessonDtos) {
      const lesson = await this.lessonRepository.findOneBy({
        name: createLessonDto.name,
      });

      if (!lesson) {
        await this.create({ ...createLessonDto, chapterId: chapter.id });
      }
    }
  }

  // async getLessonsByChapter(chapterId: number) {
  //   const lessons = await this.lessonRepository.find({
  //     where: {
  //       chapter:
  //     }
  //   });
  // }
}
