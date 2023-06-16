import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StarService {
url:any = 'https://swapi.dev/api/'+'starships';
  constructor(private apiServ:ApiService) { }
 public getStarWarsShips(): Observable<any>{
    return this.apiServ.get(this.url);
  }
}
