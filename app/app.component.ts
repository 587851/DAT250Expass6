import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from './mock-todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  
  todos: Todo[] = [];
  newTodo: Todo = { id: 0, description: '', summary: '' };

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.loadTodos();
    });
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo).subscribe(() => {
      this.newTodo = { id: 0, description: '', summary: '' };
      this.loadTodos(); 
    });
  }
  
}
