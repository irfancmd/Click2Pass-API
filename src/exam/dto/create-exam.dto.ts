import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateExamDto {
  @IsString()
  @IsOptional()
  q1Id?: string;

  @IsString()
  @IsOptional()
  q1Ans?: string;

  @IsString()
  @IsOptional()
  q2Id?: string;

  @IsString()
  @IsOptional()
  q2Ans?: string;

  @IsString()
  @IsOptional()
  q3Id?: string;

  @IsString()
  @IsOptional()
  q3Ans?: string;

  @IsString()
  @IsOptional()
  q4Id?: string;

  @IsString()
  @IsOptional()
  q4Ans?: string;

  @IsString()
  @IsOptional()
  q5Id?: string;

  @IsString()
  @IsOptional()
  q5Ans?: string;

  @IsString()
  @IsOptional()
  q6Id?: string;

  @IsString()
  @IsOptional()
  q6Ans?: string;

  @IsString()
  @IsOptional()
  q7Id?: string;

  @IsString()
  @IsOptional()
  q7Ans?: string;

  @IsString()
  @IsOptional()
  q8Id?: string;

  @IsString()
  @IsOptional()
  q8Ans?: string;

  @IsString()
  @IsOptional()
  q9Id?: string;

  @IsString()
  @IsOptional()
  q9Ans?: string;

  @IsString()
  @IsOptional()
  q10Id?: string;

  @IsString()
  @IsOptional()
  q10Ans?: string;

  @IsString()
  @IsOptional()
  q11Id?: string;

  @IsString()
  @IsOptional()
  q11Ans?: string;

  @IsString()
  @IsOptional()
  q12Id?: string;

  @IsString()
  @IsOptional()
  q12Ans?: string;

  @IsString()
  @IsOptional()
  q13Id?: string;

  @IsString()
  @IsOptional()
  q13Ans?: string;

  @IsString()
  @IsOptional()
  q14Id?: string;

  @IsString()
  @IsOptional()
  q14Ans?: string;

  @IsString()
  @IsOptional()
  q15Id?: string;

  @IsString()
  @IsOptional()
  q15Ans?: string;

  @IsString()
  @IsOptional()
  q16Id?: string;

  @IsString()
  @IsOptional()
  q16Ans?: string;

  @IsString()
  @IsOptional()
  q17Id?: string;

  @IsString()
  @IsOptional()
  q17Ans?: string;

  @IsString()
  @IsOptional()
  q18Id?: string;

  @IsString()
  @IsOptional()
  q18Ans?: string;

  @IsString()
  @IsOptional()
  q19Id?: string;

  @IsString()
  @IsOptional()
  q19Ans?: string;

  @IsString()
  @IsOptional()
  q20Id?: string;

  @IsString()
  @IsOptional()
  q20Ans?: string;

  @IsDate()
  @IsOptional()
  startTime?: Date;

  @IsDate()
  @IsOptional()
  endTime?: Date;

  @IsString()
  @IsOptional()
  examineeId?: string;

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
