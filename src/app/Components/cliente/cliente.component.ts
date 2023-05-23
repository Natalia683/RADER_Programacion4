import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioClienteComponent } from 'src/app/Form/Formulario_Cliente/formulario-cliente/formulario-cliente.component';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  displayedColumns: string[] ;
  modal: any;
  dataSource: MatTableDataSource<any>;
  data:any []

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetCliente();
  }

  public async GetCliente() {
    this.api.Get('Personas').then((res) => {
      let acciones=res;
      acciones = res.map(dato => ({ ...dato, Acciones: '' }));
      this.dataSource.data =acciones;
      this.data = acciones;
     
    });
 
    this.modal=FormularioClienteComponent;
  }

 
  
}