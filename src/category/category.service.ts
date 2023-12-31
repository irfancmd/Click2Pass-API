import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto): CommonResponseDto {
    const category = this.categoryRepository.create(createCategoryDto);

    if (category) {
      return {
        status: 0,
        message: 'Category created successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't create Category.",
    };
  }

  async findAll(): Promise<CommonResponseDto> {
    const categories = await this.categoryRepository.find();

    return {
      status: categories && categories.length > 0 ? 0 : 1,
      data: categories,
    };
  }

  async findOne(id: number): Promise<CommonResponseDto> {
    const category = await this.categoryRepository.find({
      where: {
        id,
      },
    });

    if (category) {
      return {
        status: 0,
        data: category,
      };
    }

    return {
      status: 1,
      message: "Couldn't find Category.",
    };
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<CommonResponseDto> {
    const updatedCategory = await this.categoryRepository.preload({
      id,
      ...updateCategoryDto,
    });

    if (updatedCategory) {
      return {
        status: 0,
        data: updatedCategory,
      };
    }

    return {
      status: 1,
      message: "Couldn't find category to update.",
    };
  }

  async remove(id: number): Promise<CommonResponseDto> {
    const deleteResult = await this.categoryRepository.delete({ id });

    if (deleteResult.affected > 0) {
      return {
        status: 0,
        message: 'Category deleted successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't find category to delete.",
    };
  }
}
