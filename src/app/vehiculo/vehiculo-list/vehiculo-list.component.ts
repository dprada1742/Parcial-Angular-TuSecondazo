import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css'],
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];
  constructor(private vehiculoService: VehiculoService) {}

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }

  countByMarca(): { [key: string]: number } {
    return this.vehiculos.reduce<{ [key: string]: number }>((acc, vehiculo) => {
      acc[vehiculo.marca] = (acc[vehiculo.marca] || 0) + 1;
      return acc;
    }, {});
  }

  ngOnInit() {
    this.getVehiculos();
  }
}
