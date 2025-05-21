import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss'],
  standalone: true,  // ✅ Esto es lo que te falta
  imports: [
    RouterModule,
    IonicModule
  ]
})
export class ListarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
