import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { CardModule } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, CardModule, InputTextModule, ButtonModule],
  exports: [LoginComponent],
})
export class AuthModule {}
