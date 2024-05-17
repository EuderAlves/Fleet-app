import { SwalUtils } from './../../utils/SwalUtils';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { VeiculosService } from 'src/app/core/veiculos.service';
import { HomeComponent } from 'src/app/home/home.component';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private formiBuilder: FormBuilder,
    private veiculosService: VeiculosService,
    private dialogRef: MatDialogRef<ModalComponent>,
    private homeComponent: HomeComponent,
    private swall: SwalUtils
  ) {
    this.formGroup = this.formiBuilder.group({
      marca: [null, Validators.required],
      modelo: [null, Validators.required],
      versao: [null, Validators.required],
      anoFabricacao: [null, Validators.required],
      anoModelo: [null, Validators.required],
      cor: [null, Validators.required],
      blindado: [null],
      kilometragem: [null, Validators.required],
      placa: [null, Validators.required],
      renavam: [null, Validators.required]
    })
  }

  ngOnInit(): void {

  }

  salvar() {
    if (this.formGroup.valid) {
      this.veiculosService.salvarNovoVeiculo(this.formGroup.value).subscribe((resp) => {
        this.swall.showSuccessMessage("Veiculo novo salvo com sucesso")
        this.dialogRef.close();
        setTimeout(() => {
          window.location.reload();
        }, 1000);

      }, (err) => {
        this.swall.showGenericWaring("Ocorreu um erro ao salvar")
      })
    }

  }
}
