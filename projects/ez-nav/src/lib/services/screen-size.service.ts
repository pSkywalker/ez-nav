import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  private screenWidthSubject = new BehaviorSubject<string>("desktop");
  screenWidth$ = this.screenWidthSubject.asObservable();

  constructor(private ngZone: NgZone) {
    // Listen to window resize in the service
    if( window.innerWidth <= 600 ){ this.screenWidthSubject.next( "mobile" ); }
    else if( window.innerWidth > 600 && window.innerWidth <= 1024  ){ this.screenWidthSubject.next( "tablet" ) }
    else if( window.innerWidth > 1024 ){ this.screenWidthSubject.next( "desktop" ) }
    this.listenToResize();
  }

  private listenToResize() {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('resize', () => {
        this.ngZone.run(() => {
          if( window.innerWidth <= 600 ){ this.screenWidthSubject.next( "mobile" ); }
          else if( window.innerWidth > 600 && window.innerWidth <= 1024  ){ this.screenWidthSubject.next( "tablet" ) }
          else if( window.innerWidth > 1024 ){ this.screenWidthSubject.next( "desktop" ) }
        });
      });
    });

  }
}
