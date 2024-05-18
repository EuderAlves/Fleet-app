import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { VeiculosService } from '../core/veiculos.service';
import { NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpClient } from '@angular/common/http';
const mockHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);
describe('HomeComponent', () => {
  let component:HomeComponent
  let fixture: ComponentFixture<HomeComponent>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: VeiculosService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let httpClient: HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [
        { provide: VeiculosService, useValue: {} },
        { provide: HomeComponent, useValue: {} },VeiculosService,
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

  // it('should get #listarVeiculos', ()=>{
  //   const mockVeiculos: Veiculos[] = [{
  //           id: 0, marca: 'Ford', modelo: 'Fiesta',
  //           versao: '',
  //           anoFabricacao: 0,
  //           anoModelo: 0,
  //           cor: '',
  //           blindado: false,
  //           kilometragem: 0,
  //           placa: '',
  //           renavam: 0
  //         }];
  // component.listarVeiculos();
  // fixture.detectChanges()
  // const spyServ = spyOn(service,'listaVeiculos').and.returnValue(of(mockVeiculos));

  // expect(spyServ).toBeTruthy()

  // })
//   it('should get listarVeiculos', () => {
//     const mockVeiculos: Veiculos[] = [{
//       id: 0, marca: 'Ford', modelo: 'Fiesta',
//       versao: '',
//       anoFabricacao: 0,
//       anoModelo: 0,
//       cor: '',
//       blindado: false,
//       kilometragem: 0,
//       placa: '',
//       renavam: 0
//     }];

// const listarV =component.listarVeiculos();
// expect(listarV).toContain(mockVeiculos)


//     // expect(component.listaVeiculos).toBeUndefined();
//     // expect(component.listaAtualizadaVeiculos).toBeUndefined();

//   })

  // it('should update listaVeiculos and listaAtualizadaVeiculos on listarVeiculos call', () => {
  //   const mockVeiculos: Veiculos[] = [{ id: 1, marca: 'Ford', modelo: 'Fiesta' }];

  //   // Mock the service behavior
  //   spyOn(veiculosService, 'listarVeituclos').and.returnValue(of(mockVeiculos));

  //   component.listarVeiculos();

  //   expect(component.listaVeiculos).toEqual(mockVeiculos);
  //   expect(component.listaAtualizadaVeiculos).toEqual(mockVeiculos);
  // });

  // it('should update listaAtualizadaVeiculos on newListVwiculos call with different list', () => {
  //   const initialList: Veiculos[] = [{ id: 1, marca: 'Ford', modelo: 'Fiesta' }];
  //   const updatedList: Veiculos[] = [{ id: 2, marca: 'Honda', modelo: 'Civic' }];

  //   component.listaVeiculos = initialList;
  //   component.listaAtualizadaVeiculos = initialList;

  //   component.newListVwiculos(updatedList);

  //   expect(component.listaAtualizadaVeiculos).toEqual(updatedList);
  //   expect(component.listaVeiculos).not.toEqual(updatedList); // Original list shouldn't change
  // });

  // it('should not update listaAtualizadaVeiculos on newListVwiculos call with same list', () => {
  //   const sameList: Veiculos[] = [{ id: 1, marca: 'Ford', modelo: 'Fiesta' }];

  //   component.listaVeiculos = sameList;
  //   component.listaAtualizadaVeiculos = sameList;

  //   component.newListVwiculos(sameList);

  //   expect(component.listaAtualizadaVeiculos).toEqual(sameList);
  // });
});
