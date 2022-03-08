export type RootStackParams = {
  Screen_B: {
    itemName: string;
    itemId: number;
  };
  Screen_A: {
    Message: string;
  };
  Login: {};
  Home: {};
};

export interface IDemoState {
  list: string[];
}

export enum Constants {
  ADD_ITEM = 'ADD_ITEM',
}
