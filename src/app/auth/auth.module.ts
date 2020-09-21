import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginUserComponent } from './login-user.component';
import { TokenInterceptor } from './token.interceptor';
import { RegisterUserComponent } from './register-user.component';
import { RegisterProComponent } from './register-pro.component';
import { ChoiceRegisterComponent } from './choice-register.component';
import { AdressSearchComponent } from './adress-search.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ProfileproComponent } from './edit/profilepro.component';




@NgModule({
  declarations: [LoginUserComponent, RegisterUserComponent, RegisterProComponent, ChoiceRegisterComponent, AdressSearchComponent, ProfileproComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class AuthModule { }
