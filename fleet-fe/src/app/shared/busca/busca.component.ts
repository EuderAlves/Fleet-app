import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Veiculos } from 'src/app/model/veiculos.model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent  {
  @Input() listaVeiculos: Veiculos[] = [];
  @Output() newListVeiculos =  new EventEmitter<Veiculos[]>();

  public buscar!: string | number;

  constructor(public dialog: MatDialog) { }


  filtroVeiculos(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue != undefined) {
      const newLista:Veiculos[] = this.listaVeiculos.filter((el) =>
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
      this.newListVeiculos.emit(newLista)
    }
  }
  adicionar(){
    this.dialog.open(ModalComponent)
  }

}
