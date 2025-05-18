import { Component, OnInit } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [IonicModule, RouterModule],
  
})
export class SidebarComponent implements OnInit {
  constructor(private menu: MenuController) { }
  ngOnInit() { }
  // Método para cerrar el menú
  closeMenu() {
    this.menu.close();
  }
  
}

