import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { VeiculosService } from '../core/veiculos.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Veiculos } from '../model/veiculos.model';
import { of } from 'rxjs';
const mockHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);
describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: VeiculosService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [
        { provide: VeiculosService, useValue: {} },
        { provide: HomeComponent, useValue: {} }, VeiculosService,
        { provide: HttpClient, useValue: mockHttpClient },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    service = TestBed.inject(VeiculosService);
    component = fixture.componentInstance;
  });


  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should get #listarVeiculos', () => {
    const mockVeiculos: Veiculos[] = [{
      id: 0, marca: 'Ford', modelo: 'Fiesta',
      versao: '',
      anoFabricacao: 0,
      anoModelo: 0,
      cor: '',
      blindado: false,
      kilometragem: 0,
      placa: '',
      renavam: 0
    }];
    const spyServ = spyOn(service, 'listaVeiculos').and.callFake(() => {
      return of(mockVeiculos)
    }).and.returnValue(of(mockVeiculos));
    component.listarVeiculos();
    fixture.detectChanges()
    expect(spyServ).toBeTruthy()

    expect(component.listaVeiculos).toEqual(mockVeiculos);
    expect(component.listaAtualizadaVeiculos).toEqual(mockVeiculos);
  })

  it('should get #newListVwiculos', () => {
    const mockVeiculos: Veiculos[] = [{
      id: 0, marca: 'Ford', modelo: 'Fiesta',
      versao: '',
      anoFabricacao: 0,
      anoModelo: 0,
      cor: '',
      blindado: false,
      kilometragem: 0,
      placa: '',
      renavam: 0
    }];
    const spyServ = spyOn(service, 'listaVeiculos').and.callFake(() => {
      return of(mockVeiculos)
    }).and.returnValue(of(mockVeiculos));
    component.newListVwiculos(mockVeiculos);
    fixture.detectChanges()
    expect(spyServ).toBeTruthy()
    expect(component.listaVeiculos).toEqual(mockVeiculos);
    expect(component.listaAtualizadaVeiculos).toEqual(mockVeiculos);
  })

});
