import { Component, Input, OnInit, Output } from '@angular/core';
import { Veiculos } from 'src/app/model/veiculos.model';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  @Input() listaVeiculos: Veiculos[] = [];
  @Output() newListVeiculos: Veiculos[] = [];

  public buscar!: string | number;

  constructor() { }

  ngOnInit(): void {


  }

  filtroVeiculos(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    debugger;
    if (filterValue != undefined) {
      this.newListVeiculos = this.listaVeiculos.filter((el) =>
        el.marca.includes(filterValue) ||
        el.modelo.includes(filterValue) ||
        el.versao.includes(filterValue) ||
        el.anoFabricacao.toString().includes(filterValue) ||
        el.anoModelo.toString().includes(filterValue)||
        el.cor.includes(filterValue) ||
        el.kilometragem .toString().includes(filterValue)||
        el.placa.toString().includes(filterValue)||
        el.renavam.toString().includes(filterValue)
      )
    }
  }
  adicionar(){

  }

}
