import { Either } from './Either'
import HTTPRequestError from './HTTPRequestError'
import {
  CourseInterface,
  CreateCourseDtoInterface,
  CreateUserDtoInterface,
  UpdateCourseDtoInterface,
  UpdateUserDtoInterface,
  UserInterface,
} from './interfaces'
import { getEndpoint, mapError, mapResponse, withJsonContentType } from './utils'

export class Backend {
  createUser(user: CreateUserDtoInterface) {
    return fetch(getEndpoint('user'), {
      method: 'POST',
      body: JSON.stringify(user),
      headers: withJsonContentType({}),
    })
      .then(mapResponse)
      .catch(mapError)
  }

  findUserById(userId: string): Promise<Either<HTTPRequestError, UserInterface>> {
    return fetch(getEndpoint(`user/${userId}`), {
      method: 'GET',
      headers: withJsonContentType({}),
    })
      .then(mapResponse)
      .catch(mapError)
  }

  findCoursesCreatedByUser(userId: string): Promise<Either<HTTPRequestError, CourseInterface[]>> {
    return fetch(getEndpoint(`user/${userId}/created-courses`), {
      method: 'GET',
      headers: withJsonContentType({}),
    })
      .then(mapResponse)
      .catch(mapError)
  }

  findEnrolledCoursesOfUser(userId: string): Promise<Either<HTTPRequestError, CourseInterface[]>> {
    return fetch(getEndpoint(`user/${userId}/enrolled-courses`), {
      method: 'GET',
      headers: withJsonContentType({}),
    })
      .then(mapResponse)
      .catch(mapError)
  }

  updateUser(userId: string, user: UpdateUserDtoInterface): Promise<Either<HTTPRequestError, UserInterface>> {
    return fetch(getEndpoint(`user/${userId}`), {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: withJsonContentType({}),
    })
      .then(mapResponse)
      .catch(mapError)
  }

  enrollIntoCourse(userId: string, courseId: string) {
    return fetch(getEndpoint(`user/${userId}/course/${courseId}`), {
      method: 'PATCH',
      headers: withJsonContentType({}),
    })
      .then(mapResponse)
      .catch(mapError)
  }

  createCourse(course: CreateCourseDtoInterface) {
    return fetch(getEndpoint('course'), {
      method: 'POST',
      body: JSON.stringify(course),
      headers: withJsonContentType({}),
    })
      .then(mapResponse)
      .catch(mapError)
  }

  updateCourse(courseId: string, course: UpdateCourseDtoInterface): Promise<Either<HTTPRequestError, CourseInterface>> {
    return fetch(getEndpoint(`course/${courseId}`), {
      method: 'PATCH',
      body: JSON.stringify(course),
      headers: withJsonContentType({}),
    })
      .then(mapResponse)
      .catch(mapError)
  }

  findCourseById(courseId: string): Promise<Either<HTTPRequestError, CourseInterface>> {
    return fetch(getEndpoint(`course/${courseId}`), {
      method: 'GET',
      headers: withJsonContentType({}),
    })
      .then(mapResponse)
      .catch(mapError)
  }

  findStudentsOfCourse(courseId: string): Promise<Either<HTTPRequestError, UserInterface[]>> {
    return fetch(getEndpoint(`course/${courseId}/students`), {
      method: 'GET',
      headers: withJsonContentType({}),
    })
      .then(mapResponse)
      .catch(mapError)
  }

  findCoursesByKeyword(keyword: string): Promise<Either<HTTPRequestError, CourseInterface[]>> {
    return fetch(getEndpoint(`course/?keyword=${encodeURIComponent(keyword)}`), {
      method: 'GET',
      headers: withJsonContentType({}),
    })
      .then(mapResponse)
      .catch(mapError)
  }
}

export default Backend
