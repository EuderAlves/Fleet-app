import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Veiculos } from '../model/veiculos.model';

@Injectable({
  providedIn: 'root',
})
export class VeiculosService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  listaVeiculos(): Observable<Veiculos[]> {
    return this.httpClient.get<Veiculos[]>(`${this.apiUrl}/veiculos`);
  }
  salvarNovoVeiculo(newVeiculo: Veiculos): Observable<Veiculos> {
    return this.httpClient.post<Veiculos>(
      `${this.apiUrl}/veiculos`,
      newVeiculo
    );
  }
  delete(id: number): Observable<number> {
    return this.httpClient.delete<number>(`${this.apiUrl}/veiculos/${id}`);
  }
}
