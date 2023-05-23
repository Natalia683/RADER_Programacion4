import { AfterViewInit, Component, ViewChild, Input, SimpleChanges} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaDataSource, TablaItem } from './tabla-datasource';
import { ApiService } from 'src/app/Services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {FormularioClienteComponent} from 'src/app/Form/Formulario_Cliente/formulario-cliente/formulario-cliente.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})


export class TablaComponent implements AfterViewInit {

  @Input() dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  @Input() data: any[];
  @Input() modal:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public api: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.data)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['data'] && this.data) {
      this.loadTable();
    }
  }
  public loadTable() {
    this.displayedColumns = [];
    let objeto = this.data[0];
    
    for (let nombre of Object.keys(objeto)
    ) {
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

  mostrarModal(){
    this.dialog.open(this.modal);
  }

  alerta(){
  Swal.fire({
    title: '¿Seguro que quiere eliminar este res?',
    
    showCancelButton: true,
    confirmButtonText: 'Si',
    
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })

  }

}