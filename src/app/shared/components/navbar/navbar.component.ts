import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { moonOutline, sunnyOutline } from 'ionicons/icons';

addIcons({
  'moon-outline': moonOutline,
  'sunny-outline': sunnyOutline,
});
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [IonicModule],  // <--- Aquí importas IonicModule

})
export class NavbarComponent {
   isDarkMode = false;

  constructor() {
    const theme = localStorage.getItem('theme');
    this.isDarkMode = theme === 'dark';

    document.body.classList.toggle('dark', this.isDarkMode);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

}
