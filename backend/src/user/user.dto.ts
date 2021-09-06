import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import {
  CreateUserDtoInterface,
  UpdateUserDtoInterface,
  UserInterface,
} from 'src/interface/interface';

export class UpdateUserDto implements UpdateUserDtoInterface {
  @IsOptional()
  @IsString()
  name: string;
}

export class CreateUserDto implements CreateUserDtoInterface {
  @IsString()
  name: string;
}
