import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Learn NestJS',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Build REST API',
      isCompleted: true,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    const task = this.tasks.find((item) => item.id === id);

    if (!task) {
      throw new NotFoundException('Task not found!');
    }
    return task;
  }

  create(dto: CreateTaskDto) {
    const { title } = dto;

    const newTask = {
      id: this.tasks.length + 1,
      title,
      isCompleted: false,
    };

    this.tasks.push(newTask);

    return this.tasks;
  }

  update(id: number, dto: UpdateTaskDto) {
    const { title, isCompleted } = dto;
    const newTask = this.findById(id);

    newTask.title = title;
    newTask.isCompleted = isCompleted;

    return this.tasks;
  }

  patchUpdate(id: number, dto: Partial<UpdateTaskDto>) {
    const newTask = this.findById(id);
    Object.assign(newTask, dto);

    return newTask;
  }

  delete(id: number) {
    const newTask = this.findById(id);

    this.tasks = this.tasks.filter((task) => task.id !== newTask.id);

    return newTask;
  }
}
