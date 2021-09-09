/* eslint-disable class-methods-use-this */
import { Either, Right } from './Either'
import { courses, JohnDoe } from './fixtures'
import HTTPRequestError from './HTTPRequestError'
import { CourseInterface, CourseMetaInterface, UserInterface } from './interfaces'
import Backend from './backend'

class BackendMock extends Backend {
    async findEnrolledCoursesOfUser(userId: string): Promise<Either<HTTPRequestError, CourseMetaInterface[]>> {
        return new Right(courses)
    }

    async findCourseById(courseId: string): Promise<Either<HTTPRequestError, CourseInterface>> {
        return new Right(courses[0])
    }

    async findStudentsOfCourse(courseId: string): Promise<Either<HTTPRequestError, UserInterface[]>> {
        return new Right([JohnDoe])
    }

    async findCoursesByKeyword(keyword: string): Promise<Either<HTTPRequestError, CourseMetaInterface[]>> {
        return new Right(courses)
    }

    async findCoursesCreatedByUser(userId: string): Promise<Either<HTTPRequestError, CourseMetaInterface[]>> {
        return new Right(courses)
    }
}
export default BackendMock
