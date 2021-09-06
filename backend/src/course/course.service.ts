import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto, UpdateCourseDto } from './course.dto';
import { CourseEntity } from './course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
  ) {}

  createCourse(course: CreateCourseDto) {
    return this.courseRepository.save({ ...course });
  }

  findCourseById(courseId: string) {
    return this.courseRepository.findOne(courseId);
  }

  updateCourse(courseId: string, course: UpdateCourseDto) {
    return this.courseRepository.update(courseId, course);
  }
}
