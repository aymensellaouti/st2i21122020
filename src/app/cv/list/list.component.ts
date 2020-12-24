import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastRef, ToastrService } from 'ngx-toastr';
import { Personne } from '../model/personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  /*   @Output() forwardSelectedPersonne = new EventEmitter(); */
  constructor(private cvService: CvService, private tostr: ToastrService) {}

  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (personnes) => (this.personnes = personnes),
      (erreur) => {
        this.personnes = this.cvService.getFakePersonnes();
        this.tostr.warning('Problème avec le serveur, les données sont fake');
      }
    );
  }
  /*   forwardPersonne(personne: Personne) {
    this.forwardSelectedPersonne.emit(personne);
  } */
}
