import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todosList!: Todo[];


  constructor(private todoService: TodoService) { }


  ngOnInit(): void {

    this.todoService.getTodos().subscribe((todos) =>
      this.todosList = todos
    )


  }


  changeStatus(todo: Todo) {
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }



}
