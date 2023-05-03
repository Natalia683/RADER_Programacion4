
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit{
 
  displayedColumns: string[];

  dataSource: MatTableDataSource<any>;
  data:any []

constructor(public api:ApiService){

  this.dataSource=new MatTableDataSource();
}

  ngOnInit(): void{
    this.GetInventario();
  }


  public async GetInventario() {
    this.api.Get('Inventarios').then((res) => {
      this.data = res;
      this.dataSource.data = res;
    });
  }


}







