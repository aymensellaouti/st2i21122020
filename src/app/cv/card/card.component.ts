import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../model/personne';
import { EmbaucheService } from '../services/embauche.service';
import { Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(
    private embaucheService: EmbaucheService,
    private tostr: ToastrService,
    private router: Router,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.cvService.selectPersonneSubject
      .pipe(distinctUntilChanged())
      .subscribe((personne) => (this.personne = personne));
  }
  embaucher() {
    //Appeler la methode d embauche su service
    if (this.embaucheService.embaucher(this.personne)) {
      this.tostr.success(
        `${this.personne.firstname} ${this.personne.name} a été embauché avec succès `
      );
    } else {
      this.tostr.warning(
        `${this.personne.firstname} ${this.personne.name} est déjà embauché `
      );
    }
    // Vérifier si on a embaucher la personne ou pas
    // Si oui message success
    // Sinon erreur
  }
  detail() {
    this.router.navigate(['cv', this.personne.id]);
  }
}
