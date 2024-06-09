import { FooterComponent } from './footer/footer.component';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { MunicipiosComponent } from './municipios/municipios.component';
import { WeatherComponent } from './weather/weather.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, MunicipiosComponent, WeatherComponent, InicioComponent, HttpClientModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
