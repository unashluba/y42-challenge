import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  openedMenu = false;

  navigationItems = [
    {
      name: 'Platform',
      expanded: true,
    },
    {
      name: 'Solution',
      expanded: true,
    },
    {
      name: 'Blog',
      link: '/',
    },
    {
      name: 'Pricing',
      link: '/',
    },
  ];

  burgerClickEvent(){
    this.openedMenu = !this.openedMenu;
  }
}
