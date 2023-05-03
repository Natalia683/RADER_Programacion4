import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit{
  displayedColumns: string[] ;

  dataSource: MatTableDataSource<any>;
  data:any []

  constructor(public api: ApiService, public tableService: TableService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetHistorial();
  }

  public async GetHistorial() {
    this.api.Get('Historials').then((res) => {
      this.dataSource.data = res;
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