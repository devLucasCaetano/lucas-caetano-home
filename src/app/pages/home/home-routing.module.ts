import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  // {
  //   path: 'about', loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
  // },
  // {
  //   path: 'contact', loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
