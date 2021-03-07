import { AppState } from './domain';
import { groupBoons, groupRowOrder, pageList } from 'data';

const initialState: AppState = {
  pages: {
    current: pageList.find(({url}) => url === window.location.pathname)?.text || 'Main Boons',
    list: pageList,
  },
  groups: {
    boons: groupBoons,
    rowOrder: groupRowOrder,
  },
  boons: {},
};

export default initialState;
export {
  pageList,
};
