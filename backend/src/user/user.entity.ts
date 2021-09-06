import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { UserInterface } from 'src/interface/interface';
import { CourseEntity } from 'src/course/course.entity';

@Entity()
export class UserEntity implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => CourseEntity, (course) => course.creator)
  createdCourses: CourseEntity[];

  @ManyToMany(() => CourseEntity, (course) => course.students)
  enrolledCourses: CourseEntity[];
}
