// src/app/layouts/auth-layout/auth-layout.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  imports: [
    CommonModule,   // para *ngIf, *ngFor, etc.
    IonicModule,    // para ion-app, ion-content, etc.
    RouterModule    // para <router-outlet>
  ]
})
export class AuthLayoutComponent {}
