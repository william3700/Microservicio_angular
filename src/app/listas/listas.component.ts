import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from '../servicios/rest.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [RouterLink,CommonModule,HttpClientModule ],
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.css'
})
export class ListasComponent {
     productos=['100','accion','comedia','romance','documetal','animacion','Scs-Fi','Horror'];

    public datos:any=[];

constructor(private RestService:RestService){}

ngOnInit(): void{
  this.cargarDatos();
}

public cargarDatos(){
  this.RestService.get('https://jsonplaceholder.typicode.com/comments')
  .subscribe(respuesta=>{this.datos=respuesta});
}


     
}
