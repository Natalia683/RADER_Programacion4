import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent {
  IdPers="";
  nomP="";
  apellP="";
  dirP="";
  telP="";
  corrP="";

  addressForm = this.fb.group({
    IdPersona: ['', Validators.required],
    NombreP: ['', Validators.required],
    ApellidoP: ['', Validators.required],
    DireccionP: ['', Validators.required],
    TelefonoP: ['', Validators.required],
    CorreoP: ['', Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  async onSubmit(){
    this.IdPers=this.addressForm.controls["IdPersona"].value;
    this.nomP=this.addressForm.controls["NombreP"].value;
    this.apellP=this.addressForm.controls["ApellidoP"].value;
    this.dirP=this.addressForm.controls["DireccionP"].value;
    this.telP=this.addressForm.controls["TelefonoP"].value;
    this.corrP=this.addressForm.controls["CorreoP"].value;

    console.log(this.IdPers);
    console.log(this.nomP);
    console.log(this.apellP);
    console.log(this.dirP);
    console.log(this.telP);
    console.log(this.corrP);
  }  
}
