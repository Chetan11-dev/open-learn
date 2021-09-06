import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserInterface } from 'src/interface/interface';

@Entity()
export class UserEntity implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
}
