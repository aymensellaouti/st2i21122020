import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css'],
})
export class TestHttpComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data) => console.log(data));
    const newTodo = {
      userId: 1,
      title: 'mon new todo',
      completed: true
    };
    this.http.post('https://jsonplaceholder.typicode.com/todos', newTodo).subscribe((data) => console.log(data));
  }
}
