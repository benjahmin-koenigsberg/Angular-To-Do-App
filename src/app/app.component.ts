import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from './Todo';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // todos: Todo[] = [];
  todos: Todo[] = [];
  newTodo: string;

  ngOnInit() {
    //console.log(localStorage.getItem('todos'));
    let todoArray = JSON.parse(localStorage.getItem('todos'));
    console.log(todoArray);
    for (let i = 0; i < todoArray.length; i++) {
      let todo = todoArray[i];
      this.todos.push(todo);
    }
  }

  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isComplete = false;
      this.todos.push(todo);
      //const todoArr = {todoArr: this.todos}
      localStorage.setItem('todos', JSON.stringify(this.todos));
      this.newTodo = '';
    } else {
      alert('Please enter a to do');
    }
  }

  handleComplete(id: number) {
    this.todos[id].isComplete = !this.todos[id].isComplete;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  handleDelete(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
