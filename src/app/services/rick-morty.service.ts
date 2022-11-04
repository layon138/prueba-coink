import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Character, ResponseCharacter } from '../interfaces/charaters.interface';



@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) {

  }



  getListCharacters(filters:string) : Observable<Character[]> {
    return this.http.get(`${environment.APIDomain}api/character${filters}`, {}).pipe(
      map((response: any) => {
        return response?.results
      }
      )
    );
  }




}


