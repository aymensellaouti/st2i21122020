import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../model/personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(
    private embaucheService: EmbaucheService,
    private tostr: ToastrService
  ) {}

  ngOnInit(): void {}
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
}
