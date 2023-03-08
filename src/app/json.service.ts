import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comic } from './Comic.interface';

// Decorador que indica que esta clase es un servicio inyectable
@Injectable({
  providedIn: 'root',
})
export class JsonService {
  // Inyectamos el cliente HTTP en el constructor
  constructor(private http: HttpClient) {}

  // Método que devuelve un observable con todos los cómics
  getAllComics(): Observable<Comic[]> {
    // Hacemos una petición GET a la URL del servidor local
    return this.http.get<Comic[]>('http://localhost:3005/comics');
  }

  getComicsByUserName(userName: string): Observable<Comic[]> {
    return this.http.get<Comic[]>(`http://localhost:3005/comics?username=${userName}`);
  }

  getComicsByUserDate(comicDate: string): Observable<Comic[]> {
    
    return this.http.get<Comic[]>(`http://localhost:3005/comics?year=${comicDate}`);
  }
}
