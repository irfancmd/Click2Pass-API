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
import { QuestionSet } from 'src/question-set/entities/question-set.entity';

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
    @InjectRepository(QuestionSet)
    private readonly questionSetRepository: Repository<QuestionSet>,
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
        data: question,
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
      order: { curriculumId: 'ASC', chapterId: 'ASC' },
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
    const prevData = await this.questionRepository.findOne({ where: { id } });

    // Don't turn media into null if they're not provided
    if (prevData) {
      if (!updateQuestionDto.questionMediaUrl) {
        updateQuestionDto.questionMediaUrl = prevData.questionMediaUrl;
        updateQuestionDto.questionMediaType = prevData.questionMediaType;
      }

      if (!updateQuestionDto.answerOption1MediaUrl) {
        updateQuestionDto.answerOption1MediaUrl =
          prevData.answerOption1MediaUrl;
        updateQuestionDto.answerOption1MediaType =
          prevData.answerOption1MediaType;
      }

      if (!updateQuestionDto.answerOption2MediaUrl) {
        updateQuestionDto.answerOption2MediaUrl =
          prevData.answerOption2MediaUrl;
        updateQuestionDto.answerOption2MediaType =
          prevData.answerOption2MediaType;
      }

      if (!updateQuestionDto.answerOption3MediaUrl) {
        updateQuestionDto.answerOption3MediaUrl =
          prevData.answerOption3MediaUrl;
        updateQuestionDto.answerOption3MediaType =
          prevData.answerOption3MediaType;
      }
      if (!updateQuestionDto.answerOption4MediaUrl) {
        updateQuestionDto.answerOption4MediaUrl =
          prevData.answerOption4MediaUrl;
        updateQuestionDto.answerOption4MediaType =
          prevData.answerOption4MediaType;
      }
      if (!updateQuestionDto.answerOption5MediaUrl) {
        updateQuestionDto.answerOption5MediaUrl =
          prevData.answerOption5MediaUrl;
        updateQuestionDto.answerOption5MediaType =
          prevData.answerOption5MediaType;
      }
      if (!updateQuestionDto.answerOption6MediaUrl) {
        updateQuestionDto.answerOption6MediaUrl =
          prevData.answerOption6MediaUrl;
        updateQuestionDto.answerOption6MediaType =
          prevData.answerOption6MediaType;
      }
    }

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
    curriculumId: string,
    totalExpectedQuestion: number = 20,
  ): Promise<{ chapterId: string; questionId: string }[]> {
    const questionCount = await this.questionRepository.count({
      where: {
        curriculumId: curriculumId,
      },
    });

    // if (totalExpectedQuestion > questionCount) {
    //   return [];
    // }

    const chapters = await this.chapterRepository.find({
      where: {
        curriculumId: curriculumId,
      },
    });

    if (chapters.length === 0) {
      return [];
    }

    let questionsPerChapter = Math.floor(
      totalExpectedQuestion / chapters.length,
    );

    if (questionCount < questionsPerChapter) {
      questionsPerChapter = Math.floor(questionCount / chapters.length);
    }

    const questionSet: Set<{ chapterId: string; questionId: string }> =
      new Set();
    const qIds = [];

    // let totalQuestionsAdded = 0;

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
        const randomIndex = Math.floor(Math.random() * questions.length);

        const questionObj = {
          chapterId: chapter.id,
          questionId: questions[randomIndex].id,
        };

        // if (!questionSet.has(questionObj)) {
        if (!qIds.includes(questionObj.questionId)) {
          questionSet.add(questionObj);
          qIds.push(questionObj.questionId);
          count++;
          // totalQuestionsAdded++;
        } else {
          continue;
        }
      }
    }

    // If we still haven't reached 20 questoins, just traverse though chapters and keep adding questions
    // without considering per chapter limits.
    // if (totalQuestionsAdded < totalExpectedQuestion) {
    //   for (const chapter of chapters) {
    //     const questions = await this.questionRepository.find({
    //       where: {
    //         chapterId: chapter.id,
    //       },
    //       relations: ['chapter', 'lesson', 'curriculum'],
    //     });

    //     let count = 0;

    //     while (
    //       totalQuestionsAdded < totalExpectedQuestion &&
    //       count < questions.length &&
    //       qIds.length < questionCount
    //     ) {
    //       const randomIndex = Math.floor(Math.random() * questions.length);

    //       const questionObj = {
    //         chapterId: chapter.id,
    //         questionId: questions[randomIndex].id,
    //       };

    //       // if (!questionSet.has(questionObj)) {
    //       if (!qIds.includes(questionObj.questionId)) {
    //         questionSet.add(questionObj);
    //         qIds.push(questionObj.questionId);
    //         count++;
    //         totalQuestionsAdded++;
    //       } else {
    //         continue;
    //       }
    //     }

    //     if (totalQuestionsAdded == totalExpectedQuestion) {
    //       break;
    //     }
    //   }
    // }

    const questions = Array.from(questionSet);
    this.shuffle(questions);

    return questions;
  }

  async getRandomQuestionsForDriving(): Promise<
    { chapterId: string; questionId: string }[]
  > {
    let roadSignQuestions = [];

    const roadSignQuestionSets = await this.questionSetRepository.find({
      where: { drivingSetType: 1 },
      relations: ['questions', 'curriculum'],
    });

    roadSignQuestionSets.forEach((s) => {
      roadSignQuestions.push(...s.questions);
    });

    let rulesOfRoadQuestions = [];

    const rulesOfTheRoadQuestionSets = await this.questionSetRepository.find({
      where: { drivingSetType: 2 },
      relations: ['questions', 'curriculum'],
    });

    rulesOfTheRoadQuestionSets.forEach((s) => {
      rulesOfRoadQuestions.push(...s.questions);
    });

    if (roadSignQuestions.length == 0 || rulesOfRoadQuestions.length == 0) {
      return [];
    }

    const questionSet: Set<{ chapterId: string; questionId: string }> =
      new Set();
    const qIds = [];

    // First 20 question will come from road signs.
    // Make sure each question is unique
    roadSignQuestions = this.getDistinctObjectsById(roadSignQuestions);

    let roadSignRemaining =
      roadSignQuestions.length < 20 ? roadSignQuestions.length : 20;

    while (roadSignRemaining > 0) {
      const randomIndex = Math.floor(Math.random() * roadSignQuestions.length);

      const questionObj = {
        chapterId: roadSignQuestions[randomIndex].chapterId,
        questionId: roadSignQuestions[randomIndex].id,
      };

      if (!qIds.includes(questionObj.questionId)) {
        questionSet.add(questionObj);
        qIds.push(questionObj.questionId);
        --roadSignRemaining;
      } else {
        continue;
      }
    }

    // Last 20 question will come from rules of the road.
    // Make sure each question is unique
    rulesOfRoadQuestions = this.getDistinctObjectsById(rulesOfRoadQuestions);
    // Also before adding questions, make sure none of the questions in this set appear in any previous set that we checked
    rulesOfRoadQuestions = rulesOfRoadQuestions.filter(
      (q) => !qIds.includes(q.id),
    );

    let rulesOfRoadRemaining =
      rulesOfRoadQuestions.length < 20 ? rulesOfRoadQuestions.length : 20;

    while (rulesOfRoadRemaining > 0) {
      const randomIndex = Math.floor(
        Math.random() * rulesOfRoadQuestions.length,
      );

      const questionObj = {
        chapterId: rulesOfRoadQuestions[randomIndex].chapterId,
        questionId: rulesOfRoadQuestions[randomIndex].id,
      };

      if (!qIds.includes(questionObj.questionId)) {
        questionSet.add(questionObj);
        qIds.push(questionObj.questionId);
        --rulesOfRoadRemaining;
      } else {
        continue;
      }
    }

    const questions = Array.from(questionSet);

    return questions;
  }

  async getChapterWiseQuestions(chapterId: string) {
    const questions = await this.questionRepository.find({
      where: {
        chapterId: chapterId,
      },
      relations: ['chapter', 'lesson', 'curriculum'],
    });

    this.shuffle(questions);

    return questions;
  }

  shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  getDistinctObjectsById(array) {
    const idMap = new Map();

    array.forEach((obj) => {
      if (!idMap.has(obj.id)) {
        idMap.set(obj.id, obj);
      }
    });

    return Array.from(idMap.values());
  }
}
