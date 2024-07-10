import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maanufactur } from '../models/maanufactur';

@Injectable({
  providedIn: 'root'
})
export class MaanufacturerService {

  constructor(private http: HttpClient) { }
  GetManuf(): Observable<any> {
    return this.http.get<any>("http://localhost:5041/api/Manufacturers/GetAll");
  }
  PostManufactur(modell: Maanufactur): Observable<Maanufactur> {
    return this.http.post<Maanufactur>("http://localhost:5041/api/Manufacturers/Insert", modell)
  }
  UpdateMaanufactur(modell: Maanufactur): Observable<Maanufactur> {
    return this.http.put<Maanufactur>("http://localhost:5041/api/Manufacturers/Update/" + modell.manufacturerID, modell);
  }
  DeleteMaanufactur(id: number): Observable<any> {
    return this.http.delete<any>("http://localhost:5041/api/Manufacturers/" + id);
  }
}
