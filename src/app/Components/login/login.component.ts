import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/Services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  em = "";
  pass = "";
  usuarios: any[] = []; 

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public loginservice: LoginService, public api: ApiService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  async getUsuarios() {
    try {
      const response = await this.api.Get('Usuarios');
      this.usuarios = response;
      console.log(this.usuarios);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  }

  onSubmit() {
    this.em = this.loginForm.controls["username"].value;
    this.pass = this.loginForm.controls["password"].value;

    const usuarioEncontrado = this.usuarios.find(
      (usuario) =>
        usuario.nombreU === this.em && usuario.contraseñaU === this.pass
    );

    if (usuarioEncontrado) {
      Swal.fire(
        'Muy Bien',
        'Se ha logrado iniciar sesión correctamente',
        'success'
      );
      localStorage.setItem('login', 'login');
      this.loginservice.login.next("login");
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Opps...',
        text: 'Datos incorrectos',
        footer: 'Inténtelo de nuevo'
      });
    }
  }
}