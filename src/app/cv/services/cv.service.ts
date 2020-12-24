import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Personne } from '../model/personne';

const PERSONNE_API =
  'https://immense-citadel-91115.herokuapp.com/api/personnes/';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[] = [];
  selectPersonneSubject = new Subject<Personne>();
  constructor(private http: HttpClient) {
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
  getFakePersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(PERSONNE_API);
  }
  findFakePersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }
  findPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(PERSONNE_API + id);
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
