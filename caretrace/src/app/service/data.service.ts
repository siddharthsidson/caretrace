import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //private baseUrl = 'http://192.168.0.113/'; 
  private baseUrl = 'http://localhost:3000/'; 
  constructor(private http: HttpClient) {}
  public loggedInUser() {
    return !!localStorage.getItem('careTraceLoginData');
  }
  public getHelperMaterials() {
    let url = this.baseUrl + 'getHelperMaterials';
    return this.http.get(url);
  }
}
