import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline, settingsOutline } from 'ionicons/icons';
import { carOutline } from 'ionicons/icons';

addIcons({
  'car-outline': carOutline,
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
