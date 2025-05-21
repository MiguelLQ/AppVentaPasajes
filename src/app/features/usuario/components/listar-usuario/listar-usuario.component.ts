import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { usuarioService } from '../../services/usuarioService';
import { Iusuario } from '../../services/Iusuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss'],
  standalone: true,  // ✅ Esto es lo que te falta
  imports: [
    RouterModule,
    IonicModule,
    CommonModule
  ]
})
export class ListarUsuarioComponent implements OnInit {

  constructor() { }
  usuarioServicio = inject(usuarioService);
  usuario: Iusuario[] = [];
  ngOnInit() { 
     this.listaUsuario();
  }
  listaUsuario(): void {
    this.usuarioServicio.getUsuario().subscribe({
      next: (usuarios: Iusuario[]) => {
        this.usuario = usuarios;
      }
    })
  }

}
