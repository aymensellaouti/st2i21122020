import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../../model/personne';
import { CvService } from '../../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-details-personne',
  templateUrl: './details-personne.component.html',
  styleUrls: ['./details-personne.component.css'],
})
export class DetailsPersonneComponent implements OnInit {
  personne: Personne = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private toastr: ToastrService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    /*
      Récupére l'id de la route
      j appelle le service et je lui dit de chercher la personne avec cet id
        Si ok affiche la personne
        Si ko redirige vers la liste des cvs et j'affiche un toast erreur
    */
    this.activatedRoute.params.subscribe((mesParams) => {
      this.cvService.findPersonneById(+mesParams.id).subscribe(
        (personne) => (this.personne = personne),
        (erreur) => {
          this.toastr.error(`Personne innexistante`);
          this.router.navigate(['cv']);
        }
      );
    });
  }
  deletePersonne() {
    this.cvService.deletPersonneById(this.personne.id).subscribe(
      (success) => {
        this.toastr.success(`${this.personne.name} supprimé avec succès`);
        this.router.navigate(['cv']);
      },
      (error) => {
        this.toastr.error('Veuillez contacter l admin');
      }
    );
  }
}
