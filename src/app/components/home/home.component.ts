import { Component, OnInit } from '@angular/core';
import { SuperService } from '../../services/super.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

pedidoForm: FormGroup;

MensajeValidar: string = "";

  constructor(private SuperMercado: SuperService) { }

  ngOnInit() {

    this.pedidoForm = new FormGroup({
      idusuario: new FormControl('',Validators.required),
      cancelarElPedido: new FormControl(), //'',Validators.required),
      precioTotalDelPedido: new FormControl('',Validators.required)
    });

  }

  submitRegistrar(){
    if (this.pedidoForm.valid){
      this.MensajeValidar = "La informacion es valida para enviar.";
      this.SuperMercado.createPedido(this.pedidoForm.value).subscribe(
        data => {
          this.pedidoForm.reset;
          return true;
        },
      )
    }else{
      this.MensajeValidar = "Falta alguna informacion a ingresar.";
    }
  }

}
