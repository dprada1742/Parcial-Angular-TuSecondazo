/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehiculoListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(
        faker.datatype.number(),
        faker.vehicle.manufacturer(),
        faker.vehicle.type(),
        faker.vehicle.model(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.image.imageUrl()
      );

      component.vehiculos.push(vehiculo);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the table header', () => {
    const headerRow = fixture.debugElement.query(By.css('thead tr'));
    expect(headerRow).toBeTruthy();
  });

  it('should display 3 rows', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });
});
