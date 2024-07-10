import { Component } from '@angular/core';
import { Maanufactur } from '../../models/maanufactur';
import { MaanufacturerService } from '../../service/maanufacturer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maanufacturer',
  templateUrl: './maanufacturer.component.html',
  styleUrls: ['./maanufacturer.component.css']
})
export class MaanufacturerComponent {
  Manufact: any;
  POSTManufacturer: Maanufactur = {
    manufacturerID: undefined,
    manufacturerName: ''
  }
  constructor(private Manuserv: MaanufacturerService, private route: Router) { }
  ngOnInit() {
    this.GetAllManufacturer();
  }
  GetAllManufacturer() {
    this.Manuserv.GetManuf().subscribe(t => {
      this.Manufact = t;
    });
  }
  insertManufacturer() {
    if (this.POSTManufacturer.manufacturerID === undefined) {
      this.Manuserv.PostManufactur(this.POSTManufacturer).subscribe(p => {
        console.log(p);
        this.route.navigate(['/MANUFACTURER']);
        this.GetAllManufacturer();
        this.POSTManufacturer = {
          manufacturerID: undefined,
          manufacturerName: ''
        }
      });
    }
    else {
      this.ManufacturerUpdate(this.POSTManufacturer)
      this.POSTManufacturer = {
        manufacturerID: undefined,
        manufacturerName: ''
      }
    }
  }
  ManufacturerUpdate(POSTManufacturer: Maanufactur) {
    this.Manuserv.UpdateMaanufactur(POSTManufacturer).subscribe(up => {
      this.GetAllManufacturer();
    });
  }
  DeleteMaanufactur(id: number) {
    this.Manuserv.DeleteMaanufactur(id).subscribe(
      () => {
        // Successful delete
        this.GetAllManufacturer();
        this.route.navigate(['/MANUFACTURER']);
      },
      error => {
        // Handle HTTP request errors
        console.error('Delete request error:', error);
      }
    );
  }
  PopulateData(POP: Maanufactur) { this.POSTManufacturer = POP }
}
