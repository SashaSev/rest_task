import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../tasks.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any): any {
    value = value.toUpperCase();

    if (!this.isSetStatus(value)) {
      throw new BadRequestException(`${value} invalid data`);
    }
    return value;
  }

  private isSetStatus(status: TaskStatus) {
    const idx = this.allowedStatus.indexOf(status);
    return idx !== -1;
  }
}