import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseEntity } from './course/course.entity';
import { CourseModule } from './course/course.module';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'open_learn',
      entities: [UserEntity, CourseEntity],
      synchronize: true,
      // dropSchema: true,
    }),
    UserModule,
    CourseModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
