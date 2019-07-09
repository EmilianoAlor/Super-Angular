import { Component, OnInit } from '@angular/core';
import { SuperService} from '../../services/super.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public pedidos;

  constructor(private SuperMercado: SuperService) { }

  ngOnInit() {
    this.getPedidos();
  }

  getPedidos(){
    this.SuperMercado.getPedidos().subscribe(
      data => {this.pedidos =data},
      err => {console.error(err)},
      ()=> console.log('pedidos cargados') 
    );
  }

}
