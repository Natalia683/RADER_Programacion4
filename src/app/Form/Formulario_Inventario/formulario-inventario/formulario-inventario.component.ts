import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/Services/api.service';
import { InventarioModel } from 'src/app/Models/Inventario';

@Component({
  selector: 'app-formulario-inventario',
  templateUrl: './formulario-inventario.component.html',
  styleUrls: ['./formulario-inventario.component.css']
})

export class FormularioInventarioComponent implements OnInit {
  @Input() modal:any;
  @Input() component:string;
  @Input() ides:string;

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

  constructor(private fb: FormBuilder, private forms:FormsService, public api :ApiService) {}

  async onSubmit(){
    this.IdInv=this.addressForm.controls["IdInventario"].value;
    this.Descr=this.addressForm.controls["DescripcionI"].value;
    this.Cant=this.addressForm.controls["CantidadI"].value;
    this.Prov=this.addressForm.controls["ProveedorI"].value;
    this.Comp=this.addressForm.controls["ComponenteI"].value;
    this.Esta=this.addressForm.controls["EstadoI"].value;
 
    if (this.IdInv!==null && this.Descr!==null && this.Cant!==null && this.Prov!==null && this.Comp!==null && this.Esta!==null){

      var body:InventarioModel=Object.assign({ "IdInventario": this.IdInv,
      "DescripcionI":  this.Descr,
      "CantidadI":  this.Cant,
      "ProveedorI": this.Prov,
      "ComponenteI": this.Comp,
      "EstadoI": this.Esta,
      
      });  

      console.log(body);
      this.api.Put('Inventarios',this.IdInv,body)

      Swal.fire(
        'Muy Bien',
        'Se ha logrado correctamente',
        'success',
       
       )
    }
    else if (this.IdInv==null && this.Descr!==null && this.Cant!==null && this.Prov!==null && this.Comp!==null && this.Esta!==null){
      
      var body:InventarioModel=Object.assign({
      
        "DescripcionI":  this.Descr,
        "CantidadI":  this.Cant,
        "ProveedorI": this.Prov,
        "ComponenteI": this.Comp,
        "EstadoI": this.Esta,
      
      });  

      console.log(body);
      this.api.Post('Inventarios',body)

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
    window.location.reload()

  }   
  ngOnInit(): void {

    this.forms.element.subscribe((res:any)=>{
     if(res!=null){

        this.addressForm.setControl('IdInventario',new FormControl(res.idInventario))
        this.addressForm.setControl('CantidadI',new FormControl(res.cantidadI))
        this.addressForm.setControl('ComponenteI',new FormControl(res.componenteI))
        this.addressForm.setControl('DescripcionI',new FormControl(res.descripcionI))
        this.addressForm.setControl('EstadoI',new FormControl(res.estadoI))
        this.addressForm.setControl('ProveedorI',new FormControl(res.proveedorI))
        
     }

    }




    )



  }
}
