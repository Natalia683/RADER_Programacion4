
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit{
 
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
constructor(public api:ApiService){

  this.dataSource=new MatTableDataSource();
}

  ngOnInit(): void{
    this.getDashboard();
  }
ngAfterViewInit(){
  this.dataSource.paginator=this.paginator;
  this.dataSource.sort=this.sort;
}


public async getDashboard(){

await this.api.Get("Dispositivoes").then((res)=>{
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
