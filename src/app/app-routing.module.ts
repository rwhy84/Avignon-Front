import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginUserComponent } from './auth/login-user.component';
import { RegisterUserComponent } from './auth/register-user.component';
import { RegisterProComponent } from './auth/register-pro.component';
import { EventListComponent } from './event/event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChoiceRegisterComponent } from './auth/choice-register.component';
import { HomeComponent } from './home/home.component';
import { AdressSearchComponent } from './auth/adress-search.component';
import { MapComponent } from './map/map.component';
import { ProfileproComponent } from './auth/edit/profilepro.component';
import { UserResolverService } from './auth/user-resolver.service';
import { EventResolverService } from './event/event-resolver.service';
import { EventEditComponent } from './event/event-edit.component';
import { EtablissementListComponent } from './etablissement/etablissement.list.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { EventViewComponent } from './event/eventview.component';
import { EventCreateComponent } from './event/event-create.component';
import { BloglistComponent } from './blog/bloglist.component';
import { BlogComponent } from './blog/blog.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: AdressSearchComponent },
  { path: 'map', component: MapComponent },
  { path: 'blog', component: BloglistComponent },
  { path: 'blog/article/:id', component: BlogComponent },
  { path: 'profile/edit/:id', component: ProfileproComponent, canActivate: [AuthGuard], resolve: { user: UserResolverService } },
  { path: 'event/edit/:id', component: EventEditComponent, canActivate: [AuthGuard], resolve: { event: EventResolverService } },
  { path: 'event', component: EventListComponent },
  { path: 'event/create', component: EventCreateComponent, canActivate: [AuthGuard] },
  { path: 'event/:id', component: EventViewComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'register/choice', component: ChoiceRegisterComponent },
  { path: 'register/pro', component: RegisterProComponent },
  { path: 'etablissement/:id', component: EtablissementComponent, },
  { path: 'etablissement', component: EtablissementListComponent, },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
