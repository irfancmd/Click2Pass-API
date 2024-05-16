import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionService.update(id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(id);
  }

  @Post('upload-images/:id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'questionMediaUrl', maxCount: 1 },
      { name: 'answerOption1MediaUrl', maxCount: 1 },
      { name: 'answerOption2MediaUrl', maxCount: 1 },
      { name: 'answerOption3MediaUrl', maxCount: 1 },
      { name: 'answerOption4MediaUrl', maxCount: 1 },
      { name: 'answerOption5MediaUrl', maxCount: 1 },
      { name: 'answerOption6MediaUrl', maxCount: 1 },
    ]),
  )
  uploadImages(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // new MaxFileSizeValidator({ maxSize: 1000 }),
          // new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log(id);
    console.log(file);
  }
}
