import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { CourseInterface, UserInterface } from 'src/interface/interface';

export class UpdateCourseDto implements CourseInterface {
  @IsOptional()
  @IsString()
  title: string;
}

export class CreateCourseDto implements CourseInterface {
  @IsString()
  title: string;
}
