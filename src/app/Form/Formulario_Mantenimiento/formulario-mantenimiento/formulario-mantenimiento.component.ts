import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-mantenimiento',
  templateUrl: './formulario-mantenimiento.component.html',
  styleUrls: ['./formulario-mantenimiento.component.css']
})
export class FormularioMantenimientoComponent {
   IdMan:"";
   Est:"";
   FecM:"";
   Desc:"";
   Enc:"";
   Disp:"";


  addressForm = this.fb.group({

    IdMantenimiento: [null, Validators.required],
    EstadoM: [null, Validators.required],
    FechaRevisionM: [null, Validators.required],
    DescripcionM: [null, Validators.required],
    EncargadoM: [null, Validators.required],
    DispositivoM: [null, Validators.required],
    
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}
  

  async onSubmit(){
    this.IdMan=this.addressForm.controls["IdMantenimiento"].value;
    this.Est=this.addressForm.controls["EstadoM"].value;
    this.FecM=this.addressForm.controls["FechaRevisionM"].value;
    this.Desc=this.addressForm.controls["DescripcionM"].value;
    this.Enc=this.addressForm.controls["EncargadoM"].value;
    this.Disp=this.addressForm.controls["DispositivoM"].value;

    console.log(this.IdMan);
    console.log(this.Est);
    console.log(this.FecM);
    console.log(this.Desc);
    console.log(this.Enc);
    console.log(this.Disp);
  }   
  
}
