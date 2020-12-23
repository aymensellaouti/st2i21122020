import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css'],
})
export class TestFormComponent implements OnInit {
  name = 'aymen';
  constructor() {}

  ngOnInit(): void {}
  processForm(testForm: NgForm) {
    console.log(testForm);
  }
}
