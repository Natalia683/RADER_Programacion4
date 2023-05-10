import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-historial',
  templateUrl: './formulario-historial.component.html',
  styleUrls: ['./formulario-historial.component.css']
})
   export class FormularioHistorialComponent {
  IdHis:"";
  Fec:"";
  Nov:"";
  Sug:"";
  Inc:"";
  Comp:"";
  Usu:"";

  addressForm = this.fb.group({
    
    IdHistorial: [null, Validators.required],
    FechaH: [null, Validators.required],
    NovedadH: [null, Validators.required],
    SugerenciausuarioH: [null, Validators.required],
    IncidenciasH: [null, Validators.required],
    ComponenteH: [null, Validators.required],
    UsarioH:[null, Validators.required], 

  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder) {}


  async onSubmit(){
    this.IdHis=this.addressForm.controls["IdHistorial"].value;
    this.Fec=this.addressForm.controls["FechaH"].value;
    this.Nov=this.addressForm.controls["NovedadH"].value;
    this.Sug=this.addressForm.controls["SugerenciausuarioH"].value;
    this.Inc=this.addressForm.controls["IncidenciasH"].value;
    this.Comp=this.addressForm.controls["ComponenteH"].value;
    this.Usu=this.addressForm.controls["UsuarioH"].value;

    console.log(this.IdHis);
    console.log(this.Fec);
    console.log(this.Nov);
    console.log(this.Sug);
    console.log(this.Inc);
    console.log(this.Comp);
    console.log(this.Usu);
  }  
}
