import { Component } from '@angular/core';
import { MedicineGeneric } from '../../models/medicine-generic';
import { MedicineGenericService } from '../../service/medicine-generic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-generic',
  templateUrl: './medicine-generic.component.html',
  styleUrls: ['./medicine-generic.component.css']
})
export class MedicineGenericComponent {
  MedicineGene: any;
  POSTGeneric: MedicineGeneric = {
    medicineGenericID: undefined,
    medicineGenericNames: ''
  }
  constructor(private serve: MedicineGenericService, private route: Router) { }
  ngOnInit() {
    this.GetAllGeneric();
  }
  GetAllGeneric() {
    this.serve.GetAllGeneric().subscribe(s => {
      this.MedicineGene = s;
    });
  }
  insertGeneric() {
    if (this.POSTGeneric.medicineGenericID === undefined) {
      this.serve.PostGeneric(this.POSTGeneric).subscribe(p => {
        console.log(p);
        this.route.navigate(['/MedicineGeneric']);
        this.GetAllGeneric();
        this.POSTGeneric = {
          medicineGenericID: undefined,
          medicineGenericNames: ''
        }
      });
    }
    else {
      this.GenericUpdate(this.POSTGeneric)
      this.POSTGeneric = {
        medicineGenericID: undefined,
        medicineGenericNames: ''
      }
    }
  }
  GenericUpdate(POSTGeneric: MedicineGeneric) {
    this.serve.UpdateGeneric(POSTGeneric).subscribe(up => {
      this.GetAllGeneric();
    });
  }
  //DeleteGeneric(id: number) {
  //  this.serve.DeleteGeneric(id).subscribe(d => {
  //    this.route.navigate(['/MedicineGeneric']);
  //    this.GetAllGeneric();
  //  });
  //}
  DeleteGeneric(id: number) {
    this.serve.DeleteGeneric(id).subscribe(
      () => {
        this.GetAllGeneric();
        this.route.navigate(['/MedicineGeneric']);

      },
      (error) => {
        console.error('Delete Failed:', error); // Handle errors
      }
    );
  }

  PopulateService(POP: MedicineGeneric) {
    this.POSTGeneric=POP
  }
}
