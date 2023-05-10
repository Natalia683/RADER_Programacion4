import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-inventario',
  templateUrl: './formulario-inventario.component.html',
  styleUrls: ['./formulario-inventario.component.css']
})

export class FormularioInventarioComponent {
  IdInv="";
  Descr="";
  Cant="";
  Prov="";
  Comp="";
  Esta="";

  addressForm = this.fb.group({
    IdInventario: [null, Validators.required],
    DescripcionI: [null, Validators.required],
    CantidadI: [null, Validators.required],
    ProveedorI: [null, Validators.required],
    ComponenteI: [null, Validators.required],
    EstadoI: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  async onSubmit(){
    this.IdInv=this.addressForm.controls["IdInventario"].value;
    this.Descr=this.addressForm.controls["DescripcionI"].value;
    this.Cant=this.addressForm.controls["CantidadI"].value;
    this.Prov=this.addressForm.controls["ProveedorI"].value;
    this.Comp=this.addressForm.controls["ComponenteI"].value;
    this.Esta=this.addressForm.controls["EstadoI"].value;

    console.log(this.IdInv);
    console.log(this.Descr);
    console.log(this.Cant);
    console.log(this.Prov);
    console.log(this.Comp);
    console.log(this.Esta);
  }   
}
