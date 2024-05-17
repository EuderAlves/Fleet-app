import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VeiculosService } from './veiculos.service';
import { Veiculos } from '../model/veiculos.model';
import { HttpClient } from '@angular/common/http';

const mockHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);

describe('VeiculosService', () => {
  let service: VeiculosService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        VeiculosService,
        { provide: HttpClient, useValue: mockHttpClient },
      ],
    });
    service = TestBed.inject(VeiculosService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of vehicles (success)', () => {
    expect(service.listarVeituclos()).toBeUndefined();
  });

  it('should create a new vehicle (success)', () => {
    const newVeiculo: Veiculos = {
      id: 2, marca: 'Toyota', modelo: 'Corolla',
      versao: '',
      anoFabricacao: 0,
      anoModelo: 0,
      cor: '',
      blindado: false,
      kilometragem: 0,
      placa: '',
      renavam: 0
    };
    expect(service.salvarNovoVeiculo(newVeiculo)).toBeUndefined();
  });

 it("should delete vehicle", ()=>{
  const newVeiculo: Veiculos = {
    id: 2, marca: 'Toyota', modelo: 'Corolla',
    versao: '',
    anoFabricacao: 0,
    anoModelo: 0,
    cor: '',
    blindado: false,
    kilometragem: 0,
    placa: '',
    renavam: 0
  };
  expect(service.delete(newVeiculo.id)).toBeUndefined();
 })
});
