import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CourseInterface } from 'src/interface/interface';

@Entity()
export class CourseEntity implements CourseInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
