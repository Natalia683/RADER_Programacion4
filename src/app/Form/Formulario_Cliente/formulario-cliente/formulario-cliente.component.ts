import { Component,OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/Services/api.service';
import { PersonaModel } from 'src/app/Models/Persona';
@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})



export class FormularioClienteComponent implements OnInit {
  @Input() modal:any;
  @Input() component:string;
  @Input() ides:string;

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

  constructor(private fb: FormBuilder, private forms:FormsService, public api :ApiService ) {}

  async onSubmit(){
    this.IdPers=this.addressForm.controls["IdPersona"].value;
    this.nomP=this.addressForm.controls["NombreP"].value;
    this.apellP=this.addressForm.controls["ApellidoP"].value;
    this.dirP=this.addressForm.controls["DireccionP"].value;
    this.telP=this.addressForm.controls["TelefonoP"].value;
    this.corrP=this.addressForm.controls["CorreoP"].value;

    if (this.IdPers!==null && this.nomP!==null && this.apellP!==null && this.dirP!==null && this.telP!==null && this.corrP!==null){
      
      var body:PersonaModel=Object.assign({ "IdPersona": this.IdPers,
      "NombreP":  this.nomP,
      "ApellidoP":  this.apellP,
      "DireccionP": this.dirP,
      "TelefonoP": this.telP,
      "CorreoP": this.corrP,
      
      });  

      console.log(body);
      this.api.Put('Personas',this.IdPers,body)

      Swal.fire(
        'Muy Bien',
        'Se ha logrado correctamente',
        'success',
       
       )
    }
    else if (this.IdPers== null && this.nomP!==null && this.apellP!==null && this.dirP!==null && this.telP!==null && this.corrP!==null){
      
      var body:PersonaModel=Object.assign({
      
      "NombreP":  this.nomP,
      "ApellidoP":  this.apellP,
      "DireccionP": this.dirP,
      "TelefonoP": this.telP,
      "CorreoP": this.corrP
      
      });  

      console.log(body);
      this.api.Post('Personas',body)

      Swal.fire(
        'Muy Bien',
        'Se ha logrado correctamente',
        'success',
       
       )
      
      


    }
    else{
     
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

    window.location.reload()
  }  
   ngOnInit(): void {
      
     this.forms.element.subscribe((res:any)=>{
      if(res!=null){
         this.addressForm.setControl('IdPersona',new FormControl(res.idPersona))
         this.addressForm.setControl('NombreP',new FormControl(res.nombreP))
         this.addressForm.setControl('ApellidoP',new FormControl(res.apellidoP))
         this.addressForm.setControl('DireccionP',new FormControl(res.direccionP))
         this.addressForm.setControl('TelefonoP',new FormControl(res.telefonoP))
         this.addressForm.setControl('CorreoP',new FormControl(res.correoP))
         
      }
   
     }




     )



   }
}
