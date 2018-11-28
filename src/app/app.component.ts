import { AppState } from './reducers/index';
import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { Logout } from './auth/auth.actions';
import { map } from 'rxjs/operators';
import { isLoggedOut } from './auth/auth.selectors'
import { isLoggedIn } from './auth/auth.selectors'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn$;
  isLoggedOut$
  loginUserData$;

    constructor(private store: Store<AppState>, private router: Router) {
    }

    ngOnInit() {
      // getting data from store
      this.isLoggedIn$ = this.store.pipe(
        select(isLoggedIn)
      )
      this.isLoggedOut$ = this.store.pipe(
        map(isLoggedOut)
      )
    }

    logout() {
      this.router.navigateByUrl('/login')
      this.store.dispatch(new Logout())
    }


}
