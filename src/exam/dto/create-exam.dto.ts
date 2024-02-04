import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateExamDto {
  @IsNumber()
  @IsOptional()
  q1Id?: number;

  @IsString()
  @IsOptional()
  q1Ans?: string;

  @IsNumber()
  @IsOptional()
  q2Id?: number;

  @IsString()
  @IsOptional()
  q2Ans?: string;

  @IsNumber()
  @IsOptional()
  q3Id?: number;

  @IsString()
  @IsOptional()
  q3Ans?: string;

  @IsNumber()
  @IsOptional()
  q4Id?: number;

  @IsString()
  @IsOptional()
  q4Ans?: string;

  @IsNumber()
  @IsOptional()
  q5Id?: number;

  @IsString()
  @IsOptional()
  q5Ans?: string;

  @IsNumber()
  @IsOptional()
  q6Id?: number;

  @IsString()
  @IsOptional()
  q6Ans?: string;

  @IsNumber()
  @IsOptional()
  q7Id?: number;

  @IsString()
  @IsOptional()
  q7Ans?: string;

  @IsNumber()
  @IsOptional()
  q8Id?: number;

  @IsString()
  @IsOptional()
  q8Ans?: string;

  @IsNumber()
  @IsOptional()
  q9Id?: number;

  @IsString()
  @IsOptional()
  q9Ans?: string;

  @IsNumber()
  @IsOptional()
  q10Id?: number;

  @IsString()
  @IsOptional()
  q10Ans?: string;

  @IsNumber()
  @IsOptional()
  q11Id?: number;

  @IsString()
  @IsOptional()
  q11Ans?: string;

  @IsNumber()
  @IsOptional()
  q12Id?: number;

  @IsString()
  @IsOptional()
  q12Ans?: string;

  @IsNumber()
  @IsOptional()
  q13Id?: number;

  @IsString()
  @IsOptional()
  q13Ans?: string;

  @IsNumber()
  @IsOptional()
  q14Id?: number;

  @IsString()
  @IsOptional()
  q14Ans?: string;

  @IsNumber()
  @IsOptional()
  q15Id?: number;

  @IsString()
  @IsOptional()
  q15Ans?: string;

  @IsNumber()
  @IsOptional()
  q16Id?: number;

  @IsString()
  @IsOptional()
  q16Ans?: string;

  @IsNumber()
  @IsOptional()
  q17Id?: number;

  @IsString()
  @IsOptional()
  q17Ans?: string;

  @IsNumber()
  @IsOptional()
  q18Id?: number;

  @IsString()
  @IsOptional()
  q18Ans?: string;

  @IsNumber()
  @IsOptional()
  q19Id?: number;

  @IsString()
  @IsOptional()
  q19Ans?: string;

  @IsNumber()
  @IsOptional()
  q20Id?: number;

  @IsString()
  @IsOptional()
  q20Ans?: string;

  @IsDate()
  @IsOptional()
  startTime?: Date;

  @IsDate()
  @IsOptional()
  endTime?: Date;

  @IsNumber()
  @IsOptional()
  examineeId?: number;

  @IsNumber()
  @IsOptional()
  totalScore?: number;

  @IsNumber()
  @IsOptional()
  achievedScore?: number;

  @IsBoolean()
  @IsOptional()
  testCompleted?: boolean;
}
