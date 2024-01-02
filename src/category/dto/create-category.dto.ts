import { IsArray, IsString } from 'class-validator';
import { CreateLessonDto } from 'src/lesson/dto/create-lesson.dto';

export class CreateCategoryDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description?: string;

  @IsArray({ each: true })
  readonly lessons?: CreateLessonDto[];
}
