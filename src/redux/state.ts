import { AppState } from './domain';
import { boons, colors, groupBoons, groupRowOrder, pageList } from 'data';



const initialState: AppState = {
  boons,
  colors,
  groups: {
    boons: groupBoons,
    rowOrder: groupRowOrder,
  },
  pages: {
    current: pageList.find(({url}) => url === window.location.pathname)?.text || 'Main Boons',
    list: pageList,
  },
};

export default initialState;
export {
  pageList,
};
