import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Only String' })
  @IsNotEmpty({ message: 'Not empty' })
  @Length(2, 40, { message: 'From 2 to 40' })
  title: string;

  @IsBoolean({ message: 'Only boolean' })
  isCompleted: boolean;
}
