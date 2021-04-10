import {
  Aspects,
  BoonRestrictions,
  BoonRows,
  Boons,
  GroupRestrictions,
} from 'redux/domain';

const boonRestrictionGroups: GroupRestrictions = {
  [BoonRows.Attack]: [],
  [BoonRows.Special]: [],
  [BoonRows.Cast]: [],
  [BoonRows.Dash]: [],
  [BoonRows.Call]: [],
  [BoonRows.Aspect]: [],
  [BoonRows.Keepsakes]: [],
};

const boonRestrictions: BoonRestrictions[] = [
  {
    boon: Aspects.Aspect_of_Beowulf,
    restricts: [Boons.Crush_Shot, Boons.Slicing_Shot, Boons.True_Shot, Boons.Phalanx_Shot, Boons.Crystal_Beam, Boons.Trippy_Shot, Boons.Flood_Shot, Boons.Electric_Shot],
  },
];

export {
  boonRestrictionGroups,
  boonRestrictions,
};
