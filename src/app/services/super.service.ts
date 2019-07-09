import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class SuperService {

  constructor(private http: HttpClient) { }

getPedidos(){
  return this.http.get('/server/api/v1/pedido');
}

getPedido(id:number)
{
  return this.http.get('/server/api/v1/pedido/'+id);
}

createPedido(pedido){
    let body = JSON.stringify(pedido);
    return this.http.post('/server/api/v1/pedido/agregar',body,httpOptions);
}

UpdatePedido(pedido,id:number){
  let body = JSON.stringify(pedido);
  return this.http.post('/server/api/v1/pedido/modificar/'+id,body,httpOptions);
}

getDeletePedido(id:number)
{
  console.log('ingreso a borrar servicio ' + id);
  return this.http.get('/server/api/v1/pedido/borrar/'+id);
  
}

}
