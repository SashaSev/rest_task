import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, Query, UsePipes, ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDTO } from './dto/createTaskDTO';
import { GetFilterDTO } from './dto/getFilterDTO';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(@Query() filterDto: GetFilterDTO): Task[] {
     if(Object.keys(filterDto).length){
       return this.taskService.getTaskByQuery(filterDto)
     }
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }
  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): void {
    this.taskService.deleteTask(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDTO): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch(":id/status")
  updateTaskByStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.taskService.updateTaskStatus(id, status);
  }
}
