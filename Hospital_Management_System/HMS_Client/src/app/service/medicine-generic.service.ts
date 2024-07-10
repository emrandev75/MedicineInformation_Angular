import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineGeneric } from '../models/medicine-generic';

@Injectable({
  providedIn: 'root'
})
export class MedicineGenericService {

  constructor(private http: HttpClient) { }
  GetAllGeneric(): Observable<any> {
    return this.http.get<any>("http://localhost:5041/api/MedicineGenerics/GetAll");
  }
  PostGeneric(modell: MedicineGeneric): Observable<MedicineGeneric> {
    return this.http.post<MedicineGeneric>("http://localhost:5041/api/MedicineGenerics/Insert", modell)
  }
  UpdateGeneric(modell: MedicineGeneric): Observable<MedicineGeneric> {
    return this.http.put<MedicineGeneric>("http://localhost:5041/api/MedicineGenerics/Update/" + modell.medicineGenericID, modell);
  }
  DeleteGeneric(id: number): Observable<any> {
    return this.http.delete<any>("http://localhost:5041/api/MedicineGenerics/" + id);
  }
}
