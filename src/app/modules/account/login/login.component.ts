import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/utils/jwt.service';
import { AppState } from 'src/app/app-state';
import { AlertService } from 'src/app/utils/alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  environment: any;
  loginForm!: FormGroup

  constructor(
    private readonly userService: UserService,
    private formBuild: FormBuilder,
    private readonly jwtService: JwtService,
    private readonly alertServect : AlertService,
    private readonly router: Router,
    private appState : AppState
  ) {
    this.environment = environment;
    this.loginForm = this.formBuild.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl(environment.userStatus.or, [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
  }

  getFormControlByKey(key: string) {
    return this.loginForm.get(key) as FormControl;
  }

  login(){
    if (this.loginForm.valid) {

      this.alertServect.onLoginLoadingAlert();
      var loginResult: User = {
        id: 0,
        username: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value,
        firstname: '',
        lastname: '',
      };

      this.userService.loginUser(loginResult).subscribe((res) => {
        if(res.success){

          Swal.close();

          console.log(res.data)
          this.jwtService.setupJwt(res.data.jwt ?? '');
          this.appState.JwtCheck.next(res.data.jwt!)
          this.router.navigate(['master/material'], {
            replaceUrl: true,
          });
        }else{
          this.alertServect.onErrorAlert('เข้าสู่ระบบไม่สำเร็จ');
          console.log('ไม่สำเร็จ')

        }
      })
    }
  }

}
