import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';
import { Repository } from 'typeorm';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';
import { QuestionService } from 'src/question/question.service';
import { QuestionSetService } from 'src/question-set/question-set.service';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam) private examRepository: Repository<Exam>,
    private questionService: QuestionService,
    private questionSetService: QuestionSetService,
  ) {}

  async create(
    curriculumId: string,
    chapterId?: string,
    questionSetId?: string,
  ): Promise<CommonResponseDto> {
    try {
      let exam = this.examRepository.create(new CreateExamDto());

      let questionIds: string[] = [];

      if (chapterId) {
        // Get chapter wise questions
        questionIds = (
          await this.questionService.getChapterWiseQuestions(chapterId)
        ).map((questionObj) => {
          return questionObj.id;
        });
      } else if (questionSetId) {
        // Get question-set questions
        const questionSet = (
          await this.questionSetService.findOne(questionSetId)
        ).data;

        questionIds = questionSet.questions.map((questionObj) => {
          return questionObj.id;
        });
      } else {
        // Get random questions
        if (curriculumId == '5') {
          // Driving
          questionIds = (
            await this.questionService.getRandomQuestionsForDriving()
          ).map((questionObj) => {
            return questionObj.questionId;
          });
        } else {
          questionIds = (
            await this.questionService.getRandomQuestions(curriculumId)
          ).map((questionObj) => {
            return questionObj.questionId;
          });
        }
      }

      if (questionIds.length == 0) {
        return {
          status: 1,
          message: "Couldn't create exam.",
        };
      }

      exam.achievedScore = 0;
      exam.totalScore = questionIds.length;
      exam.questionCount = questionIds.length;
      exam.startTime = new Date();
      exam.testCompleted = false;
      exam.examineeId = '1';

      const endTime = new Date();
      endTime.setMinutes(endTime.getMinutes() + 20);
      exam.endTime = endTime;

      for (let i = 0; i < questionIds.length; i++) {
        exam[`q${i + 1}Id`] = questionIds[i];
      }

      if (exam) {
        exam = await this.examRepository.save(exam);

        return {
          status: 0,
          message: 'Exam created successfully.',
          data: exam.id,
        };
      }

      return {
        status: 1,
        message: "Couldn't create exam.",
      };
    } catch (e) {
      return {
        status: 1,
        message: e,
      };
    }
  }

  async findAll(): Promise<CommonResponseDto> {
    const exams = await this.examRepository.find({
      relations: [
        'q1',
        'q2',
        'q3',
        'q4',
        'q5',
        'q6',
        'q7',
        'q8',
        'q9',
        'q10',
        'q11',
        'q12',
        'q13',
        'q14',
        'q15',
        'q16',
        'q17',
        'q18',
        'q19',
        'q20',
        'q21',
        'q22',
        'q23',
        'q24',
        'q25',
        'q26',
        'q27',
        'q28',
        'q29',
        'q30',
        'q31',
        'q32',
        'q33',
        'q34',
        'q35',
        'q36',
        'q37',
        'q38',
        'q39',
        'q40',
      ],
    });

    return {
      status: exams && exams.length > 0 ? 0 : 1,
      data: exams,
    };
  }

  async findOne(id: string): Promise<CommonResponseDto> {
    const exam = await this.examRepository.findOne({
      where: {
        id,
      },
      relations: [
        'q1',
        'q2',
        'q3',
        'q4',
        'q5',
        'q6',
        'q7',
        'q8',
        'q9',
        'q10',
        'q11',
        'q12',
        'q13',
        'q14',
        'q15',
        'q16',
        'q17',
        'q18',
        'q19',
        'q20',
        'q21',
        'q22',
        'q23',
        'q24',
        'q25',
        'q26',
        'q27',
        'q28',
        'q29',
        'q30',
        'q31',
        'q32',
        'q33',
        'q34',
        'q35',
        'q36',
        'q37',
        'q38',
        'q39',
        'q40',
      ],
    });

    if (exam) {
      return {
        status: 0,
        data: exam,
      };
    }

    return {
      status: 1,
      message: "Couldn't find exam.",
    };
  }

  async update(
    id: string,
    updateExamDto: UpdateExamDto,
  ): Promise<CommonResponseDto> {
    let updatedExam = await this.examRepository.preload({
      id,
      ...updateExamDto,
    });

    if (updateExamDto) {
      updatedExam = await this.examRepository.save(updateExamDto);

      return {
        status: 0,
        data: updatedExam,
      };
    }

    return {
      status: 1,
      message: "Could't find exam to update.",
    };
  }

  async remove(id: string): Promise<CommonResponseDto> {
    const deleteResult = await this.examRepository.delete({ id });

    if (deleteResult.affected > 0) {
      return {
        status: 0,
        message: 'Exam deleted successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't find exam to delete.",
    };
  }
}
