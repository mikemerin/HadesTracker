import {
  BoonRows,
  BoonTables,
  GroupBoons,
  Icons,
  Talents,
} from 'redux/domain';

const talents: GroupBoons = {
  [Icons.Darkness]: {
    [BoonTables.Talents]: {
      [BoonRows.Talents]: [
        Talents.Fiery_Presence,
        Talents.Infernal_Soul,
        Talents.Shadow_Presence,
        Talents.Stygian_Soul,
      ],
    },
  },
};

export {
  talents,
};
