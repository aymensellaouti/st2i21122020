import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from '../../services/cv.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css'],
})
export class AddPersonneComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private router: Router,
    private tostr: ToastrService
  ) {}

  ngOnInit(): void {}
  addPersonne(formulaire: NgForm) {
    this.cvService.addPersonne(formulaire.value).subscribe(
      (personne) => {
        this.tostr.success(
          `${personne.firstname} ${personne.name} a été ajouté avec succès`
        );
        this.router.navigate(['cv']);
      },
      (erreur) => this.tostr.error('Problème veuillez contacter l admin')
    );
  }
}
