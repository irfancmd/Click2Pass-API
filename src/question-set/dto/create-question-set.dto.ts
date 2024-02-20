import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateQuestionSetDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsArray()
  readonly questionIds: string[];
}
