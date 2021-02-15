import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { AuthLogin } from '../../interfaces/auth-login';
import { AuthLoginResponse } from '../../interfaces/auth-login-response';

@Component({
  selector: 'comfeco-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    const credentials: AuthLogin = this.loginForm.value;
    console.log(credentials);

    // this.authService.login(credentials).subscribe((res: AuthLoginResponse) => {
    //   // sets up user serssion
    // });
  }
}
