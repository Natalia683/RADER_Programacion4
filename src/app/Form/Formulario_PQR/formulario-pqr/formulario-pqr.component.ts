import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-pqr',
  templateUrl: './formulario-pqr.component.html',
  styleUrls: ['./formulario-pqr.component.css']
})
export class FormularioPQRComponent {
    IdSol:""; 
    Tip:"";
    Desc:""; 
    Usu:""; 
    Disp:"";

  addressForm = this.fb.group({
    IdSolicitud:  [null, Validators.required],
    TipoS: [null, Validators.required],
    DescripcionS: [null, Validators.required],
    UsuarioS: [null, Validators.required],
    DispositivoS: [null, Validators.required],
    
  });

  hasUnitNumber = false;

  

  constructor(private fb: FormBuilder) {}


  async onSubmit(){
    this.IdSol=this.addressForm.controls["IdSolicitud"].value;
    this.Tip=this.addressForm.controls["TipoS"].value;
    this.Desc=this.addressForm.controls["DescripcionS"].value;
    this.Usu=this.addressForm.controls["UsuarioS"].value;
    this.Disp=this.addressForm.controls["DispositivoS"].value;
    
    
    console.log(this.IdSol);
    console.log(this.Tip);
    console.log(this.Desc);
    console.log(this.Usu);
    console.log(this.Disp);
    
  } 
}
