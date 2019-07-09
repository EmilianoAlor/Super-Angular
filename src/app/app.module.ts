import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Servicio  de supermercado. Es quien pedira la informacion al Spring Boot
import { SuperService } from './services/super.service';

import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule} from '@angular/forms';
import { BuscarComponent } from './components/buscar/buscar.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UpdateComponent } from './components/update/update.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    BuscarComponent,
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SuperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
