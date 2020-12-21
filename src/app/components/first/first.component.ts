import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  color = 'red';
  isHidden = true;
  message = 'afficher';
  inputValue = '';
  constructor() {}
  showHide() {
    this.isHidden = !this.isHidden;
    this.message === 'afficher'
      ? (this.message = 'cacher')
      : (this.message = 'afficher');
  }

  ngOnInit(): void {}
  afficherContenuDeMonInput(newInputValue) {
    this.inputValue = newInputValue;
  }
}
