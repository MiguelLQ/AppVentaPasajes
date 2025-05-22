import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // ✅ Importa esto

import { SigningComponent } from '../../components/signing/signing.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,        // ✅ Incluye todos los componentes de Ionic (ion-button, etc.)
    SigningComponent    // ✅ Tu componente de formulario de login
  ]
})
export class LoginPage implements OnInit {
  constructor() { }

  ngOnInit() {}
}
