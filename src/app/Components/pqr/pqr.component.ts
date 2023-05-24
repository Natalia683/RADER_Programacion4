import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioPQRComponent } from 'src/app/Form/Formulario_PQR/formulario-pqr/formulario-pqr.component';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-pqr',
  templateUrl: './pqr.component.html',
  styleUrls: ['./pqr.component.css']
})


export class PQRComponent implements OnInit{
  
  displayedColumns: string[] ;
  modal:any;
  dataSource: MatTableDataSource<any>;
  data:any []

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetPQR();
  }

  public async GetPQR() {
    this.api.Get('Solicituds').then((res) => {
      let acciones=res;
      acciones = res.map(dato => ({ ...dato, Acciones: '' }));
      this.dataSource.data =acciones;
      this.data = acciones;
    });

    this.modal=FormularioPQRComponent;
  }
}