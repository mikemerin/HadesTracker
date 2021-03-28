import {
  Items,
  BoonRows,
  BoonTables,
  GroupBoons,
} from 'redux/domain';

const items: GroupBoons = {
  [Items.Fated_List]: {
    [BoonTables.Items]: {
      [BoonRows.Keepsakes]: [
        Items.Lambent_Plume,
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
  items,
};
