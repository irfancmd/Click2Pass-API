import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonResponseDto } from 'src/common/dto/common-response.dto';
import * as bcrypt from 'bcrypt';
import { AuthRequestDto } from 'src/common/dto/auth-request.dto';

@Injectable()
export class UserService {
  private SALT_ROUNDS: number = 10;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<CommonResponseDto> {
    let user = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (user) {
      return {
        status: 1,
        message: 'Email already in use.',
      };
    }

    user = this.userRepository.create(createUserDto);

    if (user) {
      user.password = await bcrypt.hash(user.password, this.SALT_ROUNDS);

      user = await this.userRepository.save(user);

      return {
        status: 0,
        message: 'User created successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't create user.",
    };
  }

  async findAll(): Promise<CommonResponseDto> {
    const users = await this.userRepository.find();

    return {
      status: users && users.length > 0 ? 0 : 1,
      data: users,
    };
  }

  async findOne(id: number): Promise<CommonResponseDto> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (user) {
      return {
        status: 0,
        data: user,
      };
    }

    return {
      status: 1,
      message: "Couldn't find user.",
    };
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<CommonResponseDto> {
    if (updateUserDto.email) {
      const user = await this.userRepository.findOneBy({
        email: updateUserDto.email,
      });

      if (user) {
        return {
          status: 1,
          message: 'Email already in use.',
        };
      }
    }

    let updatedUser = await this.userRepository.preload({
      id,
      ...updateUserDto,
    });

    if (updatedUser) {
      updatedUser = await this.userRepository.save(updatedUser);

      return {
        status: 0,
        data: updatedUser,
      };
    }

    return {
      status: 1,
      message: "Couldn't find user to update.",
    };
  }

  async remove(id: number): Promise<CommonResponseDto> {
    const deleteResult = await this.userRepository.delete({ id });

    if (deleteResult.affected > 0) {
      return {
        status: 0,
        message: 'User deleted successfully.',
      };
    }

    return {
      status: 1,
      message: "Couldn't find user to delete.",
    };
  }

  async authenticateUser(
    authRequestDto: AuthRequestDto,
  ): Promise<CommonResponseDto> {
    const user = await this.userRepository.findOneBy({
      email: authRequestDto.email,
    });

    if (user) {
      // The second parameter of compare is the hashed password.
      if (await bcrypt.compare(authRequestDto.password, user.password)) {
        return {
          status: 0,
          data: {
            name: user.name,
            email: user.email,
          },
        };
      } else {
        return {
          status: 1,
          message: 'Invalid password.',
        };
      }
    }

    return {
      status: 1,
      message: "Couldn't find user with the give email.",
    };
  }
}
