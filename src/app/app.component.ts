import { Component } from '@angular/core';

@Component({
  selector: 'navbar-widget',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSidebar=true
  title = 'angular-web-component';

  closeSidebar(){
    this.showSidebar=!this.showSidebar
  }
}
