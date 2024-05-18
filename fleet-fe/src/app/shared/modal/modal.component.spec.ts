import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { VeiculosService } from 'src/app/core/veiculos.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from 'src/app/home/home.component';
import { SwalUtils } from 'src/app/utils/SwalUtils';
import { HttpClient } from '@angular/common/http';
const mockHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   let service: VeiculosService;
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ModalComponent],
      providers: [
        { provide: VeiculosService, useValue: {} },
        { provide: MatDialogRef, useValue: { close: () => {true} } },
        { provide: HomeComponent, useValue: {} },
        { provide: SwalUtils, useValue: {} }, VeiculosService,
        { provide: HttpClient, useValue: mockHttpClient },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ModalComponent);
    service = TestBed.inject(VeiculosService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should #salvar',()=>{
    component.salvar();
    fixture.detectChanges();
    const spyServ = spyOn(service,'salvarNovoVeiculo').and.callThrough();
    expect(spyServ).toBeTruthy()

  })

});
