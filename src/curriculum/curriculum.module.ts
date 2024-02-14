import { Module } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { CurriculumController } from './curriculum.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curriculum } from './entities/curriculum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curriculum])],
  controllers: [CurriculumController],
  providers: [CurriculumService],
})
export class CurriculumModule {}
