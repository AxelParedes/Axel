import { Routes } from '@angular/router';
import { MunicipiosComponent } from './municipios/municipios.component';
import { WeatherComponent } from './weather/weather.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'municipio', component: MunicipiosComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
