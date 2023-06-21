
import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioDashboardComponent } from 'src/app/Form/Formulario_Dashboard/formulario-dashboard/formulario-dashboard.component';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/Services/forms.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
 
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  data:any [];
  modal: any;
  
  
constructor(public api:ApiService, private forms: FormsService, private dialog: MatDialog){

  this.dataSource=new MatTableDataSource();
}

  ngOnInit(): void{
    this.getDashboard();
  }


public async getDashboard(){

await this.api.Get("Dispositivoes").then((res)=>{
  for (let index = 0; index < res.length; index++){
    let acciones=res;
    acciones = res.map(dato => ({ ...dato, Acciones: '' }));
    this.dataSource.data =acciones;
    this.data = acciones;
  }
 this.dataSource.data=res;

});
 this.modal=FormularioDashboardComponent;
 

}

public crear(element:any){
  this.forms.element.next(element)
  this.dialog.open(this.modal);

}

  
}

