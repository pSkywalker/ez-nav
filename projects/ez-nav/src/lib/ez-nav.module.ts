import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzNavComponent } from "./components/header/ez-nav.component"
import { NavDrawerComponent } from './components/nav-drawer/nav-drawer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule,EzNavComponent, NavDrawerComponent],
  exports: [EzNavComponent, NavDrawerComponent]
})
export class NavbarModule {}
