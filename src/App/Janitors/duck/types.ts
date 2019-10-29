export const ADD_JANITOR = 'hworkium/janitors/ADD_JANITOR';

export interface Janitor {
  id: string;
  name: string;
}

interface AddJanitorAction {
  type: typeof ADD_JANITOR;
  payload: { janitor: Janitor };
}

export interface JanitorsState {
  list: Janitor[];
}

export type JanitorsActionTypes = AddJanitorAction;
