import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,  } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'; // ✅ IMPORTA RouterModule
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule  // ✅ SOLO este para todos los componentes de Ionic
    
  ]
})
export class VehiculosPage implements OnInit {
  constructor() {}
  ngOnInit() {}
  vehiculos = [
    {
      marca: 'Toyota',
      modelo: 'Corolla',
      placa: 'ABC-123',
      anio: 2020,
      color: 'Rojo',
      propietario: 'Juan Pérez'
    },
    {
      marca: 'Hyundai',
      modelo: 'Elantra',
      placa: 'XYZ-789',
      anio: 2019,
      color: 'Azul',
      propietario: 'Ana García'
    },
    {
      marca: 'Hyundai',
      modelo: 'Elantra',
      placa: 'XYZ-789',
      anio: 2019,
      color: 'Azul',
      propietario: 'Ana García'
    }
  ];
}
