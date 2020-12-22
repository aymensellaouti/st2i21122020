import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { Todo } from './../Model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private loggerService: LoggerService) {}

  logTodos(): void {
    this.loggerService.logger(this.todos);
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
