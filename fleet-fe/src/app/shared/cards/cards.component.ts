import { SwalUtils } from './../../utils/SwalUtils';
import { Component, Input } from '@angular/core';
import { VeiculosService } from 'src/app/core/veiculos.service';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent  {
  @Input() marca = ""
  @Input() modelo = ""
  @Input() versao = ""
  @Input() anoFabricacao = 0
  @Input() anoModelo = 0
  @Input() cor = ""
  @Input() blindado = true
  @Input() kilometragem = 0
  @Input() placa = ""
  @Input() renavam = 0
  @Input() id = 0

  constructor(
    private veiculosService: VeiculosService,
    private homeComponent: HomeComponent,
    private swall: SwalUtils
  ) { }

  remover(id: number) {
    this.swall.showConfirm('Deseja remover o veiculo?').then(response => {
      if (response.isConfirmed) {
        this.veiculosService.delete(id).subscribe(() => {
          this.swall.showSuccessMessage("Veiculo removido com sucesso")
          setTimeout(() => {
            this.homeComponent.listarVeiculos()
          }, 250);

        }, () => {
          this.swall.showGenericWaring("Ocorreu um erro ao remover o veiculo")
        })
      }
    });


  }
}
