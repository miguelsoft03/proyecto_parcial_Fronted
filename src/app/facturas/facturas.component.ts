import { Component, ViewChild } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Dazai', weight: 17032023, symbol: 20},
  {position: 2, name: 'Capu', weight: 17032023, symbol: 10},
  {position: 3, name: 'Liz', weight: 17032023, symbol: 5},
  {position: 4, name: 'Percy', weight: 17032023, symbol: 90},
  {position: 5, name: 'Lucia', weight: 17032023, symbol: 11},
  {position: 6, name: 'Carbon', weight: 17032023, symbol: 15},
  {position: 7, name: 'Nitrogen', weight: 17032023, symbol: 25},
  {position: 8, name: 'Alan', weight: 17032023, symbol: 20},
  {position: 9, name: 'Rimuru', weight: 17032023, symbol: 25},
  {position: 10, name: 'Atsushi', weight: 17032023, symbol: 85},
];

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
