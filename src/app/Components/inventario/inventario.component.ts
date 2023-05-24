
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioInventarioComponent } from 'src/app/Form/Formulario_Inventario/formulario-inventario/formulario-inventario.component';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit{
 
  displayedColumns: string[];
  modal:any;
  dataSource: MatTableDataSource<any>;
  data:any [];

constructor(public api:ApiService){

  this.dataSource=new MatTableDataSource();
}

  ngOnInit(): void{
    this.GetInventario();
  }


  public async GetInventario() {
    this.api.Get('Inventarios').then((res) => {
      let acciones=res;
      acciones = res.map(dato => ({ ...dato, Acciones: '' }));
      this.dataSource.data =acciones;
      this.data = acciones;
    });

    this.modal=FormularioInventarioComponent;
  }


}







