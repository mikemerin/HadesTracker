import {
  Items,
  BoonRows,
  BoonTables,
  GroupBoons,
} from 'redux/domain';

const items: GroupBoons = {
  items: {
    [BoonTables.Items]: {
      [BoonRows.Item]: [
        Items.Active,
        Items.Chthonic_Key,
        Items.Codex_Locked,
        Items.Inactive,
        Items.Infernal_Soul,
        Items.Lambent_Plume, // TODO: make keepsakes
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
