import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/user/user.dto';
import { CreateCourseDto, UpdateCourseDto } from './course.dto';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  createCourse(@Body() course: CreateCourseDto) {
    return this.courseService.createCourse('1', course);
  }

  @Get(':id/students')
  findStudentsOfCourse(@Param('id') courseId: string) {
    return this.courseService.findStudentsOfCourse(courseId);
  }

  @Get(':id')
  findCourseById(@Param('id') userId: string) {
    return this.courseService.findCourseById(userId);
  }

  @Get()
  async findCoursesByKeyword(@Query('keyword') keyword: string) {
    console.log(await this.courseService.findCoursesByKeyword(keyword));
    return this.courseService.findCoursesByKeyword(keyword);
  }

  @Patch(':id')
  updateCourse(@Param('id') courseId: string, @Body() course: UpdateCourseDto) {
    return this.courseService.updateCourse(courseId, course);
  }
}
