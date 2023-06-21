import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioHistorialComponent } from 'src/app/Form/Formulario_Historial/formulario-historial/formulario-historial.component';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/Services/forms.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit{
  @ViewChild('appTabla') appTabla: any; 
  displayedColumns: string[] ;
  modal: any;
  dataSource: MatTableDataSource<any>;
  data:any []


  constructor(public api: ApiService, private forms: FormsService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetHistorial();
  }

  public async GetHistorial() {
    this.api.Get('Historials').then((res) => {
      let acciones=res;
      acciones = res.map(dato => ({ ...dato, Acciones: '' }));
      this.dataSource.data =acciones;
      this.data = acciones;
    });

    this.modal=FormularioHistorialComponent;
  }
  
  public crear(element:any){
    this.forms.element.next(element)
    this.dialog.open(this.modal);

  }
}