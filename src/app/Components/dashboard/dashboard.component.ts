
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  constructor(public api:ApiService){}
  
    ngOnInit(): void{
      var response = this.api.Get("Dispositivoes")
      console.log(response);
    
    }
}