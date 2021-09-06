import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsBoolean, IsInt } from 'class-validator';
import { UserInterface } from 'src/interface/interface';

@Entity()
export class UserEntity implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ length: 500 })
  name: string;
}
