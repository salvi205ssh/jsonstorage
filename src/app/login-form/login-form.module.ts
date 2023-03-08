import { LoginFormComponent } from './login-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginFormRoutes } from './loginForm.routing';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, FormsModule, LoginFormRoutes],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
