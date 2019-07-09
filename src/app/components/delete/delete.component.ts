import { Component, OnInit } from '@angular/core';
import { SuperService } from '../../services/super.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private SuperMercado: SuperService, private direccion: ActivatedRoute) { }


  public pedido;

  ngOnInit() {
    this.deleteRegistro(this.direccion.snapshot.params.id);
  }

  deleteRegistro(id:number)
  {
    console.log('ingreso a borrar.' + id);
    this.SuperMercado.getDeletePedido(id).subscribe();
    //   data=>{
    //     this.pedido=data;
    //   },
    // )
  }
}
