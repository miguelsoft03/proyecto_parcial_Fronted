import { Component, OnInit, ViewChild } from '@angular/core';


import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Factura } from '../Interfaces/factura';
import { FacturaService } from '../Services/factura.service'; 


@Component({
  selector: 'app-NuevaFactura',
  templateUrl: './NuevaFactura.component.html',
  styleUrls: ['./NuevaFactura.component.css']
})
export class NuevaFacturaComponent implements OnInit{
  listaFacturas:Factura[] = [];
  formularioFactura:FormGroup;
  mensaje: string = '';
  mostrarMensaje: boolean = false;

  constructor(
    private _facturaSercicio:FacturaService,
    private fb:FormBuilder
  ){
    this.formularioFactura = this.fb.group({
      IdUsuario: ['',Validators.required],
      Nombre: ['',Validators.required],
      Correo: ['',Validators.required],
      IdMascota: ['',Validators.required],
      NombrePet: ['',Validators.required],
      IdCita: ['',Validators.required],
      FechaCita: ['',Validators.required],
      Especialidad: ['',Validators.required],
      Costos: ['',Validators.required]
    });
  }
  obtenerFacturas(){
    this._facturaSercicio.getFacturas().subscribe({
      next:(data)=>{
        this.listaFacturas=data;
      },error:(e)=>{}
    })
  }

  ngOnInit(): void {
    this.obtenerFacturas();
  }

  agregarFactura(){
    const request: Factura={
      IdFactura:0,
      IdUsuario: 0,
      Nombre: this.formularioFactura.value.Nombre,
      Correo: this.formularioFactura.value.Correo,
      IdMascota: 0,
      NombrePet: this.formularioFactura.value.NombrePet,
      IdCita: 0,
      FechaCita: this.formularioFactura.value.FechaCita,
      Especialidad: this.formularioFactura.value.Especialidad,
      Costos: this.formularioFactura.value.Costos,
    }

    this._facturaSercicio.addFactura(request).subscribe({
      next:(data)=>{
        this.listaFacturas.push(data);
        this.formularioFactura.patchValue({
          IdUsuario:0,
          Nombre:"",
          Correo: "",
          IdMascota:0,
          NombrePet: "",
          IdCita: 0,
          FechaCita: "",
          Especialidad: "",
          Costos: ""
        });
      },error:(e)=>{}
    })

    this.mostrarMensaje = true;

    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 3000); // Elimina el mensaje después de 3 segundos
  }

  eliminarFactura(factura:Factura){
    this._facturaSercicio.deleteFactura(factura.IdFactura).subscribe({
      next:(data)=>{
        const nuevaFactura = this.listaFacturas.filter(item => item.IdFactura !=factura.IdFactura)
        this.listaFacturas = nuevaFactura;
      },error:(e)=>{}
    })
  }
  
}




  /* Nombre: string = '';
  Correo: string = '';
  NombrePet: string = '';
  FechaCita: string = '';
  Especialidad: string = '';
  Costos: number = 0;
  mostrarMensaje: boolean = false;

  @ViewChild('facturaForm') facturaForm: any;

  agendarFactura() {
    // Lógica para enviar la factura
    this.mostrarMensaje = true;

    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 3000); // Elimina el mensaje después de 3 segundos
  }

  limpiarFormulario() {
    this.Nombre = '';
    this.Correo = '';
    this.NombrePet = '';
    this.FechaCita = '';
    this.Especialidad = '';
    this.Costos = 0;
    this.facturaForm.resetForm();
  } */

