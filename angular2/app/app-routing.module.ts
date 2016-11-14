import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogbookComponent }   from './component/logbook/logbook.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { LoginService }         from './service/login.service';


const routes: Routes = [
  { path: '', redirectTo: '/logbook', pathMatch: 'full' },
  { path: 'logbook',  component: LogbookComponent, canActivate: [LoginService]},
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [LoginService] },
  { path: 'map',     component: HeroesComponent, canActivate: [LoginService] }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}