import {Action} from '@ngrx/store';
import {Tutorial} from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://www.google.com'
}

export function reducer(state: Tutorial[] = [], action: TutorialActions.Actions){
  switch(action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

      case TutorialActions.REMOVE_TUTORIAL:
          state.splice(action.payload, 1);
          return state;
     /* case TutorialActions.UPDATE_TUTORIAL:
          state.splice(action.payload, 1);
          return state;*/

  default:
      return state;
    }
}
