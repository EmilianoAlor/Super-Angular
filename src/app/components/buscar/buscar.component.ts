import { Component, OnInit } from '@angular/core';
import { SuperService} from '../../services/super.service';
//importarmos al AActiveRouytyer para poder obtener la url con el ID
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

public pedido;

  constructor(private SuperMercado: SuperService, private direccion: ActivatedRoute) { }

  ngOnInit() {

    this.getPedidoReg(this.direccion.snapshot.params.id);

  }

getPedidoReg(id:number){
  this.SuperMercado.getPedido(id).subscribe(
    data=>{
      this.pedido=data;
    },
  )
}

}
