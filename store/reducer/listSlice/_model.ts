import { BlackListValue, ListValue } from '@/store/actions/list/core/_model';

export type ListModel = {
  list: ListValue[];
  blackList: BlackListValue[];
};
