import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTodo: string = ''; // Input field for new todo
  todos: Todo[] = []; // Array to hold the list of todos

  // Add a new todo to the list
  addTodo() {
    const trimmed = this.newTodo.trim();
    // Check if the input is not empty before adding
    if (trimmed) {
      // Add the new todo to the list and reset the input field
      this.todos.push({ text: trimmed, completed: false });
      this.newTodo = '';
    }
  }

  // Remove a todo from the list by its index
  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
  
  // Toggle the completion status of a todo
  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
