import {Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})

export class MantenimientoComponent implements OnInit{
  displayedColumns: string[] ;

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
      this.dataSource.data =res
      this.data = res;
    });
  }

  
}