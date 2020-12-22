import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-style',
  templateUrl: './test-ng-style.component.html',
  styleUrls: ['./test-ng-style.component.css'],
})
export class TestNgStyleComponent implements OnInit {
  @Input() color = 'blue';
  @Input() bgc = 'pink';
  @Input() size = '45px';
  @Input() font = 'verdana';
  constructor() {}

  ngOnInit(): void {}
}
