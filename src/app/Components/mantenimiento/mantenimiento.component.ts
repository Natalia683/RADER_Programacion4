import {Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioMantenimientoComponent } from 'src/app/Form/Formulario_Mantenimiento/formulario-mantenimiento/formulario-mantenimiento.component';
import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})

export class MantenimientoComponent implements OnInit{
  displayedColumns: string[] ;
  modal:any;
  dataSource: MatTableDataSource<any>;
   data:any []

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetMantenimiento();
  }


  public async GetMantenimiento() {
    this.api.Get('Mantenimientoes').then((res) => {
      let acciones=res;
      acciones = res.map(dato => ({ ...dato, Acciones: '' }));
      this.dataSource.data =acciones;
      this.data = acciones;
    });

    this.modal=FormularioMantenimientoComponent;
  }

  
}