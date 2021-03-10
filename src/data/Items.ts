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
        Items.Inactive,
        Items.Infernal_Soul,
        Items.Lambent_Plume, // TODO: make keepsakes
        Items.Prophecy_Foretold,
        Items.Prophecy_Not_Foretold,
        Items.Stygian_Soul,
      ],
    },
  },
};

export {
  items,
};
