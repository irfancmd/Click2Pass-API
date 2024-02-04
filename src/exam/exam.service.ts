import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';
import { Repository } from 'typeorm';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam) private examRepository: Repository<Exam>,
  ) {}

  async create(createExamDto: CreateExamDto): Promise<CommonResponseDto> {
    let exam = this.examRepository.create(createExamDto);
    exam.achievedScore = 0;
    exam.totalScore = 20;
    exam.startTime = new Date();
    exam.testCompleted = false;

    if (exam) {
      exam = await this.examRepository.save(exam);

      return {
        status: 0,
        message: 'Exam created successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't create exam.",
    };
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
      ],
    });

    return {
      status: exams && exams.length > 0 ? 0 : 1,
      data: exams,
    };
  }

  async findOne(id: number): Promise<CommonResponseDto> {
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
    id: number,
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

  async remove(id: number): Promise<CommonResponseDto> {
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
