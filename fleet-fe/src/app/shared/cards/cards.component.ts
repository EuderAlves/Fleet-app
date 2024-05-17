import { Component, Input, OnInit } from '@angular/core';
import { VeiculosService } from 'src/app/core/veiculos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
@Input() marca:string =""
@Input() modelo:string =""
@Input() versao:string =""
@Input() anoFabricacao:number =0
@Input() anoModelo:number =0
@Input() cor:string =""
@Input() blindado:boolean =true
@Input() kilometragem:number =0
@Input() placa:string =""
@Input() renavam:number =0
@Input() id:number =0

  constructor(private veiculosService: VeiculosService){}


  ngOnInit(): void {

  }
  remover(id:number){
    this.veiculosService.delete(id).subscribe((resp)=>{
     resp
    })

  }
}
