import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/Services/api.service';
import { MantenimientoModel } from 'src/app/Models/Mantenimiento';


@Component({
  selector: 'app-formulario-mantenimiento',
  templateUrl: './formulario-mantenimiento.component.html',
  styleUrls: ['./formulario-mantenimiento.component.css']
})
export class FormularioMantenimientoComponent implements OnInit {
  @Input() modal:any;
  @Input() component:string;
  @Input() ides:string;

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

  constructor(private fb: FormBuilder, private forms:FormsService, public api :ApiService) {}
  

  async onSubmit(){
    this.IdMan=this.addressForm.controls["IdMantenimiento"].value;
    this.Est=this.addressForm.controls["EstadoM"].value;
    this.FecM=this.addressForm.controls["FechaRevisionM"].value;
    this.Desc=this.addressForm.controls["DescripcionM"].value;
    this.Enc=this.addressForm.controls["EncargadoM"].value;
    this.Disp=this.addressForm.controls["DispositivoM"].value;


    if (this.IdMan!==null && this.Est!==null && this.Est!==null && this.FecM!==null && this.Desc!==null && this.Enc!==null && this.Disp!==null){

      var body:MantenimientoModel=Object.assign({ "IdMantenimiento": this.IdMan,
      "EstadoM":  this.Est,
      "FechaRevisionM":  this.FecM,
      "DescripcionM": this.Desc,
      "EncargadoM": this.Enc,
      "DispositivoM": this.Disp,
      
      });  

      console.log(body);
      this.api.Put('Mantenimientoes',this.IdMan,body)

      Swal.fire(
        'Muy Bien',
        'Se ha logrado correctamente',
        'success',
       
       )
    }
    else if (this.IdMan==null && this.Est!==null && this.Est!==null && this.FecM!==null && this.Desc!==null && this.Enc!==null && this.Disp!==null){
      
      var body:MantenimientoModel=Object.assign({
      
        "EstadoM":  this.Est,
        "FechaRevisionM":  this.FecM,
        "DescripcionM": this.Desc,
        "EncargadoM": this.Enc,
        "DispositivoM": this.Disp,
      
      });  

      console.log(body);
      this.api.Post('Mantenimientoes',body)

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
    console.log(this.IdMan);
    console.log(this.Est);
    console.log(this.FecM);
    console.log(this.Desc);
    console.log(this.Enc);
    console.log(this.Disp);
    window.location.reload()
  }   
  ngOnInit(): void {

    this.forms.element.subscribe((res:any)=>{
     if(res!=null){

        this.addressForm.setControl('IdMantenimiento',new FormControl(res.idMantenimiento))
        this.addressForm.setControl('EstadoM',new FormControl(res.estadoM))
        this.addressForm.setControl('FechaRevisionM',new FormControl(res.fechaRevisionM))
        this.addressForm.setControl('DescripcionM',new FormControl(res.descripcionM))
        this.addressForm.setControl('EncargadoM',new FormControl(res.encargadoM))
        this.addressForm.setControl('DispositivoM',new FormControl(res.dispositivoM))
        
     }

    }




    )



  }
  
}
