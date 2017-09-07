import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
      <a routerLink="/service" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Service</a>
      <a routerLink="/about" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">About</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      height: 60px;
      background-color: #4a4c88;
    }
    nav > a {
      line-height: 60px;
      margin: 0 60px;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      text-transform: uppercase;
      opacity: 0.7;
    }
    nav > a:hover, nav > a.active  {
      opacity: 1.0;
    }
  `]
})
export class AppComponent {}
