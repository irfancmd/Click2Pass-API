import { IsArray, IsOptional, IsString } from 'class-validator';
import { CreateLessonDto } from 'src/lesson/dto/create-lesson.dto';

export class CreateChapterDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsArray({ each: true })
  @IsOptional()
  readonly lessons?: CreateLessonDto[];
}
