import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';
import { LessonService } from 'src/lesson/lesson.service';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly lessonService: LessonService,
  ) {}

  async create(
    createCategoryDto: CreateCategoryDto,
  ): Promise<CommonResponseDto> {
    let category = this.categoryRepository.create(createCategoryDto);

    if (category) {
      category = await this.categoryRepository.save(category);

      if (createCategoryDto.lessons) {
        await this.lessonService.preloadLessons(
          createCategoryDto.lessons,
          category,
        );
      }

      return {
        status: 0,
        message: 'Category created successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't create category.",
    };
  }

  async findAll(): Promise<CommonResponseDto> {
    const categories = await this.categoryRepository.find({
      relations: ['lessons'],
    });

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
      relations: ['lessons'],
    });

    if (category) {
      return {
        status: 0,
        data: category,
      };
    }

    return {
      status: 1,
      message: "Couldn't find category.",
    };
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<CommonResponseDto> {
    let updatedCategory = await this.categoryRepository.preload({
      id,
      name: updateCategoryDto.name,
      description: updateCategoryDto.description,
      // Intentionally not recieving lessons while updating category
    });

    if (updatedCategory) {
      updatedCategory = await this.categoryRepository.save(updatedCategory);

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
