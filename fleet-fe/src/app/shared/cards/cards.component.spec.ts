import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import { VeiculosService } from 'src/app/core/veiculos.service';
import { HomeComponent } from 'src/app/home/home.component';
import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SwalUtils } from 'src/app/utils/SwalUtils';
import Swal from 'sweetalert2';
const mockHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: VeiculosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CardsComponent],
      providers: [
        { provide: VeiculosService, useValue: {} },
        { provide: HomeComponent, useValue: {} }, VeiculosService,
        { provide: HttpClient, useValue: mockHttpClient },
        { provide: SwalUtils, useValue: {} },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CardsComponent);
    service = TestBed.inject(VeiculosService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should #remove', () => {
    const spy = spyOn(Swal, 'fire');
    expect(spy).toBeTruthy()
  })
});
