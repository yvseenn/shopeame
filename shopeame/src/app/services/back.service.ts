import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class BackService {
  baseUrl: string = 'http://localhost:3000/productos';
  constructor(private http: HttpClient) {}

 public prendaInfo = {
  id:"",
  nombre:"",
  descripcion:"",
  imagen:"",
  precio: "",
  stock:"", 
 };

  getPrendas = () => {
    return this.http.get(this.baseUrl);
  };
  getPrenda = (id: number) => {
    return this.http.get(`${this.baseUrl}/${id}`);
  };
  postPrenda = (product: any) => {
    return this.http.post(this.baseUrl, product);
  };
  deletePrenda = (id: number) => {
    return this.http.delete(`${this.baseUrl}/${id}`);
  };
}