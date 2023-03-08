import { LoginService } from './../login.service';
import { JsonService } from './../json.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comic } from '../Comic.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  comics: Comic[] = [];

  constructor(
    private JsonService: JsonService,
    private router: Router,
    private LoginService: LoginService
  ) {}

  ngOnInit(): void {
    this.JsonService.getAllComics().subscribe((data) => (this.comics = data));
  }

  loginUser(nombre: string) {
    for (let i = 0; i < this.comics.length; i++) {
      if (this.comics[i].username === nombre) {
        localStorage.setItem('nombre', nombre);
      }
    }

    if (this.LoginService.getUserLogin()) {
      console.log('fin');

      this.router.navigate(['tabla']);
    } else {
      this.router.navigate(['login']);
    }
  }

  //para el filtro let comicsM = comics.filter(c => c.includes("M"));
}
