import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  get(url: string) {
     return this.http.get(url);
  }
  get2(url:string){
  return this.http.get(url,httpOptions);
  }
  post(url: string, postData: Object){
  return this.http.post(url, postData);
  }
  post2(url: string, postData: Object){
 return this.http.post(url, postData, httpOptions);
  }
  post3(url: string, postData: Object, httpOptions: any){
  return this.http.post(url, postData, httpOptions);
  }
  put(url: string, postData: Object){
   return this.http.put(url,postData);
  }
}
