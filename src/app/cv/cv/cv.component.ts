import { Component, OnInit } from '@angular/core';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne = null;
  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }

}
