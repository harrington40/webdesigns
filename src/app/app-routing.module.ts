import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MenberComponent  } from './menber/menber.component';

const routes: Routes = [
  { path: 'homepage', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
  { path: '', redirectTo:  '/homepage',  pathMatch:  'full'},
  { path: 'menber', loadChildren: () => import('./menber/menber.module').then(m => m.MenberModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
