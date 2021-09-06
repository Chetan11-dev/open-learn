import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id/enrolled-courses')
  findEnrolledCoursesOfUser(@Param('id') userId: string) {
    return this.userService.findEnrolledCoursesOfUser(userId);
  }
  @Get(':id/created-courses')
  findCoursesCreatedByUser(@Param('id') userId: string) {
    return this.userService.findCoursesCreatedByUser(userId);
  }

  @Patch(':id/course/:courseId')
  async enrollIntoCourse(
    @Param('id') userId: string,
    @Param('courseId') courseId: string,
  ) {
    return this.userService.enrollIntoCourse(userId, courseId);
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Get(':id')
  findUserById(@Param('id') userId: string) {
    return this.userService.findUserById(userId);
  }

  @Patch(':id')
  updateUser(@Param('id') userId: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUser(userId, user);
  }
}
