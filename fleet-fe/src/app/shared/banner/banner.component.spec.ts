import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { VeiculosService } from 'src/app/core/veiculos.service';
import { HomeComponent } from 'src/app/home/home.component';
import { HttpClient } from '@angular/common/http';
import { SwalUtils } from 'src/app/utils/SwalUtils';
import { MatDialogRef } from '@angular/material/dialog';
const mockHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BannerComponent],
      providers: [
        { provide: VeiculosService, useValue: {} },
        { provide: MatDialogRef, useValue: { close: () => {true} } },
        { provide: HomeComponent, useValue: {} }, VeiculosService,
        { provide: HttpClient, useValue: mockHttpClient },
        { provide: SwalUtils, useValue: {} },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
