import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Like, Repository, ILike } from 'typeorm';
import { CreateCourseDto, UpdateCourseDto } from './course.dto';
import { CourseEntity } from './course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
  ) {}

  async createCourse(userId: string, course: CreateCourseDto) {
    const user = await this.userRepository.findOne(userId);
    return this.courseRepository.save({ ...course, creator: user });
  }

  findStudentsOfCourse(courseId: string) {
    return this.courseRepository
      .findOne(courseId, { relations: ['students'] })
      .then((c) => c.students);
  }

  findCourseById(courseId: string) {
    return this.courseRepository.findOne(courseId);
  }

  findCoursesByKeyword(keyword: string) {
    return this.courseRepository.find({
      title: ILike(`%${keyword}%`),
    });
  }

  async updateCourse(courseId: string, course: UpdateCourseDto) {
    await this.courseRepository.update(courseId, course);
    return this.findCourseById(courseId);
  }
}
