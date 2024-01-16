import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionSetService } from './question-set.service';
import { CreateQuestionSetDto } from './dto/create-question-set.dto';
import { UpdateQuestionSetDto } from './dto/update-question-set.dto';

@Controller('question-set')
export class QuestionSetController {
  constructor(private readonly questionSetService: QuestionSetService) {}

  @Post()
  create(@Body() createQuestionSetDto: CreateQuestionSetDto) {
    return this.questionSetService.create(createQuestionSetDto);
  }

  @Get()
  findAll() {
    return this.questionSetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionSetService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionSetDto: UpdateQuestionSetDto,
  ) {
    return this.questionSetService.update(+id, updateQuestionSetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionSetService.remove(+id);
  }
}
