import { Component, OnInit } from '@angular/core';
/* import { ToastrService } from 'ngx-toastr'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'st2i21122020';

  constructor(/* private tostrService: ToastrService */) {}
  ngOnInit() {
    console.log('app');/*
    this.tostrService.info('Bienvenu chez vous :)'); */
  }
}
