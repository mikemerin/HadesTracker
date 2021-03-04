import { AppState, Page } from './domain';

const pageList: Page[] = [
  {text: 'Boons', url: '/Boons'},
  {text: 'Secondary', url: '/Other'},
  {text: 'About', url: '/About'}
];

const initialState: AppState = {
  currentPage: pageList.find(({url}) => url === window.location.pathname)?.text || 'Boons',
  pageList,
};

export default initialState;
export {
  pageList,
};
