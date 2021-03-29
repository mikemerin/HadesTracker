import {
  Aspects,
  BoonRows,
  BoonTables,
  GroupBoons,
  Items,
} from 'redux/domain';

const activeItems: GroupBoons = {
  [Items.Fated_List]: {
    [BoonTables.Items]: {
      [BoonRows.Keepsakes]: [
        Items.Lambent_Plume,
      ],
      [BoonRows.Aspect]: [
        Aspects.Shield_Beowulf,
      ],
    },
    [BoonTables.TBD]: {
      [BoonRows.TBD]: [
        Items.Active,
        Items.Chthonic_Key,
        Items.Codex_Locked,
        Items.Fated_List,
        Items.Inactive,
        Items.Infernal_Soul,
        Items.Keepsakes,
        Items.Prophecy_Foretold,
        Items.Prophecy_Not_Foretold,
        Items.Restricted,
        Items.Skeleton_Key,
        Items.Stygian_Soul,
      ],
    },
  },
};

export {
  activeItems,
};
