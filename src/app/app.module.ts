import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { JuegosComponent } from './juegos/juegos.component';
import { JuegoService } from './juegos/juego.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormComponent as JuegosFormComponent } from './form/form.component';
import { CompaniesComponent } from './companies/companies.component';
import { FormsModule } from '@angular/forms';
import { CompanyService } from './companies/company.service';

const ROUTES: Routes = [
  {path: '', redirectTo: '/juegos', pathMatch: 'full'},
  {path: 'juegos', component: JuegosComponent},
  {path: 'juegos/form', component: JuegosFormComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'juegos/form/:id', component: JuegosFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    JuegosComponent,
    AlertComponent,
    HeaderComponent,
    JuegosFormComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [JuegoService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
