import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [{
      id: '111',
      title: "Shivam",
      isCompleted: true,
      date: new Date()
    }, {
      id: '222',
      title: "Harsh",
      isCompleted: true,
      date: new Date()
    }
      , {
      id: '333',
      title: "Muskan",
      isCompleted: false,
      date: new Date()
    }
      , {
      id: '444',
      title: "Aarti",
      isCompleted: false,
      date: new Date()
    }
    ]
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }


  changeStatus(todo: Todo) {
    this.todos.map((singleTodo) => {
      if (singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    })
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex(current => current.id == todo.id)

    this.todos.splice(index, 1);

  }
}
