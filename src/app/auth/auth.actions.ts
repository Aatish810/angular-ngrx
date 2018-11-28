import { User } from './../model/user.model';
import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action'
}

export class Login implements Action {
  constructor(public payload: {user: User}) {}
  readonly type = AuthActionTypes.LoginAction;
}

export class Logout implements Action {
  constructor() {}
  readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = Login | Logout;
