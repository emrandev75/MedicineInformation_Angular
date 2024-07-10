import { Component } from '@angular/core';
import { Medicines } from '../../models/medicines';
import { MedicinesService } from '../../service/medicines.service';
import { Router } from '@angular/router';
import { MedicineGeneric } from '../../models/medicine-generic';
import { Maanufactur } from '../../models/maanufactur';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent {
  Medicine: any;
  medicineGenerics: MedicineGeneric[] = [];
  manufacturers: Maanufactur[] = [];
  POSTMedicines: Medicines = {
    medicineID: undefined,
    medicineName: '',
    weight: '',
    medicineType: 1,
    dosageForms: 1,
    expireDate: new Date(),
    quantity: 0,
    sellPrice: 0,
    discount: 0,
    medicineGenericID: undefined,
    manufacturerID: undefined,
  
  }
  constructor(private serve: MedicinesService, private route: Router) { }
  ngOnInit() {
    this.GetMedicines();
    this.GetMedicineGenerics();
    this.GetManufacturers();
  }
  GetMedicines() {
    this.serve.GetAllMedicine().subscribe(s => {
      this.Medicine = s;
    });
  }
  GetMedicineGenerics() {

    this.serve.GetMedicineGenerics().subscribe(data => {
      this.medicineGenerics = data;
    });
  }
  GetManufacturers() {
    this.serve.GetManufacturers().subscribe(data => {
      this.manufacturers = data;
    });
  }
  calculateOriginalPrice(medicine: any): number {
    const discountPercentage = medicine.discount;
    const sellPrice = medicine.sellPrice;
    const quantity = medicine.quantity;

    // Calculate the original price
    const originalPrice = sellPrice * quantity * (1 - discountPercentage / 100);

    return originalPrice;
  }
  getMedicineGenericName(medicineGenericID: number): string {
    const medicineGeneric = this.medicineGenerics.find(
      (mg) => mg.medicineGenericID === medicineGenericID
    );
    return medicineGeneric && medicineGeneric.medicineGenericNames ? medicineGeneric.medicineGenericNames : '';

  }

  getManufacturerName(manufacturerID: number): string {
    const manufacturer = this.manufacturers.find(
      (m) => m.manufacturerID === manufacturerID
    );
    return manufacturer && manufacturer.manufacturerName ? manufacturer.manufacturerName : '';

  }
  insertMedicines() {
    if (this.POSTMedicines.medicineID === undefined) {
      this.serve.PostMedicine(this.POSTMedicines).subscribe(p => {
        console.log(p);
        this.route.navigate(['/MEDICINES']);
        this.GetMedicines();
        this.POSTMedicines = {
          medicineID: undefined,
          medicineName: '',
          weight: '',
          medicineType: 1,
          dosageForms: 1,
          expireDate: new Date(),
          quantity: 0,
          sellPrice: 0,
          discount: 0,
          medicineGenericID: undefined,
          manufacturerID: undefined
        }
      });
    }
    else {
      this.MedicinesUpdate(this.POSTMedicines)
      this.POSTMedicines = {
        medicineID: undefined,
        medicineName: '',
        weight: '',
        medicineType: 1,
        dosageForms: 1,
        expireDate: new Date(),
        quantity: 0,
        sellPrice: 0,
        discount: 0,
        medicineGenericID: undefined,
        manufacturerID: undefined
      }
    }
  }
  MedicinesUpdate(POSTMedicines: Medicines) {
    this.serve.UpdateMedicine(POSTMedicines).subscribe(up => {
      this.GetMedicines();
    });
  }
  MedicinDelete(id: number) {
    this.serve.DeleteMedicine(id).subscribe(d => {
      this.route.navigate(['/MEDICINES']);
      this.GetMedicines();
    });
  }
  PopulateMedicine(POP: Medicines) {
    this.POSTMedicines = POP
  }
}
