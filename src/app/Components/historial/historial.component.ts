import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit{
  displayedColumns: string[] ;

  dataSource: MatTableDataSource<any>;
  data:any []

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetHistorial();
  }

  public async GetHistorial() {
    this.api.Get('Historials').then((res) => {
      this.dataSource.data = res;
      this.data = res;
    });
  }
  applyFilter(event: Event) {
}