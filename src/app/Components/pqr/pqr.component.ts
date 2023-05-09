import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-pqr',
  templateUrl: './pqr.component.html',
  styleUrls: ['./pqr.component.css']
})


export class PQRComponent implements OnInit{
  
  displayedColumns: string[] ;

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
      this.data = res;
      this.dataSource.data = res;
    });
  }
}