import { Injectable } from '@nestjs/common';
import { CreateCurriculumDto } from './dto/create-curriculum.dto';
import { UpdateCurriculumDto } from './dto/update-curriculum.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curriculum } from './entities/curriculum.entity';
import { Repository } from 'typeorm';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';

@Injectable()
export class CurriculumService {
  constructor(
    @InjectRepository(Curriculum)
    private readonly curriculumRepository: Repository<Curriculum>,
  ) {}

  async create(
    createCurriculumDto: CreateCurriculumDto,
  ): Promise<CommonResponseDto> {
    let curriculum = this.curriculumRepository.create(createCurriculumDto);

    if (curriculum) {
      curriculum = await this.curriculumRepository.save(curriculum);

      return {
        status: 0,
        message: 'Curriculum created successfully.',
      };
    }

    return {
      status: 0,
      message: "Couldn't create curriculum.",
    };
  }

  async findAll(): Promise<CommonResponseDto> {
    const curriculums = await this.curriculumRepository.find();

    return {
      status: curriculums && curriculums.length > 0 ? 0 : 1,
      data: curriculums,
    };
  }

  async findOne(id: number): Promise<CommonResponseDto> {
    const curriculum = await this.curriculumRepository.findOne({
      where: {
        id,
      },
    });

    if (curriculum) {
      return {
        status: 0,
        data: curriculum,
      };
    }

    return {
      status: 1,
      message: "Couldn't find curriculum",
    };
  }

  async update(
    id: number,
    updateCurriculumDto: UpdateCurriculumDto,
  ): Promise<CommonResponseDto> {
    let updatedCurriculum = await this.curriculumRepository.preload({
      id,
      ...updateCurriculumDto,
    });

    if (updatedCurriculum) {
      updatedCurriculum =
        await this.curriculumRepository.save(updatedCurriculum);

      return {
        status: 0,
        data: updatedCurriculum,
      };
    }

    return {
      status: 1,
      message: "Couldn't find curriculum to update",
    };
  }

  async remove(id: number): Promise<CommonResponseDto> {
    const deletedResult = await this.curriculumRepository.delete({ id });

    if (deletedResult.affected > 0) {
      return {
        status: 0,
        message: 'Curriculum deleted successfully',
      };
    }

    return {
      status: 1,
      message: 'Curriculum find curriculum to delete.',
    };
  }
}
