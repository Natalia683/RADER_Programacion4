import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-historial',
  templateUrl: './formulario-historial.component.html',
  styleUrls: ['./formulario-historial.component.css']
})
   export class FormularioHistorialComponent implements OnInit{
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


  constructor(private fb: FormBuilder, private forms:FormsService) {}


  async onSubmit(){
    this.IdHis=this.addressForm.controls["IdHistorial"].value;
    this.Fec=this.addressForm.controls["FechaH"].value;
    this.Nov=this.addressForm.controls["NovedadH"].value;
    this.Sug=this.addressForm.controls["SugerenciausuarioH"].value;
    this.Inc=this.addressForm.controls["IncidenciasH"].value;
    this.Comp=this.addressForm.controls["ComponenteH"].value;
    this.Usu=this.addressForm.controls["UsuarioH"].value;
    if (this.Fec!==null && this.Nov!==null && this.Sug!==null && this.Inc!==null && this.Comp!==null && this.Usu!==null){

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
    console.log(this.IdHis);
    console.log(this.Fec);
    console.log(this.Nov);
    console.log(this.Sug);
    console.log(this.Inc);
    console.log(this.Comp);
    console.log(this.Usu);
  }  
  ngOnInit(): void {

    this.forms.element.subscribe((res:any)=>{
     if(res!=null){

        this.addressForm.setControl('FechaH',new FormControl(res.fechaH))
        this.addressForm.setControl('NovedadH',new FormControl(res.novedadH))
        this.addressForm.setControl('SugerenciausuarioH',new FormControl(res.sugerenciaUsuarioH))
        this.addressForm.setControl('IncidenciasH',new FormControl(res.incidenciasH))
        this.addressForm.setControl('ComponenteH',new FormControl(res.componenteH))
        

     }

    }

    )

  }
}
