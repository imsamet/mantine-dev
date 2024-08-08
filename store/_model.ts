import { AppModel } from './reducer/appSlice/_model';
import { AuthModel } from './reducer/authSlice/_model';
import { ListModel } from './reducer/listSlice/_model';

export type GlobalState = {
  auth: AuthModel;
  app: AppModel;
  list: ListModel;
};
