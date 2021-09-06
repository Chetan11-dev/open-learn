import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from 'src/course/course.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
  ) {}
  findEnrolledCoursesOfUser(userId: string) {
    return this.userRepository.findOne(userId, {
      relations: ['enrolledCourses'],
    });
  }

  findCoursesCreatedByUser(userId: string) {
    return this.userRepository.findOne(userId, {
      relations: ['createdCourses'],
    });
  }

  async enrollIntoCourse(userId: string, courseId: string) {
    const user = await this.findUserById(userId);
    const course = await this.courseRepository.findOne(courseId);
    user.enrolledCourses = [course];
    return this.userRepository.save(user);
  }

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
