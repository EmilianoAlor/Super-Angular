import { Component, OnInit } from '@angular/core';
import { SuperService } from '../../services/super.service';
import { ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public pedido;
  pedidoForm: FormGroup;

  MensajeValidar: string = "";

  constructor(private SuperMercado: SuperService, private direccion: ActivatedRoute) { }

  ngOnInit() {

    this.getPedidoReg(this.direccion.snapshot.params.id);

    this.pedidoForm = new FormGroup({
      idusuario: new FormControl('',Validators.required),
      cancelarElPedido: new FormControl(), //'',Validators.required),
      precioTotalDelPedido: new FormControl('',Validators.required)
    });

  }

getPedidoReg(id:number){
  this.SuperMercado.getPedido(id).subscribe(
    data=>{
      this.pedido=data;
    },
  )
}

submitUpdate(){
console.log('update activado.');
console.log(this.direccion.snapshot.params.id);
if (this.pedidoForm.valid){
  this.MensajeValidar = "La informacion es valida para enviar.";
  this.SuperMercado.UpdatePedido(this.pedidoForm.value,this.direccion.snapshot.params.id).subscribe(
    data => {
      this.pedidoForm.reset;
      return true;
    }
  )
  // this.SuperMercado.createPedido(this.pedidoForm.value).subscribe(
  //   data => {
  //     this.pedidoForm.reset;
  //     return true;
  //   },
  // )
}else{
  this.MensajeValidar = "Falta alguna informacion a ingresar.";
}
}


}
