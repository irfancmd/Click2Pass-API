import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Repository } from 'typeorm';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';
import { Lesson } from 'src/lesson/entities/lesson.entity';
import { Chapter } from 'src/chapter/entities/chapter.entity';
import { Curriculum } from 'src/curriculum/entities/curriculum.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
    @InjectRepository(Chapter)
    private readonly chapterRepository: Repository<Chapter>,
    @InjectRepository(Curriculum)
    private readonly curriculumRepository: Repository<Curriculum>,
  ) {}

  async create(
    createQuestionDto: CreateQuestionDto,
  ): Promise<CommonResponseDto> {
    let question = await this.questionRepository.create(createQuestionDto);

    if (question && createQuestionDto.lessonId) {
      const lesson = await this.lessonRepository.findOne({
        where: {
          id: createQuestionDto.lessonId,
        },
      });

      if (lesson) {
        question.lesson = lesson;
      }
    }

    if (question && createQuestionDto.chapterId) {
      const chapter = await this.chapterRepository.findOne({
        where: {
          id: createQuestionDto.chapterId,
        },
        relations: ['curriculum'],
      });

      if (chapter) {
        question.chapter = chapter;

        if (chapter.curriculum) {
          question.curriculum = chapter.curriculum;
        }
      }
    }

    if (question && createQuestionDto.curriculumId) {
      const curriculum = await this.curriculumRepository.findOne({
        where: {
          id: createQuestionDto.curriculumId,
        },
      });

      if (curriculum) {
        question.curriculum = curriculum;
      }
    }

    if (question) {
      question = await this.questionRepository.save(question);

      return {
        status: 0,
        message: 'Question created successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't create question.",
    };
  }

  async findAll(): Promise<CommonResponseDto> {
    const questions = await this.questionRepository.find({
      relations: ['chapter', 'lesson', 'curriculum'],
    });

    return {
      status: questions && QuestionService.length > 0 ? 0 : 1,
      data: questions,
    };
  }

  async findOne(id: string): Promise<CommonResponseDto> {
    const question = await this.questionRepository.findOne({
      where: {
        id,
      },
      relations: ['chapter', 'lesson', 'curriculum'],
    });

    if (question) {
      return {
        status: 0,
        data: question,
      };
    }

    return {
      status: 1,
      message: "Couldn't find question.",
    };
  }

  async update(
    id: string,
    updateQuestionDto: UpdateQuestionDto,
  ): Promise<CommonResponseDto> {
    let updatedQuestion = await this.questionRepository.preload({
      id,
      ...updateQuestionDto,
    });

    if (updatedQuestion && updateQuestionDto.lessonId) {
      const lesson = await this.lessonRepository.findOne({
        where: {
          id: updateQuestionDto.lessonId,
        },
      });

      if (lesson) {
        updatedQuestion.lesson = lesson;
      }
    }

    if (updatedQuestion && updateQuestionDto.chapterId) {
      const chapter = await this.chapterRepository.findOne({
        where: {
          id: updateQuestionDto.chapterId,
        },
        relations: ['curriculum'],
      });

      if (chapter) {
        updatedQuestion.chapter = chapter;

        if (chapter.curriculum) {
          updatedQuestion.curriculum = chapter.curriculum;
        }
      }
    }

    if (updatedQuestion && updateQuestionDto.curriculumId) {
      const curriculum = await this.curriculumRepository.findOne({
        where: {
          id: updateQuestionDto.curriculumId,
        },
      });

      if (curriculum) {
        updatedQuestion.curriculum = curriculum;
      }
    }

    if (updatedQuestion) {
      updatedQuestion = await this.questionRepository.save(updatedQuestion);

      return {
        status: 0,
        data: updatedQuestion,
      };
    }

    return {
      status: 1,
      message: "Couldn't find question to update.",
    };
  }

  async remove(id: string): Promise<CommonResponseDto> {
    const deleteResult = await this.questionRepository.delete({ id });

    if (deleteResult.affected > 0) {
      return {
        status: 0,
        message: 'Question deleted successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't find question to delete.",
    };
  }

  async getRandomQuestions(
    totalExpectedQuestion: number = 10,
  ): Promise<{ chapterId: string; questionId: string }[]> {
    const questionCount = await this.questionRepository.count();

    if (totalExpectedQuestion > questionCount) {
      return [];
    }

    const chapters = await this.chapterRepository.find({
      // TODO: Fix
      where: [{ id: '15' }, { id: '16' }],
    });
    const questionsPerChapter = Math.floor(
      totalExpectedQuestion / chapters.length,
    );

    const questionSet: Set<{ chapterId: string; questionId: string }> =
      new Set();

    for (const chapter of chapters) {
      const questions = await this.questionRepository.find({
        where: {
          chapterId: chapter.id,
        },
        relations: ['chapter', 'lesson', 'curriculum'],
      });

      let count = 0;
      let limit = questionsPerChapter;

      if (questions.length < questionsPerChapter) {
        limit = questions.length;
      }

      while (count < limit) {
        const randomIndex = Math.floor(Math.random() * limit);

        const questionObj = {
          chapterId: chapter.id,
          questionId: questions[randomIndex].id,
        };

        if (!questionSet.has(questionObj)) {
          questionSet.add(questionObj);
          count++;
        } else {
          continue;
        }
      }
    }

    return Array.from(questionSet);
  }

  async getChapterWiseQuestions(chapterId: string, limit: number = 20) {
    const questions = await this.questionRepository.find({
      where: {
        chapterId: chapterId,
      },
      take: limit,
      relations: ['chapter', 'lesson', 'curriculum'],
    });

    return questions;
  }
}
