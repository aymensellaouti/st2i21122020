import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() paths = [
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
    '404.png',
    'as.jpg',
    'cv.png',
  ];
  path = this.paths[this.paths.length - 1];
  @Input() timer = 1000;
  @Input() heigth = 150;
  @Input() width = 150;
  @Input() isRounded = true;

  imgObservable: Observable<string>;
  constructor() {}

  ngOnInit(): void {
    this.imgObservable = new Observable<string>((observer) => {
      let i = 0;
      setInterval(() => {
        if (i === this.paths.length) {
          i = 0;
        }
        observer.next(this.paths[i++]);
      }, this.timer);
    });
/*     this.imgObservable.subscribe((path) => (this.path = path)); */
  }
}
