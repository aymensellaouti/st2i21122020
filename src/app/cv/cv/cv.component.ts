import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { FakeService } from 'src/app/services/fake.service';
import { LoggerService } from 'src/app/services/logger.service';
import { TodoService } from 'src/app/todo/services/todo.service';
import { Personne } from './../model/personne';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne = null;
  date = new Date();
  nbClik = 0;
  constructor(
    private loggerService: LoggerService,
    private fakeService: FakeService,
    private cvService: CvService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.loggerService.logger('Je suis le cv Component');
    this.fakeService.getFakeString();
    this.cvService.selectPersonneSubject.pipe(
      distinctUntilChanged()
    ).subscribe(
      (personne) => this.nbClik++
    );
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
    this.todoService.logTodos();
  }
}
