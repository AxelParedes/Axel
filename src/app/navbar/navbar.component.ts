import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MunicipiosComponent } from '../municipios/municipios.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
}
