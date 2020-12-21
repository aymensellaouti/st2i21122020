import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css'],
})
export class PereComponent implements OnInit {
  constructor() {}

  /*
    Ecouter l event
    Recupérer la data
    Faire ce qu'il veut avec
  */
  processSomMessage(message: string) {
    alert(message);
  }
  ngOnInit(): void {}
}
