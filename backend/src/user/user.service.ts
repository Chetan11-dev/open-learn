import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  createUser(user: CreateUserDto) {
    return this.userRepository.save({ ...user });
  }

  findUserById(userId: string) {
    return this.userRepository.findOne(userId);
  }

  async updateUser(userId: string, user: UpdateUserDto) {
    await this.userRepository.update(userId, user);
    return this.findUserById(userId);
  }
}
