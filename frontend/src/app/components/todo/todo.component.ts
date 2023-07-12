import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos!: Todo[];
  inputTodo: string = "";

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000').subscribe(data => {
            //this.totalAngularPackages = data.total;
            console.log(data)
            this.todos=data
        })  
   /* this.todos = [
      {
        content: 'first content',
        completed: false
      },
      {
        content: 'second content',
        completed: false
      },
    ]*/
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    // this.todos.push(
    //   {
    //     content: this.inputTodo,
    //     completed: false
    //   });
    
    this.http.post<any>('http://localhost:3000',{content: this.inputTodo,
    completed: false}).subscribe(data => {
            //this.totalAngularPackages = data.total;
            console.log(data);
            this.todos=data;
            this.inputTodo = "";
        })

  }

}
