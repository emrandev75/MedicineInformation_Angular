import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineGenericComponent } from './medicine-generic.component';

describe('MedicineGenericComponent', () => {
  let component: MedicineGenericComponent;
  let fixture: ComponentFixture<MedicineGenericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicineGenericComponent]
    });
    fixture = TestBed.createComponent(MedicineGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
