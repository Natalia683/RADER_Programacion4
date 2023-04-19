import { Component , OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})

export class MantenimientoComponent implements OnInit{
  constructor(public api:ApiService){}
  
    ngOnInit(): void{
      var response = this.api.Get("Mantenimientoes")
      console.log(response);
    }
}