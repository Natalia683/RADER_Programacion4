import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  displayedColumns: string[] ;

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
      this.dataSource.data =res
      this.data = res;
    });
  }

 
  
}