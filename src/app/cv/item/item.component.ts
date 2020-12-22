import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne: Personne = null;
  @Output() selectPersonne =  new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectItem() {
    // Je dois emettre un evenement et y injecter la personne
    this.selectPersonne.emit(this.personne);
  }

}
