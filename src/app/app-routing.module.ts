import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent} from '../app/components/admin/admin.component';
import { HomeComponent } from '../app/components/home/home.component';
import { BuscarComponent} from '../app/components/buscar/buscar.component';
import { DeleteComponent } from '../app/components/delete/delete.component';
import { UpdateComponent } from '../app/components/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'admin/update/:id',
    component: UpdateComponent

  },
  {
    path: 'admin/buscar/:id',
    component: BuscarComponent

  },
  {
    path: 'admin/borrar/:id',
    component: DeleteComponent
  },
  {
    path: 'admin',
    component: AdminComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
