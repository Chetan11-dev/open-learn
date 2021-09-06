import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { UserInterface } from 'src/interface/interface';

export class UpdateUserDto implements UserInterface {
  @IsOptional()
  @IsString()
  name: string;
}

export class CreateUserDto implements UserInterface {
  @IsString()
  name: string;
}
