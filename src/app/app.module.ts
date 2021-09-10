import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LangComponent } from './components/shared/lang/lang.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng9PasswordStrengthBarModule } from 'ng9-password-strength-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2TelInputModule} from 'ng2-tel-input';

import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SocialMediaComponent } from './components/auth/social-media/social-media.component';
import { HomeComponent } from './components/home/home.component';
import { ProfilComponent } from './components/dashboard/my/profil/profil.component';
import { ProductsComponent } from './components/dashboard/my/products/products.component';
import { OrdersComponent } from './components/dashboard/my/orders/orders.component';
import { StatisticsComponent } from './components/dashboard/my/statistics/statistics.component';
import { NetworkComponent } from './components/dashboard/my/network/network.component';
import { MenuComponent } from './components/dashboard/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuProfilComponent } from './components/dashboard/my/profil/menu-profil/menu-profil.component';
import { EntrepriseComponent } from './components/dashboard/my/profil/entreprise/entreprise.component';
import { ContactComponent } from './components/dashboard/my/profil/contact/contact.component';
import { ConnexionComponent } from './components/dashboard/my/profil/connexion/connexion.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    LangComponent,
    SocialMediaComponent,
    HomeComponent,
    ProfilComponent,
    ProductsComponent,
    OrdersComponent,
    StatisticsComponent,
    NetworkComponent,
    MenuComponent,
    DashboardComponent,
    MenuProfilComponent,
    EntrepriseComponent,
    ContactComponent,
    ConnexionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    Ng9PasswordStrengthBarModule,
    BrowserAnimationsModule,
    Ng2TelInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
