import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Municipio {
  name: string;
  state: string;
  relativehumidity: number;
  longitude: number;
  latitude: number;
  tempc: number;
  windspeedkm: number;
}

@Component({
  selector: 'app-municipios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})
export class MunicipiosComponent {
  estado: string = '';
  municipios: Municipio[] = [];
  estadosValidos: string[] = ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Chihuahua', 'Campeche', 'Coahuila'];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  buscarMunicipios() {
    if (this.estadosValidos.includes(this.estado)) {
      this.errorMessage = '';
      this.http.get<any>(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?estado=${this.estado}`).subscribe(
        data => {
          this.municipios = data.results;
        },
        error => {
          console.error('Error al obtener los municipios:', error);
        }
      );
    } else {
      this.errorMessage = 'Por favor ingresa un estado válido.';
    }
  }
}
