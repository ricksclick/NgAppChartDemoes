import { Component, OnInit, OnDestroy } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { dropdown, staggeredFadeIn } from 'src/app/shared/helpers/animations';
import { Router } from '@angular/router';
import { BreakpointService } from '../../services/breakpoint.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [dropdown('80px'), staggeredFadeIn()]
})
export class HeaderComponent implements OnDestroy {


  // tslint:disable: variable-name
  faBars = faBars;
  private _navToggled = false;
  private _animationEnabled = false;
  private _subscriptions: Subscription = new Subscription();
  constructor(private _router: Router, private _breakpoint: BreakpointService) {
    this._subscriptions.add(
      this._breakpoint.getCurrentWindowWidth().subscribe(
        (width) => {
          width = width ? width : this._breakpoint.getWindowSize().width;
          this._animationEnabled = width < 992;
          this._navToggled = !this._animationEnabled;
        },
        console.warn
      )
    );

  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }


  toggleNav() {
    this._navToggled = !this._navToggled;
  }
  routeTo(path: string = '') {
    this._router.navigateByUrl(path);
  }

  get navToggled() {
    return this._navToggled;
  }
  get animationEnabled() {
    return this._animationEnabled;
  }
}
