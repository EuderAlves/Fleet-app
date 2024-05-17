import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculosService } from 'src/app/core/veiculos.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private formiBuilder: FormBuilder,private veiculosService: VeiculosService ) {
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
    if(this.formGroup.valid){
      this.veiculosService.salvarNovoVeiculo(this.formGroup.value).subscribe((resp)=>{
        console.log(resp)
      })
    }
    console.log(this.formGroup.value)

  }
}
