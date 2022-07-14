import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login.component";

import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { DividerModule} from "primeng/divider";
import { NgxCaptchaModule } from 'ngx-captcha';

export const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ReactiveFormsModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    DividerModule,
    NgxCaptchaModule
  ]
})
export class LoginModule {}
