import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() forwardSelectedPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 38, 125478),
      new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '', 38, 125478),
      new Personne(
        3,
        'sellaouti2',
        'aymen2',
        'teacher2',
        '          ',
        38,
        125478
      ),
    ];
  }
  forwardPersonne(personne: Personne) {
    this.forwardSelectedPersonne.emit(personne);
  }
}
