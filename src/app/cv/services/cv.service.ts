import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[] = [];
  constructor() {
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
  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
