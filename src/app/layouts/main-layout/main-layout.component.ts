import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports:[IonicModule,
    RouterModule,       // para <router-outlet>
    SidebarComponent,   // tus componentes personalizados
    NavbarComponent,
    FooterComponent
  ]
})
export class MainLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
