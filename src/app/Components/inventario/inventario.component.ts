
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit{
constructor(public api:ApiService){}

  ngOnInit(): void{
    var response = this.api.getAll("Inventarios")
    console.log(response);
  }
    
}






