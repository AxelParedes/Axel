import { Component } from '@angular/core';
import { MunicipiosService } from '../municipios.service';
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
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})
export class MunicipiosComponent {
  estado: string = '';
  municipios: Municipio[] = [];
  errorMessage: string = '';

  constructor(private municipiosService: MunicipiosService) {}

  buscarMunicipios() {
    this.municipiosService.getMunicipios().subscribe(
      data => {
        console.log('Datos obtenidos:', data);
        if (data.results) {
          this.municipios = data.results.filter((municipio: Municipio) => municipio.state.toLowerCase() === this.estado.toLowerCase());
          if (this.municipios.length === 0) {
            this.errorMessage = 'No se encontraron municipios para el estado ingresado.';
          } else {
            this.errorMessage = '';
          }
        } else {
          this.municipios = [];
          this.errorMessage = 'No se encontraron datos en la respuesta de la API.';
        }
      },
      error => {
        this.municipios = []; // Asegúrate de limpiar los datos anteriores en caso de error
        this.errorMessage = 'Error al obtener los datos. Inténtelo de nuevo más tarde.';
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}
