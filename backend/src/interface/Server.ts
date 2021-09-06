/* eslint-disable @typescript-eslint/no-empty-function */

import {
  UserInterface,
  CourseInterface,
  CreateUserDtoInterface,
  UpdateUserDtoInterface,
  CreateCourseDtoInterface,
  UpdateCourseDtoInterface,
} from './interface';

export default class Server {
  createUser(user: CreateUserDtoInterface) {}

  updateUser(user: UpdateUserDtoInterface) {}

  createCourse(userId: string, course: CreateCourseDtoInterface) {}

  updateCourse(userId: string, course: UpdateCourseDtoInterface) {}

  enrollIntoCourse(userId: string, courseId: string) {}

  findEnrolledCoursesOfUser(userId: string): CourseInterface[] {
    return [];
  }

  findCourseById(courseId: string): CourseInterface {
    return { title: '' };
  }
  findCoursesCreatedByUser(userId: string): CourseInterface[] {
    return [];
  }

  findStudentsOfCourse(courseId: string): UserInterface[] {
    return [];
  }

  findCoursesByKeyword(keyword: string): CourseInterface[] {
    return [];
  }
}
