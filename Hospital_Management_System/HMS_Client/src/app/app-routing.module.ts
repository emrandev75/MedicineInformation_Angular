import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './components/service/service.component';
import { MedicineGenericComponent } from './components/medicine-generic/medicine-generic.component';
import { MaanufacturerComponent } from './components/maanufacturer/maanufacturer.component';
import { MedicinesComponent } from './components/medicines/medicines.component';

const routes: Routes = [
  { path: 'Service', component: ServiceComponent },
  { path: 'MedicineGeneric', component: MedicineGenericComponent },
  { path: 'MANUFACTURER', component: MaanufacturerComponent },
  { path: 'MEDICINES', component: MedicinesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
