import { createSelector } from "@ngrx/store";

const selectAuthState = state => state.auth;

export const isLoggedIn = createSelector(
    selectAuthState,
    (auth) => auth.loggedIn
)

export const isLoggedOut = createSelector(
    isLoggedIn,
    (loggedIn) => !loggedIn
)