import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Veiculos } from '../model/veiculos.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private apiUrl: string = environment.apiUrl

  constructor(
    private httpClient: HttpClient
  ) { }

  listarVeituclos(): Observable<Veiculos[]> {
    return this.httpClient.get<Veiculos[]>(`${this.apiUrl}/veiculos`)
  }
}
