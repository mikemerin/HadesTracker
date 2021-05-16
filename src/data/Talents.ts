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
        Talents.Shadow_Presence,
        Talents.Stygian_Soul,
        Talents.Infernal_Soul,
      ],
    },
  },
};

export {
  talents,
};
