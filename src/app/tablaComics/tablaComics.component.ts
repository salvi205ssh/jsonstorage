import { MatPaginator } from '@angular/material/paginator';
import { Comic } from './../Comic.interface';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginService } from './../login.service';
import { JsonService } from './../json.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tablaComics',
  templateUrl: './tablaComics.component.html',
  styleUrls: ['./tablaComics.component.css'],
})
export class TablaComicsComponent implements OnInit, AfterViewInit {
  nombreUserLog: string = '';
  comicsLog: MatTableDataSource<Comic> = new MatTableDataSource<Comic>();
  columnasAmostrar: string[] = ['id', 'username', 'title', 'author', 'year'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private JsonService: JsonService,
    private LoginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.nombreUserLog = localStorage.getItem('nombre') || '';
    console.log(this.nombreUserLog);
    this.JsonService.getComicsByUserName(this.nombreUserLog).subscribe(
      (data) => (this.comicsLog.data = data)
    );
    ///console.log('tabla ' + this.JsonService.getAllComics().subscribe((data) => (this.comics = data)));
  }

  ngAfterViewInit() {
    this.comicsLog.paginator = this.paginator;
  }

  getDatosUsuario() {
    this.JsonService.getComicsByUserName(this.nombreUserLog).subscribe(
      (data) => (this.comicsLog.data = data)
    );
    console.log(this.comicsLog);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.comicsLog.filter = filterValue.trim().toLowerCase();
  }

  searchdate(searchdate: string) {
    if (searchdate.length > 0) {
      this.JsonService.getComicsByUserDate(searchdate).subscribe(
        (res) => (this.comicsLog.data = res)
      );
    } else {
      this.getDatosUsuario();
    }

    console.log(searchdate);
  }

  cerrarSesion() {
    this.LoginService.logout();
    this.router.navigate(['login']);
  }
}
