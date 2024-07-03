import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgxRadialMenuComponent,MenuConfig} from "../../../ngx-radial-menu/dist/ngx-radial-menu";

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
    if (this.menuElement) {
      this.menuElement.show({x: event.clientX, y: event.clientY});
    }
    event.preventDefault();
  }
  hide() {
    if (this.menuElement) {
      this.menuElement.hide();
    }
  }
  config: Partial<MenuConfig> = {
    background: '#99AABBCC',
    diameter: 300,
    menus: [
      {
        title: "GitHub",
        icon: {fontIcon: "search"},
        href: "http://github.com",
        target: "_blank"
      }, {
        title: "GitLab",
        icon: {
          fontIcon: "star",
          color: '#4078c0'
        },
      }, {
        title: "subMenu",
        icon: {fontIcon: "chevron_right"},
        menus: [{
          title: 'subMenu1',
          icon: {fontIcon: 'bolt'}
        }, {
          title: 'subMenu2',
          icon: {fontIcon: 'file'}
        }]
      }, {
        title: "subMenu",
        icon: {fontIcon: 'sort'}
      },
      {
        title: "click",
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
