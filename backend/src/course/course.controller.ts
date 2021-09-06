import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/user/user.dto';
import { CreateCourseDto, UpdateCourseDto } from './course.dto';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  createCourse(@Body() course: CreateCourseDto) {
    return this.courseService.createCourse(course);
  }

  @Get(':id')
  findCourseById(@Param('id') userId: string) {
    return this.courseService.findCourseById(userId);
  }

  @Patch(':id')
  async updateCourse(
    @Param('id') courseId: string,
    @Body() course: UpdateCourseDto,
  ) {
    await this.courseService.updateCourse(courseId, course);
    return this.findCourseById(courseId);
  }
}
