import { Veiculos } from '../model/veiculos.model';
import { VeiculosService } from './../core/veiculos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listaVeiculos: Veiculos[] = [];
  listaAtualizadaVeiculos: Veiculos[] = [];
  constructor(private veiculosService: VeiculosService) { }

  ngOnInit(): void {
    this.listarVeiculos()
  }

  listarVeiculos(){

    this.veiculosService.listaVeiculos().subscribe((resp) => {
      this.listaVeiculos = resp
      this.listaAtualizadaVeiculos = resp
    })
  }
  newListVwiculos(listaAtualizada: Veiculos[]) {
    this.listaAtualizadaVeiculos = []
    if (this.listaVeiculos !== listaAtualizada) {
      this.listaAtualizadaVeiculos = listaAtualizada
    }
  }
}
