import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Cita } from '../Interfaces/cita';
import { CitaService } from '../Services/cita.service';



@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit{
  listaCitas:Cita[] = [];
  formularioCita:FormGroup;
  mensaje: string = '';
  mostrarMensaje: boolean = false;

  constructor(
    private _citaSercicio:CitaService,
    private fb:FormBuilder
  ){
    this.formularioCita = this.fb.group({
      idUsuario: ['',Validators.required],
      nombre: ['',Validators.required],
      correo: ['',Validators.required],
      idMascota: ['',Validators.required],
      nombrePet: ['',Validators.required],
      ciudad: ['',Validators.required],
      especialidad: ['',Validators.required],
      sucursal: ['',Validators.required],
      mes: ['',Validators.required],
      dia: ['',Validators.required]
    });
  }
  obtenerCitas(){
    this._citaSercicio.getCitas().subscribe({
      next:(data)=>{
        this.listaCitas=data;
      },error:(e)=>{}
    })
  }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  agregarCita(){
    const request: Cita={
      idCita:0,
      idUsuario:0,
      nombre: this.formularioCita.value.nombre,
      correo: this.formularioCita.value.correo,
      idMascota:0,
      nombrePet: this.formularioCita.value.nombrePet,
      ciudad: this.formularioCita.value.ciudad,
      especialidad: this.formularioCita.value.especialidad,
      sucursal: this.formularioCita.value.sucursal,
      mes: 0,
      dia: 0,
    }

    this._citaSercicio.addCita(request).subscribe({
      next:(data)=>{
        this.listaCitas.push(data);
        this.formularioCita.patchValue({
          idUsuario:0,
          nombre:"",
          correo: "",
          idMascota:0,
          nombrePet: "",
          ciudad: "",
          especialidad: "",
          sucursal: "",
          mes:0,
          dia:0,
        });
      },error:(e)=>{}
    })

    this.mostrarMensaje = true;

    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 3000); // Elimina el mensaje después de 3 segundos
  }

  eliminarCita(cita:Cita){
    this._citaSercicio.deleteCita(cita.idCita).subscribe({
      next:(data)=>{
        const nuevaLista = this.listaCitas.filter(item => item.idCita !=cita.idCita)
        this.listaCitas = nuevaLista;
      },error:(e)=>{}
    })
  }
  
}
  

 /*  Nombre: string = '';
  Correo: string = '';
  NombrePet: string = '';
  Ciudad: string = '';
  Especialidad: string = '';
  Sucursal: string = '';
  Mes: number = 0;
  Dia: number = 0;
  mensaje: string = '';
  mostrarMensaje: boolean = false;


  @ViewChild('facturaForm') facturaForm: any;

  agendarCita() {
    // Aquí puedes agregar la lógica para enviar la cita
    this.mostrarMensaje = true;

    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 3000); // Elimina el mensaje después de 3 segundos
  }

  limpiarFormulario() {
    this.Nombre = '';
    this.Correo = '';
    this.NombrePet = '';
    this.Ciudad = '';
    this.Especialidad = '';
    this.Sucursal = '';
    this.Mes = 0;
    this.Dia = 0;
    this.facturaForm.resetForm();
  } */        