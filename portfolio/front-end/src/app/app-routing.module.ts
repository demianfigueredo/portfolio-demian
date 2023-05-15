import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component:PortfolioComponent},
  {path: 'signin', component:SignInComponent},
  {path: 'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
