import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MainLayoutComponentComponent } from './main-layout-component/main-layout-component.component';
import { RegisterComponent } from './register/register.component';
import { HomeUsuarioComponent } from './perfil/home-usuario.component';
import { FormsModule } from '@angular/forms';
import { NuevaFacturaComponent } from './NuevaFactura/NuevaFactura.component';
import { ReporteComponent } from './reporte/reporte.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ControlComponent } from './control/control.component';
import { CitaComponent } from './cita/cita.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CitaService } from './Services/cita.service';
import { FacturaService } from './Services/factura.service';
import { UsuarioService } from './Services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServiciosComponent,
    NosotrosComponent,
    MainLayoutComponentComponent,
    RegisterComponent,
    HomeUsuarioComponent,
    NuevaFacturaComponent,
    ReporteComponent,
    FacturasComponent,
    ControlComponent,
    CitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CitaService,
    FacturaService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
