
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit,AfterViewInit{
 
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
constructor(public api:ApiService){

  this.dataSource=new MatTableDataSource();
}

  ngOnInit(): void{
    this.getInventario();
  }
ngAfterViewInit(){
  this.dataSource.paginator=this.paginator;
  this.dataSource.sort=this.sort;
}


public async getInventario(){

await this.api.getAll("Inventario").then((res)=>{
  for (let index = 0; index < res.length; index++){
    this.loadTable([res[index]])

  }
 this.dataSource.data=res;

})

}
public loadTable (data:any[]){
 this.displayedColumns=[];
  for(let column in data [0]){
    this.displayedColumns.push(column)
  }

  
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
}






