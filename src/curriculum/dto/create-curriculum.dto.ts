import { IsOptional, IsString } from 'class-validator';

export class CreateCurriculumDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}
