import { AppState, Page } from './domain';
import { boonGroups } from 'data/BoonGroups';

const pageList: Page[] = [
  {text: 'Main', url: '/Boons/Main'},
  {text: 'Duo', url: '/Boons/Duo'},
  {text: 'Other', url: '/Boons/Other'},
  {text: 'Chaos', url: '/Boons/Chaos'},
  {text: 'Infernal Arms', url: '/Boons/Weapons'},
  {text: 'About', url: '/About'}
];

const initialState: AppState = {
  pages: {
    current: pageList.find(({url}) => url === window.location.pathname)?.text || 'Main Boons',
    list: pageList,
  },
  groups: boonGroups,
  boons: {},
};

export default initialState;
export {
  pageList,
};
