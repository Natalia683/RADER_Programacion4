
import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit{
  constructor(public api:ApiService){}
  
    ngOnInit(): void{
      var response = this.api.getAll("Personas")
      console.log(response);
      
    }
      

  }