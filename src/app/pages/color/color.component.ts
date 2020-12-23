import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'red';
  bgc;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.bgc = this.defaultColor;
    this.activatedRoute.params.subscribe((mesParams) => {
      this.bgc = mesParams.couleur;
    });
  }

  changeColor(newColor: string) {
    this.bgc = newColor;
  }
}
