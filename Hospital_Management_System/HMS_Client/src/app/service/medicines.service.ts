import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicines } from '../models/medicines';
import { MedicineGeneric } from '../models/medicine-generic';
import { Maanufactur } from '../models/maanufactur';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  constructor(private http: HttpClient) { }
  GetAllMedicine(): Observable<any> {
    return this.http.get<any>("http://localhost:5041/api/Mediciens");
  }
  GetMedicineGenerics(): Observable<MedicineGeneric[]> {
    return this.http.get<MedicineGeneric[]>("http://localhost:5041/api/MedicineGenerics/GetAll"); // Adjust the endpoint as needed
  }
  GetManufacturers(): Observable<Maanufactur[]> {
    return this.http.get<Maanufactur[]>("http://localhost:5041/api/Manufacturers/GetAll"); // Adjust the endpoint as needed
  }
  PostMedicine(modell: Medicines): Observable<Medicines> {
    return this.http.post<Medicines>("http://localhost:5041/api/Mediciens/PostMedicine", modell)
  }
  PostGeneric(modell: MedicineGeneric): Observable<MedicineGeneric> {
    return this.http.post<MedicineGeneric>("http://localhost:5041/api/MedicineGenerics/Insert", modell)
  }
  PostManufactur(modell: Maanufactur): Observable<Maanufactur> {
    return this.http.post<Maanufactur>("http://localhost:5041/api/Manufacturers/Insert", modell)
  }
  
  UpdateMedicine(modell: Medicines): Observable<Medicines> {
    return this.http.put<Medicines>("http://localhost:5041/api/Mediciens/" + modell.medicineID, modell);
  }
  DeleteMedicine(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:5041/api/Mediciens/${id}`);
  }
}
