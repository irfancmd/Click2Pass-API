import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExamService } from './exam.service';
// import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Post()
  // @Body() createExamDto: CreateExamDt
  create(
    @Body()
    body: {
      curriculumId: string;
      chapterId?: string;
      questionSetId?: string;
    },
  ) {
    return this.examService.create(
      body.curriculumId,
      body.chapterId,
      body.questionSetId,
    );
  }

  @Get()
  findAll() {
    return this.examService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto) {
    return this.examService.update(id, updateExamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examService.remove(id);
  }
}
