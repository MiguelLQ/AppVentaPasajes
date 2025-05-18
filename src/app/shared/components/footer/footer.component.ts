import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonicModule, RouterModule]  // Importa IonicModule para usar componentes Ionic

})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
