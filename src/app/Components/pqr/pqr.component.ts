import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-pqr',
  templateUrl: './pqr.component.html',
  styleUrls: ['./pqr.component.css']
})


export class PQRComponent implements OnInit{
  constructor(public api:ApiService){}
  
    ngOnInit(): void{
      var response = this.api.Get("Solicituds")
      console.log(response);
    }
}