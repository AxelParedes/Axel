import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';

interface Location {
  name: string;
  lat: number;
  lon: number;
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  locations: Location[] = [
    { name: 'Aguascalientes', lat: 21.8823, lon: -102.2826 },
    { name: 'CDMX', lat: 19.4326, lon: -99.1332 },
    { name: 'Yucatán', lat: 20.7099, lon: -89.0943 },
    { name: 'Baja California Sur', lat: 24.1444, lon: -110.3005 },
    { name: 'Monterrey', lat: 25.6866, lon: -100.3161 },
    { name: 'Guadalajara', lat: 20.6597, lon: -103.3496 },
    { name: 'Jalisco', lat: 20.6736, lon: -103.344 },
    { name: 'San Luis Potosí', lat: 22.1566, lon: -100.9855 }
  ];

  selectedLocation: Location = this.locations[0];
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    console.log('Consultando clima para:', this.selectedLocation);
    const { lat, lon } = this.selectedLocation;
    this.weatherService.getWeather(lat, lon).subscribe(
      data => {
        console.log('Datos del clima recibidos:', data);
        this.weatherData = this.processWeatherData(data);
      },
      error => {
        console.error('Error al obtener datos del clima:', error);
      }
    );
  }

  processWeatherData(data: any) {
    return {
      lon: data.coord.lon,
      lat: data.coord.lat,
      description: data.weather[0].description,
      temp: {
        current: this.convertKelvinToCelsius(data.main.temp),
        min: this.convertKelvinToCelsius(data.main.temp_min),
        max: this.convertKelvinToCelsius(data.main.temp_max),
        currentF: this.convertKelvinToFahrenheit(data.main.temp),
        minF: this.convertKelvinToFahrenheit(data.main.temp_min),
        maxF: this.convertKelvinToFahrenheit(data.main.temp_max),
      },
      humidity: data.main.humidity,
      clouds: data.clouds.all,
      country: data.sys.country,
      city: data.name
    };
  }

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }

  convertKelvinToFahrenheit(kelvin: number): number {
    return (kelvin - 273.15) * 9/5 + 32;
  }
}
