import { Component , OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';


import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Usuario } from '../Interfaces/usuario';
import { UsuarioService } from '../Services/usuario.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
    listaUsuarios:Usuario[] = [];
    formularioUsuario:FormGroup;
    mensaje: string = '';
    mostrarMensaje: boolean = false;
  
    constructor(
      private _usuarioSercicio:UsuarioService,
      private fb:FormBuilder
    ){
      this.formularioUsuario = this.fb.group({
        nombre: ['',Validators.required],
        correo: ['',Validators.required],
        contrasena: ['',Validators.required],
        telefono: ['',Validators.required]
      });
    }
    obtenerUsuarios(){
      this._usuarioSercicio.getUsuarios().subscribe({
        next:(data)=>{
          this.listaUsuarios=data;
        },error:(e)=>{}
      })
    }
  
    ngOnInit(): void {
      this.obtenerUsuarios();
    }
  
    agregarUsuario(){
      const request: Usuario={
        idUsuario:0,
        nombre: this.formularioUsuario.value.nombre,
        correo: this.formularioUsuario.value.correo,
        contrasena: this.formularioUsuario.value.contrasena,
        telefono: this.formularioUsuario.value.telefono,
      }
  
      this._usuarioSercicio.addUsuario(request).subscribe({
        next:(data)=>{
          this.listaUsuarios.push(data);
          this.formularioUsuario.patchValue({
            nombre:"",
            correo: "",
            contrasena: "",
            telefono: ""
          });
        },error:(e)=>{}
      })
  
      this.mostrarMensaje = true;
  
      setTimeout(() => {
        this.mostrarMensaje = false;
      }, 3000); // Elimina el mensaje después de 3 segundos
    }
  
    eliminarUsuario(usuario:Usuario){
      this._usuarioSercicio.deleteUsuario(usuario.idUsuario).subscribe({
        next:(data)=>{
          const nuevaUsuario = this.listaUsuarios.filter(item => item.idUsuario !=usuario.idUsuario)
          this.listaUsuarios = nuevaUsuario;
        },error:(e)=>{}
      })
    }
    
}









 /* 
    Nombre: string = '';
    Correo: string = '';
    Contrasena: string = '';
    Telefono: string='';
    mostrarMensaje: boolean = false;

    @ViewChild('usuarioForm') usuarioForm: any;
  
    constructor(private router: Router) {}
    RegristroUsuario() {
      // Lógica para enviar la factura
      this.mostrarMensaje = true;
  
      setTimeout(() => {
        this.mostrarMensaje = false;
      }, 3000); // Elimina el mensaje después de 3 segundos
      
      this.router.navigate(['/home-usuario']);
    }

    limpiarFormulario() {
      this.Nombre = '';
      this.Correo = '';
      this.Contrasena = '';
      this.Telefono = '';
      this.usuarioForm.resetForm();
    }


  constructor(private router: Router) {}
   onSubmit() {
    if (this.validarCampos()) {
      console.log('Cuenta creada:', this.Usuario);
      // Realiza la lógica para crear la cuenta aquí
    }
    this.router.navigate(['/home-usuario']);
    
  } 
  

  validarCampos(): boolean {
    if (!this.Usuario.Nombre) {
      alert('El nombre es requerido.');
      return false;
    }

    if (!this.Usuario.Correo) {
      alert('El correo electrónico es requerido.');
      return false;
    }

    if (!this.Usuario.Contrasena) {
      alert('La contraseña es requerida.');
      return false;
    }

    if (!this.Usuario.Telefono) {
      alert('El telefono es requerido.');
      return false;
    } 
    
  }*/

   

