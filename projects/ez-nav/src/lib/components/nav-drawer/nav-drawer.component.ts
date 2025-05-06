import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavItem, NavRow } from "../../models/headerConfig";
import { ScreenSizeService } from '../../services/screen-size.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ez-nav-nav-drawer',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './nav-drawer.component.html'
})
export class NavDrawerComponent implements OnInit, OnDestroy {
  @Input() navRow!: NavRow;
  @Output() drawerPosition: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  public screenType: string | null = null;

  public isDrawerOpen: boolean = false;
  private screenSizeSubscription: Subscription | undefined;

  public subNavsOpen: boolean[] = [];

  constructor(private screenSizeService: ScreenSizeService) { // Corrected type
  }
  ngOnInit(): void {
    this.screenSizeSubscription = this.screenSizeService.screenWidth$.subscribe(screenType => {
      this.screenType = screenType;
    });
    this.subNavsOpen = this.navRow.items.map(item => !!item.subNav?.length && false);
  }
  toggleSubNav( index: number, event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    // Close all others, open the clicked one
    this.subNavsOpen = this.subNavsOpen.map((open, i) => i === index ? !open : false);

  }

  ngOnDestroy(): void {
    if (this.screenSizeSubscription) {
      this.screenSizeSubscription.unsubscribe();
    }
  }

  public updateDrawer(drawerPosition: boolean): void {
    this.isDrawerOpen = drawerPosition;
    this.drawerPosition.emit(drawerPosition);
  }
}
