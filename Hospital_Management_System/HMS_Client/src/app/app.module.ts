import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { ServiceComponent } from './components/service/service.component';
import { ServicesService } from './service/services.service';
import { MedicineGenericComponent } from './components/medicine-generic/medicine-generic.component';
import { MedicineGenericService } from './service/medicine-generic.service';
import { MaanufacturerComponent } from './components/maanufacturer/maanufacturer.component';
import { MaanufacturerService } from './service/maanufacturer.service';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { MedicinesService } from './service/medicines.service';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    MedicineGenericComponent,
    MaanufacturerComponent,
    MedicinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,

    FormsModule
  ],
  providers: [
    ServicesService,
    MedicineGenericService,
    MaanufacturerService,
    MedicinesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
