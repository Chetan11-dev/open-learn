import { IsOptional, IsString, Length } from 'class-validator';
import {
  CourseInterface,
  CreateCourseDtoInterface,
  UpdateCourseDtoInterface,
  UserInterface,
} from 'src/interface/interface';

export class UpdateCourseDto implements UpdateCourseDtoInterface {
  @IsOptional()
  @IsString()
  title: string;
}

export class CreateCourseDto implements CreateCourseDtoInterface {
  @IsString()
  title: string;
}
