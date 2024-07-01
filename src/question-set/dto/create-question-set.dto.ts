import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateQuestionSetDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  readonly curriculumId: string;

  @IsArray()
  readonly questionIds: string[];

  @IsNumber()
  @IsOptional()
  readonly drivingSetType: number;
}
