import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators/';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getParlamentares(): Observable<any> {
    return this.http.get('../assets/deputados.json');
  }

  public getDiscursos(nome: string): Observable<any> {
    return this.http.get('../assets/discursos/' + nome + '.json');
  }
}
