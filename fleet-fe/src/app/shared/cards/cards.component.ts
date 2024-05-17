import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
@Input() marca:string =""
@Input() modelo:string =""
@Input() versao:string =""
@Input() anoFabricacao:string =""
@Input() anoModelo:string =""
@Input() cor:string =""
@Input() blindado:string =""
@Input() kilometragem:string =""
@Input() placa:string =""
@Input() renavam:string =""
@Input() id:string =""

  constructor(){}

  ngOnInit(): void {

  }
  remover(id:string){

  }
}
