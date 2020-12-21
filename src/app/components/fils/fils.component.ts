import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Output() sendDataToDad = new EventEmitter();
  constructor() {}

  /*
  1- Créer une instance de eventEmitter
  2- Lancer l emission de l event et y mettre les data
  3- Dire quand lancer l emission
  */
  ngOnInit(): void {}

  sendData() {
    this.sendDataToDad.emit('cc papa');
  }
}
