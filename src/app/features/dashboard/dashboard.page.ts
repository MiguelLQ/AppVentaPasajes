import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle,
   IonToolbar, IonCardHeader, IonCardTitle
  , IonCardContent, IonLabel, IonCard,
IonItem, IonListHeader, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle,
     IonToolbar, CommonModule, FormsModule,
      IonCardHeader, IonCardTitle,
    IonCardContent, IonLabel, IonCard,
  IonItem, IonListHeader, IonList]
})
export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
