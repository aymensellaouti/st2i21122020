import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor() {}

  ngOnInit(): void {}
}
