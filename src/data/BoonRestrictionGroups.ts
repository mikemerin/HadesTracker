import {
  BoonRow,
  BoonRows,
} from 'redux/domain';

const boonRestrictionGroups = new Set<BoonRow>([
  BoonRows.Attack,
  BoonRows.Special,
  BoonRows.Cast,
  BoonRows.Dash,
  BoonRows.Call,
  BoonRows.Aspect,
]);

export {
  boonRestrictionGroups,
};
