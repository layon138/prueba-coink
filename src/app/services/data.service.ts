import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { FlightResponse, Journey } from '../interfaces/jorney.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private maxFlights=0
  constructor(private http: HttpClient) {

  }

  findTravel(where:string,todosLosVuelos:FlightResponse[],arrival:string){
    const existeVuelos=todosLosVuelos?.filter(state => state.departureStation==where && state.arrivalStation==arrival)
    console.log(existeVuelos)
    if(existeVuelos.length==0){
      let list:any[]=[]
        const newTravel=todosLosVuelos?.filter(state => state.departureStation==where)
        console.log(newTravel)
        for (const element of newTravel) {
          const existeVuelos2=todosLosVuelos?.filter(state => state.departureStation==element.arrivalStation && state.arrivalStation==arrival)
          if(existeVuelos2.length>0){
            list.push(element) 
            list.push(existeVuelos2[0]) 
            break
          }
        }
        return list
      
     
      /*t let list:any[]=[]
        newTravel.forEach(element => {
          const newJorney=this.findTravel(element.arrivalStation,todosLosVuelos,arrival)
          list.push(newJorney)
        });MZL MDE BCN
      return list*/
     
    }else{
      return existeVuelos
    }
    
  }

  getJorney(jorney:Journey){
    return this.http.get<any>(`${environment.APIDomain}api/character`,{} );
  }

  


}


