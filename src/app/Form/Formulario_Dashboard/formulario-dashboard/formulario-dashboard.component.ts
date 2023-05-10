import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-dashboard',
  templateUrl: './formulario-dashboard.component.html',
  styleUrls: ['./formulario-dashboard.component.css']
})
export class FormularioDashboardComponent {
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

  constructor(private fb: FormBuilder) {}

  async onSubmit(){
    this.IdDis=this.addressForm.controls["IdDispositivo"].value;
    this.NomD=this.addressForm.controls["NombreD"].value;
    this.LargD=this.addressForm.controls["LargoD"].value;
    this.AltoD=this.addressForm.controls["AltoD"].value;
    this.AnchoD=this.addressForm.controls["AnchoD"].value;
    this.PesoD=this.addressForm.controls["PesoD"].value;
    this.EmprD=this.addressForm.controls["EmprD"].value;
    
    console.log(this.IdDis);
    console.log(this.NomD);
    console.log(this.LargD);
    console.log(this.AltoD);
    console.log(this.AnchoD);
    console.log(this.PesoD);
    console.log(this.EmprD);
  }
}
