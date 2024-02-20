import { Injectable } from '@nestjs/common';
import { CreateQuestionSetDto } from './dto/create-question-set.dto';
import { UpdateQuestionSetDto } from './dto/update-question-set.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionSet } from './entities/question-set.entity';
import { Repository } from 'typeorm';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';
import { Question } from 'src/question/entities/question.entity';

@Injectable()
export class QuestionSetService {
  constructor(
    @InjectRepository(QuestionSet)
    private questionSetRepository: Repository<QuestionSet>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async create(
    createQuestionSetDto: CreateQuestionSetDto,
  ): Promise<CommonResponseDto> {
    let questionSet = this.questionSetRepository.create(createQuestionSetDto);

    questionSet.questions = [];

    for (const questionId of createQuestionSetDto.questionIds) {
      questionSet.questions.push(
        await this.questionRepository.findOneBy({ id: questionId }),
      );
    }

    if (questionSet) {
      questionSet = await this.questionSetRepository.save(questionSet);

      return {
        status: 0,
        message: 'Question set created successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't create question set.",
    };
  }

  async findAll(): Promise<CommonResponseDto> {
    const questionSets = await this.questionSetRepository.find({
      relations: ['questions'],
    });

    return {
      status: questionSets && questionSets.length > 0 ? 0 : 1,
      data: questionSets,
    };
  }

  async findOne(id: string): Promise<CommonResponseDto> {
    const questionSet = await this.questionSetRepository.findOne({
      where: {
        id,
      },
      relations: ['questions'],
    });

    if (questionSet) {
      return {
        status: 0,
        data: questionSet,
      };
    }

    return {
      status: 1,
      message: "Couldn't find question set.",
    };
  }

  async update(
    id: string,
    updateQuestionSetDto: UpdateQuestionSetDto,
  ): Promise<CommonResponseDto> {
    let updatedQuestionSet = await this.questionSetRepository.preload({
      id,
      ...updateQuestionSetDto,
    });

    if (updateQuestionSetDto.questionIds) {
      updatedQuestionSet.questions = [];

      for (const questionId of updateQuestionSetDto.questionIds) {
        updatedQuestionSet.questions.push(
          await this.questionRepository.findOneBy({ id: questionId }),
        );
      }
    }

    if (updatedQuestionSet) {
      updatedQuestionSet =
        await this.questionSetRepository.save(updatedQuestionSet);

      return {
        status: 0,
        // Note: preload doesn't load relations. So, if the relations are UNCHANGED, their information
        // won't be loaded as preload does lazy loading. Updating relation information like updating the join query
        // will however, done properly by the preload function.
        data: updatedQuestionSet,
      };
    }

    return {
      status: 1,
      message: "Couldn't find question set to update.",
    };
  }

  async remove(id: string): Promise<CommonResponseDto> {
    const deleteResult = await this.questionSetRepository.delete({ id });

    if (deleteResult.affected > 0) {
      return {
        status: 0,
        message: 'Question set deleted successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't find question set to delete.",
    };
  }
}
