import { Component,OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DashboardComponent } from 'src/app/Components/dashboard/dashboard.component';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/Services/api.service';
import { DispositivoModel } from 'src/app/Models/Dispositivo';

@Component({
  selector: 'app-formulario-dashboard',
  templateUrl: './formulario-dashboard.component.html',
  styleUrls: ['./formulario-dashboard.component.css']
})
export class FormularioDashboardComponent implements OnInit {

  @Input() modal:any;
  @Input() component:string;
  @Input() ides:string;

  IdDis="";
  NomD="";
  LargD="";
  AltoD="";
  AnchoD="";
  PesoD="";
  EmprD="";

  addressForm = this.fb.group({
    IdDispositivo: [null, Validators.required],
    NombreD: [null, Validators.required],
    LargoD: [null, Validators.required],
    AltoD: [null, Validators.required],
    AnchoD: [null, Validators.required],
    PesoD: [null, Validators.required],
    EmprD: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private forms:FormsService, public api :ApiService) {}

  async onSubmit(){
    this.IdDis=this.addressForm.controls["IdDispositivo"].value;
    this.NomD=this.addressForm.controls["NombreD"].value;
    this.LargD=this.addressForm.controls["LargoD"].value;
    this.AltoD=this.addressForm.controls["AltoD"].value;
    this.AnchoD=this.addressForm.controls["AnchoD"].value;
    this.PesoD=this.addressForm.controls["PesoD"].value;
    this.EmprD=this.addressForm.controls["EmprD"].value;
    
    if (this.IdDis!==null && this.NomD!==null && this.LargD!==null && this.AltoD!==null && this.AnchoD!==null && this.PesoD!==null && this.EmprD!==null){

      var body:DispositivoModel=Object.assign({ "IdDispositivo": this.IdDis,
      "NombreD":  this.NomD,
      "LargoD":  this.LargD,
      "AltoD": this.AltoD,
      "AnchoD": this.AnchoD,
      "PesoD": this.PesoD,
      "EmprD": this.EmprD,
      
      });  

      console.log(body);
      this.api.Put('Dispositivoes',this.IdDis,body)


      Swal.fire(
        'Muy Bien',
        'Se ha logrado correctamente',
        'success',
    
       )
    }else if (this.IdDis==null && this.NomD!==null && this.LargD!==null && this.AltoD!==null && this.AnchoD!==null && this.PesoD!==null && this.EmprD!==null){
      
      var body:DispositivoModel=Object.assign({
      
        "NombreD":  this.NomD,
        "LargoD":  this.LargD,
        "AltoD": this.AltoD,
        "AnchoD": this.AnchoD,
        "PesoD": this.PesoD,
        "EmprD": this.EmprD,
      
      });  

      console.log(body);
      this.api.Post('Dispositivoes',body)

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
    console.log(this.IdDis);
    console.log(this.NomD);
    console.log(this.LargD);
    console.log(this.AltoD);
    console.log(this.AnchoD);
    console.log(this.PesoD);
    console.log(this.EmprD);
  }
  
  ngOnInit(): void {

    this.forms.element.subscribe((res:any)=>{
     if(res!=null){

        this.addressForm.setControl('IdDispositivo',new FormControl(res.idDispositivo))
        this.addressForm.setControl('NombreD',new FormControl(res.nombreD))
        this.addressForm.setControl('LargoD',new FormControl(res.largoD))
        this.addressForm.setControl('AltoD',new FormControl(res.altoD))
        this.addressForm.setControl('AnchoD',new FormControl(res.anchoD))
        this.addressForm.setControl('PesoD',new FormControl(res.pesoD))
        this.addressForm.setControl('EmprD',new FormControl(res.empresaD))

     }

    }

    )

  }

}
