import { courses, JohnDoe } from './fixtures'
import {
  CourseInterface,
  CreateCourseDtoInterface,
  CreateUserDtoInterface,
  UpdateCourseDtoInterface,
  UpdateUserDtoInterface,
  UserInterface,
} from './interfaces'

class Backend {
  createUser(user: CreateUserDtoInterface) {}

  updateUser(user: UpdateUserDtoInterface) {}

  createCourse(userId: string, course: CreateCourseDtoInterface) {}

  updateCourse(userId: string, course: UpdateCourseDtoInterface) {}

  enrollIntoCourse(userId: string, courseId: string) {}

  findEnrolledCoursesOfUser(userId: string): CourseInterface[] {
    return courses
  }

  findCourseById(courseId: string): CourseInterface {
    return courses[0]
  }

  findCoursesCreatedByUser(userId: string): CourseInterface[] {
    return courses
  }

  findStudentsOfCourse(courseId: string): UserInterface[] {
    return [JohnDoe]
  }

  findCoursesByKeyword(keyword: string): CourseInterface[] {
    return courses
  }
}
export default Backend
