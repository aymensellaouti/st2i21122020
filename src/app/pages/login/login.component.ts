import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private tostr: ToastrService
  ) {}

  ngOnInit(): void {}

  login(credentials) {
    this.authService.login(credentials).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.tostr.success('Bienvenu');
        this.router.navigate(['cv']);
      },
      (erreur) => {
        console.log(erreur);
        this.tostr.error(
          `Veuillez vérifier vos credentials ou votre connexion`
        );
      }
    );
  }
}
