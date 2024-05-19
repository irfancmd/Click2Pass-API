import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  BadRequestException,
  UploadedFiles,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    try {
      return this.questionService.create(createQuestionDto);
    } catch (error) {
      return {
        message: 'An error occurred',
      };
    }
  }

  @Get()
  findAll() {
    try {
      return this.questionService.findAll();
    } catch (error) {
      return {
        message: 'An error occurred',
      };
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.questionService.findOne(id);
    } catch (error) {
      return {
        message: 'An error occurred',
      };
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    try {
      return this.questionService.update(id, updateQuestionDto);
    } catch (error) {
      return {
        message: 'An error occurred',
      };
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.questionService.remove(id);
    } catch (error) {
      return {
        message: 'An error occurred',
      };
    }
  }

  @Post('upload-images/:id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'questionMediaUrl', maxCount: 1 },
        { name: 'answerOption1MediaUrl', maxCount: 1 },
        { name: 'answerOption2MediaUrl', maxCount: 1 },
        { name: 'answerOption3MediaUrl', maxCount: 1 },
        { name: 'answerOption4MediaUrl', maxCount: 1 },
        { name: 'answerOption5MediaUrl', maxCount: 1 },
        { name: 'answerOption6MediaUrl', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: '../../uploads',
          filename: (req, file, cb) => {
            const uniqueSuffix =
              Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(
              null,
              file.fieldname + '-' + uniqueSuffix + extname(file.originalname),
            );
          },
        }),
        fileFilter: (req, file, cb) => {
          if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
            return cb(
              new BadRequestException('Only JPG and PNG files are allowed!'),
              false,
            );
          }
          cb(null, true);
        },
      },
    ),
  )
  uploadImages(
    @Param('id') id: string,
    @UploadedFiles()
    files: {
      questionMediaUrl?: Express.Multer.File[];
      answerOption1MediaUrl?: Express.Multer.File[];
      answerOption2MediaUrl?: Express.Multer.File[];
      answerOption3MediaUrl?: Express.Multer.File[];
      answerOption4MediaUrl?: Express.Multer.File[];
      answerOption5MediaUrl?: Express.Multer.File[];
      answerOption6MediaUrl?: Express.Multer.File[];
    },
  ) {
    try {
      const questionMedia = files.questionMediaUrl[0] ?? null;
      const answerOption1Media = files.answerOption1MediaUrl
        ? files.answerOption1MediaUrl[0]
        : null;
      const answerOption2Media = files.answerOption2MediaUrl
        ? files.answerOption2MediaUrl[0]
        : null;
      const answerOption3Media = files.answerOption3MediaUrl
        ? files.answerOption3MediaUrl[0]
        : null;
      const answerOption4Media = files.answerOption4MediaUrl
        ? files.answerOption4MediaUrl[0]
        : null;
      const answerOption5Media = files.answerOption5MediaUrl
        ? files.answerOption5MediaUrl[0]
        : null;
      const answerOption6Media = files.answerOption6MediaUrl
        ? files.answerOption6MediaUrl[0]
        : null;

      return this.questionService.update(id, {
        questionMediaUrl: questionMedia?.filename ?? null,
        answerOption1MediaUrl: answerOption1Media?.filename ?? null,
        answerOption2MediaUrl: answerOption2Media?.filename ?? null,
        answerOption3MediaUrl: answerOption3Media?.filename ?? null,
        answerOption4MediaUrl: answerOption4Media?.filename ?? null,
        answerOption5MediaUrl: answerOption5Media?.filename ?? null,
        answerOption6MediaUrl: answerOption6Media?.filename ?? null,
      });
    } catch (error) {
      return {
        message: 'An error occurred',
      };
    }
  }
}
