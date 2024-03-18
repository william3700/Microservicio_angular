import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.css'
})
export class ListasComponent {
     productos=['accion','comedia','romance','documetal','animacion','Scs-Fi','Horror'];
}
