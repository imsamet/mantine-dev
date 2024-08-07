import { AppModel } from './reducer/appSlice/_model';
import { AuthModel } from './reducer/authSlice/_model';

export type GlobalState = {
  auth: AuthModel;
  app: AppModel;
};
