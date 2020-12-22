import { Component, OnInit } from '@angular/core';
import { FakeService } from 'src/app/services/fake.service';
import { LoggerService } from 'src/app/services/logger.service';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne = null;
  date = new Date();
  constructor(
    private loggerService: LoggerService,
    private fakeService: FakeService
  ) {}

  ngOnInit(): void {
    this.loggerService.logger('Je suis le cv Component');
    this.fakeService.getFakeString();
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
