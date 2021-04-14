import { Mapping } from 'redux/domain';
import { chaosBoonDescriptions } from './chaosBoons';
import { boonDescriptions } from './boons';
import { aspectDescriptions } from './weapons';

const descriptions: Mapping = {
  ...aspectDescriptions,
  ...boonDescriptions,
  ...chaosBoonDescriptions,
};

export {
  descriptions,
};
