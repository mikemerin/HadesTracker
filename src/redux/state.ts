import { AppState, Page } from './domain';

const pageList: Page[] = [
  {text: 'Main', url: '/Boons/Main'},
  {text: 'Duo', url: '/Boons/Duo'},
  {text: 'Other', url: '/Boons/Other'},
  {text: 'Chaos', url: '/Boons/Chaos'},
  {text: 'Infernal Arms', url: '/Boons/Weapons'},
  {text: 'About', url: '/About'}
];

const initialState: AppState = {
  currentPage: pageList.find(({url}) => url === window.location.pathname)?.text || 'Main Boons',
  pageList,
};

export default initialState;
export {
  pageList,
};
