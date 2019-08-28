import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Tutorial} from './../models/tutorial.model';
import { type } from 'os';

export const ADD_TUTORIAL = 'TUTORIAL ADD';
export const REMOVE_TUTORIAL = 'TUTORIAL REMOVE';
// export const UPDATE_TUTORIAL = 'TUTORIAL UPDATE';

export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload: number) {}
}

/*export class UpdateTutorial implements Action {
  readonly type = UPDATE_TUTORIAL;

  constructor(public payload: Tutorial) {}
}*/

export type Actions = AddTutorial | RemoveTutorial ;
