import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline, settingsOutline } from 'ionicons/icons';
import { carOutline,addCircleOutline,airplane, busOutline} from 'ionicons/icons';
import { IonicSlides } from '@ionic/angular/standalone';

addIcons({
  'car-outline': carOutline,
  'add-circle-outline':addCircleOutline,
  'airplane':airplane,
   'busOutline':busOutline,
});
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonicModule,RouterModule,FooterComponent, NavbarComponent, SidebarComponent],
  
})
export class AppComponent {
  constructor() {}
  
}
addIcons({
  'home-outline': homeOutline,
  'settings-outline': settingsOutline,
});
