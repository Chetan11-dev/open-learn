import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from 'src/course/course.entity';
import { UserEntity } from 'src/user/user.entity';
import { SeedController } from './seed.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, CourseEntity])],
  controllers: [SeedController],
})
export class SeedModule {}
