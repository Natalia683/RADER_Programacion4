import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';

@Component({
  selector: 'app-pqr',
  templateUrl: './pqr.component.html',
  styleUrls: ['./pqr.component.css']
})


export class PQRComponent implements OnInit{
  displayedColumns: string[] ;

  dataSource: MatTableDataSource<any>;
  data:any []

  constructor(public api: ApiService, public tableService: TableService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetPQR();
  }

  public async GetPQR() {
    this.api.Get('Solicituds').then((res) => {
      this.data = res;
      this.dataSource.data = res;
      this.tableService.responseTable=res;
    });
  }

  public loadTable(data: any[]) {
    this.displayedColumns = [];
    let objeto = data[0];

    for(let nombre of Object.keys(objeto)) {
      this.displayedColumns.push(nombre);
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