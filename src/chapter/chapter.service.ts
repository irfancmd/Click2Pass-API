import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { Repository } from 'typeorm';
import { Chapter } from './entities/chapter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';
import { LessonService } from 'src/lesson/lesson.service';
import { Curriculum } from 'src/curriculum/entities/curriculum.entity';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private readonly chapterRepository: Repository<Chapter>,
    @InjectRepository(Curriculum)
    private readonly curriculumRepository: Repository<Curriculum>,
    private readonly lessonService: LessonService,
  ) {}

  async create(createChapterDto: CreateChapterDto): Promise<CommonResponseDto> {
    let chapter = this.chapterRepository.create(createChapterDto);

    const curriculum = await this.curriculumRepository.findOneBy({
      id: createChapterDto.curriculumId,
    });

    if (chapter && curriculum) {
      chapter.curriculum = curriculum;
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
      relations: ['lessons', 'curriculum'],
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
      relations: ['lessons', 'curriculum'],
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
      if (updateChapterDto.curriculumId) {
        const curriculum = await this.curriculumRepository.findOneBy({
          id: updateChapterDto.curriculumId,
        });

        if (curriculum) {
          updatedChapter.curriculum = curriculum;
        }
      }

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
