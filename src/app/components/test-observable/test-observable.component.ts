import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit {
  constructor(private tostr: ToastrService) {}

  ngOnInit(): void {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    observable
      .pipe(
        map((data) => data * 3),
        filter((data) => !(data % 2))
      )
      .subscribe(
        (data) => this.tostr.success(data + ''),
        (erreur) => {
          this.tostr.error('Pbm veuillez contacter l admin');
          console.log(erreur);
        },
        () => this.tostr.info('Fin d envoi des données')
      );
  }
}
