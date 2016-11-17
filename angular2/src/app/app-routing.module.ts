import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogbookComponent }   from './component/logbook/logbook.component';
import { LogDetailComponent }   from './component/logdetail/log-detail.component';
import { LeafletComponent } from './component/leaflet/leaflet.component';

import { LoginService }         from './service/login.service';


const routes: Routes = [
  { path: '', redirectTo: '/logbook', pathMatch: 'full' },
  { path: 'logbook',  component: LogbookComponent, canActivate: [LoginService]},
  { path: 'detail/:id', component: LogDetailComponent, canActivate: [LoginService] },
  { path: 'map',     component: LeafletComponent, canActivate: [LoginService] }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}