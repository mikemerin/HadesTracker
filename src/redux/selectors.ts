import {
    AppState,
    BoonState,
    Display,
    GroupState,
    PageState,
} from './domain';

const getBoons = ({ boons }: AppState): BoonState => boons;
const getDisplay = ({ display }: AppState): Display => display;
const getGroups = ({ groups }: AppState): GroupState => groups;
const getPages = ({ pages }: AppState): PageState => pages;
const getState = (state: AppState): AppState => state;

export {
    getBoons,
    getDisplay,
    getGroups,
    getPages,
    getState,
};
