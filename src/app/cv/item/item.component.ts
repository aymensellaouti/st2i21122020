import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne = null;
  /*   @Output() selectPersonne = new EventEmitter(); */
  @Input() width = 50;
  @Input() height = 50;
  @Input() isDiv = true;

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    console.log(this.isDiv);
  }
  selectItem() {
    this.cvService.selectPersonne(this.personne);
    // Je dois emettre un evenement et y injecter la personne
    /* this.selectPersonne.emit(this.personne); */
  }
}
