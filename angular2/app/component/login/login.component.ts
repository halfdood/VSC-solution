import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {LoginService} from '../../service/login.service';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/component/login/login.component.html',
  styleUrls: ['./app/component/login/login.component.css']
})
export class LoginComponent {

  public form:FormGroup;
  public username:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(
    fb:FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.form = fb.group({
      'name': [''],
      'password': ['']
    });

    this.username = this.form.controls['name'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.loginService.logIn(this.username.value, this.password.value)
        .then(success => {
          if (success){
            this.router.navigateByUrl('');
          }
        })
      // your code goes here
      // console.log(values);
    }
  }
}
