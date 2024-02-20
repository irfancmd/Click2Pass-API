import { IsOptional, IsString } from 'class-validator';

export class CreateLessonDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  readonly chapterId: string;
}
