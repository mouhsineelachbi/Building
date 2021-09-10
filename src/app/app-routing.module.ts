import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NetworkComponent } from './components/dashboard/my/network/network.component';
import { OrdersComponent } from './components/dashboard/my/orders/orders.component';
import { ProductsComponent } from './components/dashboard/my/products/products.component';
import { ConnexionComponent } from './components/dashboard/my/profil/connexion/connexion.component';
import { ContactComponent } from './components/dashboard/my/profil/contact/contact.component';
import { EntrepriseComponent } from './components/dashboard/my/profil/entreprise/entreprise.component';
import { ProfilComponent } from './components/dashboard/my/profil/profil.component';
import { StatisticsComponent } from './components/dashboard/my/statistics/statistics.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'dashboard/my', component: DashboardComponent, children: [
    {path: 'profil', component: ProfilComponent, children: [
      { path: 'entreprise' , component: EntrepriseComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'connexion', component: ConnexionComponent},
    ]},
    {path: 'products', component: ProductsComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'network', component: NetworkComponent},
    {path: 'statistics', component: StatisticsComponent},

  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
