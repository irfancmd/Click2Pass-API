import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { Repository } from 'typeorm';
import { Chapter } from './entities/chapter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';
import { LessonService } from 'src/lesson/lesson.service';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private readonly chapterRepository: Repository<Chapter>,
    private readonly lessonService: LessonService,
  ) {}

  async create(createChapterDto: CreateChapterDto): Promise<CommonResponseDto> {
    let chapter = this.chapterRepository.create(createChapterDto);

    if (chapter) {
      chapter = await this.chapterRepository.save(chapter);

      if (createChapterDto.lessons) {
        await this.lessonService.preloadLessons(
          createChapterDto.lessons,
          chapter,
        );
      }

      return {
        status: 0,
        message: 'Chapter created successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't create chapter.",
    };
  }

  async findAll(): Promise<CommonResponseDto> {
    const chapters = await this.chapterRepository.find({
      relations: ['lessons'],
    });

    return {
      status: chapters && chapters.length > 0 ? 0 : 1,
      data: chapters,
    };
  }

  async findOne(id: number): Promise<CommonResponseDto> {
    const chapter = await this.chapterRepository.findOne({
      where: {
        id,
      },
      relations: ['lessons'],
    });

    if (chapter) {
      return {
        status: 0,
        data: chapter,
      };
    }

    return {
      status: 1,
      message: "Couldn't find chapter.",
    };
  }

  async update(
    id: number,
    updateChapterDto: UpdateChapterDto,
  ): Promise<CommonResponseDto> {
    let updatedChapter = await this.chapterRepository.preload({
      id,
      name: updateChapterDto.name,
      description: updateChapterDto.description,
      // Intentionally not recieving lessons while updating chapter
    });

    if (updatedChapter) {
      updatedChapter = await this.chapterRepository.save(updatedChapter);

      return {
        status: 0,
        data: updatedChapter,
      };
    }

    return {
      status: 1,
      message: "Couldn't find chapter to update.",
    };
  }

  async remove(id: number): Promise<CommonResponseDto> {
    const deleteResult = await this.chapterRepository.delete({ id });

    if (deleteResult.affected > 0) {
      return {
        status: 0,
        message: 'Chapter deleted successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't find chapter to delete.",
    };
  }
}
