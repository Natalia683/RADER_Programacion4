import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { InventarioComponent } from './Components/inventario/inventario.component';
import { HistorialComponent } from './Components/historial/historial.component';
import { MantenimientoComponent } from './Components/mantenimiento/mantenimiento.component';
import { PQRComponent } from './Components/pqr/pqr.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './Components/menu/menu.component';
import { LoginComponent } from './Components/login/login.component';
import { FormComponent } from './Components/form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './Components/tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
<<<<<<< HEAD
import { TableComponent } from './Components/table/table.component';
=======
import { FormularioClienteComponent } from './Form/Formulario_Cliente/formulario-cliente/formulario-cliente.component';
import { FormularioDashboardComponent } from './Form/Formulario_Dashboard/formulario-dashboard/formulario-dashboard.component';
import { FormularioHistorialComponent } from './Form/Formulario_Historial/formulario-historial/formulario-historial.component';
import { FormularioInventarioComponent } from './Form/Formulario_Inventario/formulario-inventario/formulario-inventario.component';
import { FormularioMantenimientoComponent } from './Form/Formulario_Mantenimiento/formulario-mantenimiento/formulario-mantenimiento.component';
import { FormularioPQRComponent } from './Form/Formulario_PQR/formulario-pqr/formulario-pqr.component';
>>>>>>> bc6422c4f1f89e52917a9b5b222d177de68dfb16

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    DashboardComponent,
    InventarioComponent,
    HistorialComponent,
    MantenimientoComponent,
    PQRComponent,
    MenuComponent,
    LoginComponent,
    FormComponent,
    TablaComponent,
<<<<<<< HEAD
    TableComponent
=======
   
    FormularioClienteComponent,
         FormularioDashboardComponent,
         FormularioHistorialComponent,
         FormularioInventarioComponent,
         FormularioMantenimientoComponent,
         FormularioPQRComponent
>>>>>>> bc6422c4f1f89e52917a9b5b222d177de68dfb16
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
