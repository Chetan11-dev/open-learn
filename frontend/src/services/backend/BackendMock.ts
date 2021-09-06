import { Either, Right } from './Either'
import { courses, JohnDoe } from './fixtures'
import HTTPRequestError from './HTTPRequestError'
import { CourseInterface, UserInterface } from './interfaces'
import { Backend } from './backend'

export default class BackendMock extends Backend {
  async findEnrolledCoursesOfUser(userId: string): Promise<Either<HTTPRequestError, CourseInterface[]>> {
    return new Right(courses)
  }

  async findCourseById(courseId: string): Promise<Either<HTTPRequestError, CourseInterface>> {
    return new Right(courses[0])
  }

  async findStudentsOfCourse(courseId: string): Promise<Either<HTTPRequestError, UserInterface[]>> {
    return new Right([JohnDoe])
  }

  async findCoursesByKeyword(keyword: string): Promise<Either<HTTPRequestError, CourseInterface[]>> {
    return new Right(courses)
  }

  async findCoursesCreatedByUser(userId: string): Promise<Either<HTTPRequestError, CourseInterface[]>> {
    return new Right(courses)
  }
}
