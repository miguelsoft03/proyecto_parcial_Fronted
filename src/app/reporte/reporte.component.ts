import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  idCita: number;
  idUsuario: number;
  nombre: string;
  correo: string;
  idMascota: number;
  nombrePet: string;
  ciudad: string;
  especialidad: string;
  sucursal: string;
  mes: number;
  dia: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    idCita: 1,
    idUsuario: 1,
    nombre: 'Dazai',
    correo: 'dazai@example.com',
    idMascota: 2,
    nombrePet: 'Doggo',
    ciudad: 'Tokyo',
    especialidad: 'Veterinaria',
    sucursal: 'Sucursal A',
    mes: 3,
    dia: 17,
  },
  {
    idCita: 2,
    idUsuario: 2,
    nombre: 'Dazai',
    correo: 'dazai@example.com',
    idMascota: 2,
    nombrePet: 'Doggo',
    ciudad: 'Tokyo',
    especialidad: 'Veterinaria',
    sucursal: 'Sucursal A',
    mes: 3,
    dia: 17,
  },
  {
    idCita: 3,
    idUsuario: 3,
    nombre: 'Capu',
    correo: 'capu@example.com',
    idMascota: 1,
    nombrePet: 'Kitty',
    ciudad: 'Osaka',
    especialidad: 'Dermatología',
    sucursal: 'Sucursal B',
    mes: 4,
    dia: 21,
  },
  {
    idCita: 4,
    idUsuario: 103,
    nombre: 'miguel',
    correo: 'miguel@example.com',
    idMascota: 203,
    nombrePet: 'Bunny',
    ciudad: 'Kyoto',
    especialidad: 'Cardiología',
    sucursal: 'Sucursal C',
    mes: 5,
    dia: 25,
  },
];

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {
  displayedColumns: string[] = ['idCita', 'idUsuario', 'nombre', 'correo', 'idMascota', 'nombrePet', 'ciudad', 'especialidad', 'sucursal', 'mes', 'dia', 'acciones'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  editaradd() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    const editedElement = { ...ELEMENT_DATA[randomElementIndex], especialidad: 'MODIFICADA' };
    this.dataSource.push(editedElement);
    this.table.renderRows();
  }

  eliminarFila(element: PeriodicElement) {
    const index = this.dataSource.indexOf(element);
    if (index !== -1) {
      this.dataSource.splice(index, 1);
      this.table.renderRows();
    }
  }

  eliminarSeleccionado() {
    // Puedes implementar la lógica según tu requerimiento para eliminar un elemento específico.
    // Puede ser mediante un cuadro de diálogo de confirmación o lógica personalizada.
    console.log('Implementa la lógica para eliminar el elemento seleccionado');
  }
}
