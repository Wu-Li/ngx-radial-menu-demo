import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgxRadialMenuComponent, MenuConfig, Click} from "../../../ngx-radial-menu/dist/ngx-radial-menu";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxRadialMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('menuElement') menuElement?: NgxRadialMenuComponent;
  title = 'ngx-radial-menu-demo';

  show(event: MouseEvent) {
    let tag = (event.target as HTMLElement).tagName;
    // console.log('tag', tag);
    if (this.menuElement) {
      this.menuElement.show({x: event.clientX, y: event.clientY}, {test:'test data!'}, [tag]);
    }
    event.preventDefault();
  }
  hide() {
    if (this.menuElement) {
      this.menuElement.hide();
    }
  }
  config: Partial<MenuConfig> = {
    background: '#005599',
    diameter: 300,
    menus: [
      {
        title: "GitHub",
        icon: {fontIcon: "search"},
        href: "http://github.com",
        target: "_blank"
      }, {
        title: "Data Test",
        icon: {
          fontIcon: "star",
          color: '#4078c0'
        },
        click: (event: MouseEvent, data: any) => console.log(data)
      }, {
        title: "DIV",
        icon: {fontIcon: "chevron_right"},
        menus: [{
          title: 'subMenu1',
          icon: {fontIcon: 'bolt'}
        }, {
          title: 'subMenu2',
          icon: {fontIcon: 'file'}
        }]
      }, {
        title: "MAIN",
        icon: {fontIcon: 'sort'},
        menus: [{
          title: "GitHub",
          icon: {fontIcon: "search"},
          href: "http://github.com",
          target: "_blank"
        }, {
          title: "clickMe!",
          click: (event: MouseEvent, data: any) => console.log(data)
        }]
      },
      {
        title: "H1",
        icon: {fontIcon: 'reply'}
      }, {
        title: "hash-href",
        href: "#someHash",
      }, {
        title: "clickMe!",
        click: function () {
          alert('click event callback');
        }
      }, {
        disabled: true,
        title: "disabled"
      }
    ]
  }
}
