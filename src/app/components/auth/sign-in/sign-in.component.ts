import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  signInUp= "S'inscrire"
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  signInForm: any;
  ngOnInit(): void {

    this.signInForm = this.formBuilder.group({
      "email": [null, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]],
      "password": [null, [Validators.required, Validators.minLength(8)]],
    })
  }

  onSignIn() {
    console.log(this.signInForm.value);
    this.router.navigate(['dashboard/my/profil'])
  }


  get email(){ return this.signInForm.get('email'); }
  get password(){ return this.signInForm.get('password'); }

  //hide show passwoed method 
  passwordTextType: any;
  toggleTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
}
