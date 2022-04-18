import { Itraking } from './traking';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TrakingService {
  constructor(private HttpClient: HttpClient) {}
  getTraking() {
    return this.HttpClient.get<Itraking[]>(
      'https://mocki.io/v1/2faa7147-62e0-4fd4-98a3-ca45b01d3b74'
    );
  }
  getRoles() {
    return this.HttpClient.get<Itraking[]>(
      'https://mocki.io/v1/c254d9fe-5abc-41f6-95e6-d45078e3c896'
    );
  }

}
