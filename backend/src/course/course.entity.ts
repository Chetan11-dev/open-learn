import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsBoolean, IsInt } from 'class-validator';

@Entity()
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ length: 500 })
  name: string;
}
