import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-widget',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSidebar=false
  title = 'angular-web-component';
  items = [
    {
        label: 'Tarjeta visa en dispensadores',
        items: [
          {label: 'Crear dispensador', },
            {label: 'Monitorear y editar dispensadores', },
            {  label: 'Solicitar Tarjeta',  },
        ]
    },
];

constructor(    public router: Router){
  
}


  closeSidebar(){
    this.showSidebar=!this.showSidebar
  }
}
