import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private route=inject(Router);
  loginRequest={
    username:'',
    password:''

  };
  login(){
    if(this.loginRequest.username=='tezera'&&this.loginRequest.password=='Tezera@1234')
    {
      this.route.navigateByUrl('product');
      
    }
    else
    {
      alert("Credential is not correct");

    }

  }

}
