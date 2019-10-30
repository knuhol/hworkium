export const ADD_JANITOR = 'hworkium/janitors/ADD_JANITOR';
export const REMOVE_JANITOR = 'hworkium/janitors/REMOVE_JANITOR';

export interface Janitor {
  id: string;
  name: string;
}

interface AddJanitorAction {
  type: typeof ADD_JANITOR;
  payload: { janitor: Janitor };
}

interface RemoveJanitorAction {
  type: typeof REMOVE_JANITOR;
  payload: { id: string };
}

export interface JanitorsState {
  list: Janitor[];
}

export type JanitorsActionTypes = AddJanitorAction | RemoveJanitorAction;
