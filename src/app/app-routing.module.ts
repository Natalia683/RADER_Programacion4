import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormComponent } from './Components/form/form.component';
import { HistorialComponent } from './Components/historial/historial.component';
import { InventarioComponent } from './Components/inventario/inventario.component';
import { LoginComponent } from './Components/login/login.component';
import { MantenimientoComponent } from './Components/mantenimiento/mantenimiento.component';
import { PQRComponent } from './Components/pqr/pqr.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { FormularioClienteComponent } from './Form/Formulario_Cliente/formulario-cliente/formulario-cliente.component';
import { FormularioDashboardComponent } from './Form/Formulario_Dashboard/formulario-dashboard/formulario-dashboard.component';
import { FormularioHistorialComponent } from './Form/Formulario_Historial/formulario-historial/formulario-historial.component';
import { FormularioInventarioComponent } from './Form/Formulario_Inventario/formulario-inventario/formulario-inventario.component';
import { FormularioMantenimientoComponent } from './Form/Formulario_Mantenimiento/formulario-mantenimiento/formulario-mantenimiento.component';
import { FormularioPQRComponent } from './Form/Formulario_PQR/formulario-pqr/formulario-pqr.component';


const routes: Routes = [
{path: "Cliente",component:ClienteComponent},
{path: "Dashboard",component:DashboardComponent},
{path: "Historial",component:HistorialComponent},
{path: "Inventario",component:InventarioComponent},
{path: "Mantenimiento",component:MantenimientoComponent},
{path: "PQR",component:PQRComponent},
{path: "Form",component:FormComponent},
{path: "Tabla",component:TablaComponent},
{path: "Login",component:LoginComponent},
{path:"Formulario_Cliente",component:FormularioClienteComponent},
{path:"Formulario_Dashboard",component:FormularioDashboardComponent},
{path:"Formulario_historial",component:FormularioHistorialComponent},
{path:"Formulario_Inventario",component:FormularioInventarioComponent},
{path:"Formulario_Mantenimiento",component:FormularioMantenimientoComponent},
{path:"Formulario_PQR",component:FormularioPQRComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
