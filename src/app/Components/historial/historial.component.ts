import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] ;

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api: ApiService, public tableService: TableService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetHistorial();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public async GetHistorial() {
    this.api.Get('Historials').then((res) => {
      this.loadTable(res);
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
    this.tableService.displayedColumnsTable=this.displayedColumns
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}