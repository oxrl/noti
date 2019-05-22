import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RespuestaTopHeadlines} from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUlr = environment.apiUlr;

/*Funcion que me sirve para mandar el apiKey por el HttpHeaders llamado X-Api-key*/
const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  headlinesPage = 0;

  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) { }

  /*Funcion generica que recibe un RespuestaTopHeadlines o cualquier cosa y devuelve
    una RespuestaTopHeadlines.  */
  private ejecutarQuery<T>( query: string ) {

    query = apiUlr + query;

    return this.http.get<T>( query, { headers } );

  }

  getTopHeadlines() {
    this.headlinesPage++;
    // tslint:disable-next-line:max-line-length
    // return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=dc62b49904694e81adf392d7e45a2365`);
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&page=${ this.headlinesPage }`);
  }
  getTopHeadlinesCategoria( categoria: string ) {
      if ( this.categoriaActual === categoria ) {
        this.categoriaPage++;
      } else {
        this.categoriaPage = 1;
        this.categoriaActual = categoria;
      }
    // return this.http.get(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=dc62b49904694e81adf392d7e45a2365`);

      return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${ categoria }&page=${ this.categoriaPage }`);
  }

}
