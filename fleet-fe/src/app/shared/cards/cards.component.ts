import { SwalUtils } from './../../utils/SwalUtils';
import { Component, Input, OnInit } from '@angular/core';
import { VeiculosService } from 'src/app/core/veiculos.service';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() marca: string = ""
  @Input() modelo: string = ""
  @Input() versao: string = ""
  @Input() anoFabricacao: number = 0
  @Input() anoModelo: number = 0
  @Input() cor: string = ""
  @Input() blindado: boolean = true
  @Input() kilometragem: number = 0
  @Input() placa: string = ""
  @Input() renavam: number = 0
  @Input() id: number = 0

  constructor(
    private veiculosService: VeiculosService,
    private homeComponent: HomeComponent,
    private swall: SwalUtils
  ) { }


  ngOnInit(): void {

  }
  remover(id: number) {
    this.swall.showConfirm('Deseja remover o veiculo?').then(response => {
      if (response.isConfirmed) {
        this.veiculosService.delete(id).subscribe((resp) => {
          this.swall.showSuccessMessage("Veiculo removido com sucesso")
          setTimeout(() => {
            this.homeComponent.listarVeiculos()
          }, 250);

        }, (err) => {
          this.swall.showGenericWaring("Ocorreu um erro ao remover o veiculo")
        })
      }
    });


  }
}
