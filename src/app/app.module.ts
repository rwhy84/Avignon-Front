import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { EventListComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './ui/navbar.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventCreateComponent } from './event/event-create.component';
import { EventEditComponent } from './event/event-edit.component';
import { EtablissementListComponent } from './etablissement/etablissement.list.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { EventViewComponent } from './event/eventview.component';
import { BlogComponent } from './blog/blog.component';
import { BloglistComponent } from './blog/bloglist.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';













registerLocaleData(localeFr);
// import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EtablissementListComponent,
    NavbarComponent,
    HomeComponent,
    MapComponent,
    FooterComponent,
    EventCreateComponent,
    EventEditComponent,
    EtablissementComponent,
    EventViewComponent,
    BlogComponent,
    BloglistComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    FontAwesomeModule,
    EditorModule,
    [SweetAlert2Module.forRoot()]


  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
