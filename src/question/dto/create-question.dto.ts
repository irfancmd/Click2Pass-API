import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  questionText: string;

  @IsString()
  @IsOptional()
  questionMediaUrl?: string;

  @IsNumber()
  @IsOptional()
  questionMediaType?: number;

  @IsNumber()
  @IsOptional()
  numberOfOptionsVisible?: number;

  @IsNumber()
  @IsOptional()
  questionType?: number;

  @IsString()
  correctAnswerText: string;

  @IsString()
  answerOption1Text: string;

  @IsString()
  @IsOptional()
  answerOption1MediaUrl?: string;

  @IsNumber()
  @IsOptional()
  answerOption1MediaType?: number;

  @IsString()
  @IsOptional()
  answerOption2Text?: string;

  @IsString()
  @IsOptional()
  answerOption2MediaUrl?: string;

  @IsNumber()
  @IsOptional()
  answerOption2MediaType?: number;

  @IsString()
  @IsOptional()
  answerOption3Text?: string;

  @IsString()
  @IsOptional()
  answerOption3MediaUrl?: string;

  @IsNumber()
  @IsOptional()
  answerOption3MediaType?: number;

  @IsString()
  @IsOptional()
  answerOption4Text?: string;

  @IsString()
  @IsOptional()
  answerOption4MediaUrl?: string;

  @IsNumber()
  @IsOptional()
  answerOption4MediaType?: number;

  @IsString()
  @IsOptional()
  answerOption5Text?: string;

  @IsString()
  @IsOptional()
  answerOption5MediaUrl?: string;

  @IsNumber()
  @IsOptional()
  answerOption5MediaType?: number;

  @IsString()
  @IsOptional()
  answerOption6Text?: string;

  @IsString()
  @IsOptional()
  answerOption6MediaUrl?: string;

  @IsNumber()
  @IsOptional()
  answerOption6MediaType?: number;

  @IsString()
  @IsOptional()
  chapterId?: string;

  @IsString()
  @IsOptional()
  lessonId: string;

  @IsString()
  @IsOptional()
  curriculumId?: string;
}
