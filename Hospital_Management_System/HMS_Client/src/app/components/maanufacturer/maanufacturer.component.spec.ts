import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaanufacturerComponent } from './maanufacturer.component';

describe('MaanufacturerComponent', () => {
  let component: MaanufacturerComponent;
  let fixture: ComponentFixture<MaanufacturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaanufacturerComponent]
    });
    fixture = TestBed.createComponent(MaanufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
