import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-pqr',
  templateUrl: './formulario-pqr.component.html',
  styleUrls: ['./formulario-pqr.component.css']
})
export class FormularioPQRComponent implements OnInit {
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

  

  constructor(private fb: FormBuilder, private forms:FormsService) {}


  async onSubmit(){
    this.IdSol=this.addressForm.controls["IdSolicitud"].value;
    this.Tip=this.addressForm.controls["TipoS"].value;
    this.Desc=this.addressForm.controls["DescripcionS"].value;
    this.Usu=this.addressForm.controls["UsuarioS"].value;
    this.Disp=this.addressForm.controls["DispositivoS"].value;
    
    if(this.Tip!== null && this.Desc!== null && this.Usu!== null && this.Disp!==null){
    
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
    
    console.log(this.IdSol);
    console.log(this.Tip);
    console.log(this.Desc);
    console.log(this.Usu);
    console.log(this.Disp);
    
  } 
  ngOnInit(): void {

    this.forms.element.subscribe((res:any)=>{
     if(res!=null){

        this.addressForm.setControl('TipoS',new FormControl(res.tipoS))
        this.addressForm.setControl('DescripcionS',new FormControl(res.descripcionS))
        this.addressForm.setControl('UsuarioS',new FormControl(res.usuarioS))
        this.addressForm.setControl('DispositivoS',new FormControl(res.dispositivoS))
        
     }

    }




    )



  }
}
