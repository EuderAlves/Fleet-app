import { Veiculos } from '../model/veiculos.model';
import { VeiculosService } from './../core/veiculos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public listaVeiculos!: Veiculos[];
  constructor(private veiculosService: VeiculosService) { }

  ngOnInit(): void {
    this.listarVeiculos()
  }
  listarVeiculos() {
    this.veiculosService.listarVeituclos().subscribe((resp) => {
      this.listaVeiculos = resp
    })
  }
}
