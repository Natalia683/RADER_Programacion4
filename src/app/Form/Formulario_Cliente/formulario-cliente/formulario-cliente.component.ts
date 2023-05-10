import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
    IdPersona: [null, Validators.required],
    NombreP: [null, Validators.required],
    ApellidoP: [null, Validators.required],
    DireccionP: [null, Validators.required],
    TelefonoP: [null, Validators.required],
    CorreoP: [null, Validators.required],

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

    if (this.nomP!==null && this.apellP!==null && this.dirP!==null && this.telP!==null && this.corrP!==null){

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
    console.log(this.IdPers);
    console.log(this.nomP);
    console.log(this.apellP);
    console.log(this.dirP);
    console.log(this.telP);
    console.log(this.corrP);
  }  
}
