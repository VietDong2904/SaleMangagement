import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public passwordTextType!: boolean;
  isLogin = false;
  returnUrl!: string;
  siteKey: string = "6Lerft8gAAAAAGMh4wmSQR7oPqOV2wvLJhE1KOc8"
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  togglePasswordTextType(event) {
    this.passwordTextType = !this.passwordTextType;
    this.cdr.detectChanges();
  }
  login() {
    this.router.navigate(["/dashboard"])
  }


}
