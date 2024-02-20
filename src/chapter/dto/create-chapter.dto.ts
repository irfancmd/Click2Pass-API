import { IsNumber, IsOptional, IsString } from 'class-validator';
// import { CreateLessonDto } from 'src/lesson/dto/create-lesson.dto';

export class CreateChapterDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsNumber()
  readonly curriculumId: number;

  // @IsArray({ each: true })
  // @IsOptional()
  // readonly lessons?: CreateLessonDto[];
}
