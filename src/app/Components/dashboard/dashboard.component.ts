
import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
 
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  data:any []
  
constructor(public api:ApiService){

  this.dataSource=new MatTableDataSource();
}

  ngOnInit(): void{
    this.getDashboard();
  }


public async getDashboard(){

await this.api.Get("Dispositivoes").then((res)=>{
  for (let index = 0; index < res.length; index++){
    this.dataSource.data =res
      this.data = res;

  }
 this.dataSource.data=res;

})

}

  
}

