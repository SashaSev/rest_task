import { TaskStatus } from '../tasks.model';
import {  IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class GetFilterDTO {
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.OPEN, TaskStatus.IN_PROGRESS])
  status: TaskStatus;
  @IsOptional()
  @IsNotEmpty()
  search: string;
}