import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:3000/weather';

  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<any> {
    console.log(`Requesting weather data for lat=${lat}, lon=${lon}`);
    return this.http.get(`${this.apiUrl}?lat=${lat}&lon=${lon}`);
  }
}
