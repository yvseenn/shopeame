import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackService {
  baseUrl:string = "http://localhost:3000/prendas"
  constructor(private http: HttpClient) { }
}
