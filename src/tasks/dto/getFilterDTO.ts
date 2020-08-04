import { TaskStatus } from '../tasks.model';

export class GetFilterDTO {
  status: TaskStatus;
  search: string;
}