/* eslint-disable @typescript-eslint/no-empty-interface */
export interface UserInterface {
  name: string;
}

export interface CourseInterface {
  title: string;
}

export interface UpdateUserDtoInterface extends UserInterface {}

export interface CreateUserDtoInterface extends UserInterface {}

export interface UpdateCourseDtoInterface extends CourseInterface {}

export interface CreateCourseDtoInterface extends CourseInterface {}
