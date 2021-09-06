import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { CourseInterface } from 'src/interface/interface';
import { UserEntity } from 'src/user/user.entity';

@Entity()
export class CourseEntity implements CourseInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => UserEntity, (user) => user.createdCourses)
  creator: UserEntity;

  @ManyToMany(() => UserEntity, (user) => user.enrolledCourses)
  @JoinTable()
  students: UserEntity[];
}
