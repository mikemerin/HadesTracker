import { AppState, Page } from './domain';

const pageList: Page[] = [
  {text: 'Main Boons', url: '/Boons/Main'},
  {text: 'Other Collectables', url: '/Boons/Other'},
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
