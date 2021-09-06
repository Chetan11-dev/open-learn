import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from 'src/course/course.entity';
import { CourseService } from 'src/course/course.service';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Controller('seed')
export class SeedController {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
  ) {
    this.init();
  }
  async init() {
    if (!(await this.hasSeeded())) {
      await this.seed();
      console.log('seeding complete');
    }
    await this.logEntities();
  }

  async seed() {
    const userService = new UserService(
      this.userRepository,
      this.courseRepository,
    );
    const courseService = new CourseService(
      this.userRepository,
      this.courseRepository,
    );
    await userService.createUser({ name: 'John Doe' });
    await userService.createUser({ name: 'Richard Doe' });
    await courseService.createCourse('1', {
      title: 'Introduction to JavaScript',
    });
    await userService.enrollIntoCourse('2', '1');
  }
  private async logEntities() {
    console.log(await this.userRepository.find());
    console.log(await this.courseRepository.find());
  }

  async hasSeeded() {
    return (await this.userRepository.find()).length > 0;
  }
}
