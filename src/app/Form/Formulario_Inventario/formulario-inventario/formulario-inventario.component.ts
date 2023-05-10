import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
 
    if (this.Descr!==null && this.Cant!==null && this.Prov!==null && this.Comp!==null && this.Esta!==null){

      Swal.fire(
        'Muy Bien',
        'Se ha logrado correctamente',
        'success'
    
       )
    }else{
     
      Swal.fire({
      icon: 'error',
      title:'Opps...',
      text: 'Datos incorrectos',
      footer:'intentelo de nuevo'

      })
   
     }
    console.log(this.IdInv);
    console.log(this.Descr);
    console.log(this.Cant);
    console.log(this.Prov);
    console.log(this.Comp);
    console.log(this.Esta);
  }   
}
