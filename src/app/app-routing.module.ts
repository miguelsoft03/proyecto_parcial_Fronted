import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { LoginComponent } from './login/login.component';
//import { MainLayoutComponentComponent } from './main-layout-component/main-layout-component.component';//
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RegisterComponent } from './register/register.component';

import { HomeUsuarioComponent } from './perfil/home-usuario.component';
import { AppComponent } from './app.component';

import { ReporteComponent } from './reporte/reporte.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ControlComponent } from './control/control.component';
import { CitaComponent } from './cita/cita.component';
import { NuevaFacturaComponent } from './NuevaFactura/NuevaFactura.component';

 const routes: Routes = [
  {path:'', component:HomeComponent},
  
    {path: 'home', component:HomeComponent},
    {path: 'servicios', component:ServiciosComponent},
    {path: 'login', component: LoginComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home-usuario', component: HomeUsuarioComponent},
    {path: 'NuevaFactura', component: NuevaFacturaComponent},
    {path: 'reporte', component: ReporteComponent},
    {path: 'facturas', component:FacturasComponent},
    {path: 'control', component: ControlComponent},
    {path: 'cita', component: CitaComponent}
  
]; 

/* const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'servicios', component:ServiciosComponent},
    {path: 'login', component: LoginComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home-usuario', component: HomeUsuarioComponent},
    {path: 'inventario', component: InventarioComponent},
    {path: 'reporte', component: ReporteComponent},
    {path: 'facturas', component:FacturasComponent},
    {path: 'control', component: ControlComponent},
    {path: 'cita', component: CitaComponent}
  
];
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
