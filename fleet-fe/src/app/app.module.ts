import { SwalUtils } from './utils/SwalUtils';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './shared/container/container.component';
import { CardsComponent } from './shared/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscaComponent } from './shared/busca/busca.component';
import { ModalComponent } from './shared/modal/modal.component';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    ContainerComponent,
    CardsComponent,
    BuscaComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatDialogModule
  ],
  providers: [
    HomeComponent,
    SwalUtils,
    provideNgxMask()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
