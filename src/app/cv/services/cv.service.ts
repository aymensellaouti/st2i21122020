import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[] = [];
  selectPersonneSubject = new Subject<Personne>();
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
  findPersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }
  deletePersonne(personne: Personne): boolean {
    const index = this.personnes.indexOf(personne);
    if (index === -1) {
      return false;
    }
    this.personnes.splice(index, 1);
    return true;
  }
  addPersonne(personne: Personne) {
    this.personnes.push(personne);
  }

  selectPersonne(personne) {
    this.selectPersonneSubject.next(personne);
  }
}
