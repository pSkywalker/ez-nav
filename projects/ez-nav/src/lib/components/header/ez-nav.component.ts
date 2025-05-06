import { Component, Input } from '@angular/core';

import { NavItem, HeaderConfig } from "../../models/headerConfig";
import { NavDrawerComponent } from '../nav-drawer/nav-drawer.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ez-nav',
  standalone: true,
  imports: [ CommonModule, RouterLink, NavDrawerComponent ],
  templateUrl: './ez-nav.component.html',
})
export class EzNavComponent { // Added OnInit
  @Input() header!: HeaderConfig;
  public isDrawerOpen: boolean = false;

  public subNavsOpen: boolean[] = [];

  ngOnInit(){
    this.subNavsOpen = this.header.navRow.items.map(item =>
      !!(item.subNav && item.subNav.length > 0) ? false : false
    );
  }

  public toggleSubNav(index: number): void {
    this.subNavsOpen[index] = !this.subNavsOpen[index];
  }

  public handleDrawerStatus( status: boolean ){
    this.isDrawerOpen = status;
  }
}
