import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle,
  IonToolbar, IonCardHeader, IonCardTitle
  , IonCardContent, IonLabel, IonCard,
  IonItem, IonListHeader, IonList, IonButtons,
  IonButton, IonIcon, IonGrid, IonCol, IonRow,
  IonCardSubtitle, IonInput, IonDatetime, IonAvatar, IonBadge


} from '@ionic/angular/standalone';
import { people, calendarClearSharp, airplane} from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule,
    IonCardHeader, IonCardTitle,
    IonCardContent, IonLabel, IonCard,
    IonItem, IonListHeader, IonList,
    IonGrid, IonCol, IonRow, IonCardSubtitle, IonBadge,IonIcon]
})

export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  latestBookings = [
    { flight: 'NYC to LA', date: new Date(2025, 4, 12), status: 'Confirmed' },
    { flight: 'Paris to Rome', date: new Date(2025, 4, 10), status: 'Pending' },
    { flight: 'Tokyo to Seoul', date: new Date(2025, 3, 28), status: 'Confirmed' },
    { flight: 'Sydney to Auckland', date: new Date(2025, 3, 26), status: 'Confirmed' },
  ];
}
