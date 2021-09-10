import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Validation from 'src/app/utils/validation'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})

export class SignUpComponent implements OnInit {

  signInUp= "Se connecter"

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  // Password Strength Bar 
  public account = {
    password: <string>''
  }
  public myColors = ['#ff3300', '#ffff00', '#ffa31a', '#53c653', '#339933'];
  public thresholds = [90, 70, 40, 20];

  // render on initial
  signUpForm: any;
  ngOnInit(): void { 
    this.signUpForm = this.formBuilder.group({
      "email": [null, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]],
      "phone": [null, [Validators.required, Validators.minLength(8)]],
      "password": [null, [Validators.required, Validators.minLength(8)]],
      "confirmPassword": [null, [Validators.required]],
    },{
      validators: [Validation.match('password', 'confirmPassword')]
    })
  }
 
  // register method 
  onSignUp() {
    if (this.signUpForm.invalid) {      
      return;
    }
    // console.log(this.signUpForm.value);
    this.authService.signUp(this.signUpForm.value).pipe(
      map(user => this.router.navigate(['sign-in']))
    ).subscribe()
    
  }

  //hide show passwoed method 
  passwordTextType: any;
  toggleTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  // attr getters
  get email(){ return this.signUpForm.get('email'); }
  get phone(){ return this.signUpForm.get('phone'); }
  get password(){ return this.signUpForm.get('password'); }
  get confirmPassword(){ return this.signUpForm.get('confirmPassword'); }

}
