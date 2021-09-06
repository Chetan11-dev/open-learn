import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Get(':id')
  findUserById(@Param('id') userId: string) {
    return this.userService.findUserById(userId);
  }

  @Patch(':id')
  async updateUser(@Param('id') userId: string, @Body() user: UpdateUserDto) {
    await this.userService.updateUser(userId, user);
    return this.userService.findUserById(userId);
  }
}
