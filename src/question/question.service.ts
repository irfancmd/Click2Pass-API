import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Repository } from 'typeorm';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';
import { Lesson } from 'src/lesson/entities/lesson.entity';
import { Chapter } from 'src/chapter/entities/chapter.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
    @InjectRepository(Chapter)
    private readonly chapterRepository: Repository<Chapter>,
  ) {}

  async create(
    createQuestionDto: CreateQuestionDto,
  ): Promise<CommonResponseDto> {
    // if(lesson)
    // const lesson = await this.lessonRepository.findOne({
    //   where: {
    //     id: createQuestionDto.lessonId,
    //   },
    //   relations: ['chapter'],
    // });

    let question = await this.questionRepository.create(createQuestionDto);

    // if (lesson) {
    //   let question = await this.questionRepository.create({
    //     ...createQuestionDto,
    //     lessonName: lesson.name,
    //     chapterId: lesson.chapter.id,
    //     chapterName: lesson.chapter.name,
    //   });

    if (question) {
      question = await this.questionRepository.save(question);

      return {
        status: 0,
        message: 'Question created successfully.',
      };
    }
    // }

    return {
      status: 1,
      message: "Couldn't create question.",
    };
  }

  async findAll(): Promise<CommonResponseDto> {
    const questions = await this.questionRepository.find();

    return {
      status: questions && QuestionService.length > 0 ? 0 : 1,
      data: questions,
    };
  }

  async findOne(id: number): Promise<CommonResponseDto> {
    const question = await this.questionRepository.findOne({
      where: {
        id,
      },
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
    id: number,
    updateQuestionDto: UpdateQuestionDto,
  ): Promise<CommonResponseDto> {
    let updatedQuestion = await this.questionRepository.preload({
      id,
      ...updateQuestionDto,
    });

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

  async remove(id: number): Promise<CommonResponseDto> {
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
  ): Promise<{ chapterId: number; questionId: number }[]> {
    const questionCount = await this.questionRepository.count();

    if (totalExpectedQuestion > questionCount) {
      return [];
    }

    const chapters = await this.chapterRepository.find({
      // TODO: Fix
      where: [{ id: 15 }, { id: 16 }],
    });
    const questionsPerChapter = Math.floor(
      totalExpectedQuestion / chapters.length,
    );

    const questionSet: Set<{ chapterId: number; questionId: number }> =
      new Set();

    for (const chapter of chapters) {
      const questions = await this.questionRepository.find({
        where: {
          chapterId: chapter.id,
        },
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

  async getChapterWiseQuestions(chapterId: number, limit: number = 20) {
    const questions = await this.questionRepository.find({
      where: {
        chapterId: chapterId,
      },
      take: limit,
    });

    return questions;
  }
}
