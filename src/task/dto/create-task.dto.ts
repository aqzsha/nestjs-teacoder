import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import { StartsWith } from '../decorators/starts-with.decorator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @StartsWith('Task: ')
  @Length(2, 10)
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber({}, { message: 'number only' })
  @IsPositive()
  @IsOptional()
  priority: number;

  @IsArray()
  @IsEnum(TaskTag, { each: true, message: '' })
  @IsString({ each: true, message: 'Each tag should be the string' })
  @IsOptional()
  tags: TaskTag[];

  // @IsString()
  // @MinLength(8)
  // @Matches(/^(?=.*[a-z])(?=.*[0-9]).+$/, { message: '' })
  // password: string;

  // @IsUrl(
  //   {
  //     protocols: ['https'],
  //     require_protocol: true,
  //     require_port: false,
  //     host_whitelist: ['google.com'],
  //   },
  //   { message: '' },
  // )
  // websiteUrl: string;

  // @IsUUID('4', { message: '' })
  // userId: string;
}
