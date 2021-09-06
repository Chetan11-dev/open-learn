/* eslint-disable @typescript-eslint/no-empty-function */

import { UserInterface, CourseInterface } from './interface';

export default class Server {
  createUser(user: UserInterface) {}

  updateUser(user: UserInterface) {}

  createCourse(userId: string, course: CourseInterface) {}

  updateCourse(userId: string, course: CourseInterface) {}

  enrollIntoCourse(userId: string, courseId: string) {}

  findEnrolledCoursesOfUser(userId: string): CourseInterface[] {
    return [];
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
