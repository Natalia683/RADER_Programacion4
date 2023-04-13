import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormComponent } from './Components/form/form.component';
import { HistorialComponent } from './Components/historial/historial.component';
import { InventarioComponent } from './Components/inventario/inventario.component';
import { MantenimientoComponent } from './Components/mantenimiento/mantenimiento.component';
import { PQRComponent } from './Components/pqr/pqr.component';
import { TablaComponent } from './Components/tabla/tabla.component';

const routes: Routes = [
{path: "Cliente",component:ClienteComponent},
{path: "Dashboard",component:DashboardComponent},
{path: "Historial",component:HistorialComponent},
{path: "Inventario",component:InventarioComponent},
{path: "Mantenimiento",component:MantenimientoComponent},
{path: "PQR",component:PQRComponent},
{path: "Form",component:FormComponent},
{path: "Tabla",component:TablaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
