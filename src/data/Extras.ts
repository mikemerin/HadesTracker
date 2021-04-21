import {
  BoonRows,
  BoonTables,
  GroupBoons,
  Icons,
} from 'redux/domain';

const extras: GroupBoons = {
  [Icons.Fated_List]: {
    [BoonTables.Extras]: {
      [BoonRows.Extras]: [ // TODO: Make Icons and move into its own file
        Icons.Active,
        Icons.Ambrosia,
        Icons.Aspect_Unlocks,
        Icons.Anvil_of_Fates,
        Icons.Attack,
        Icons.Blessing,
        Icons.Bloodstone,
        Icons.Call,
        Icons.Cast,
        Icons.Centaur_Heart,
        Icons.Charons_Obol,
        Icons.Chthonic_Key,
        Icons.Codex_Filled,
        Icons.Codex_Locked,
        Icons.Contractor_Item,
        Icons.Curse,
        Icons.Daedalus_Hammer,
        Icons.Darkness,
        Icons.Dash,
        Icons.Diamond,
        Icons.Extreme_Measures,
        Icons.Fated_List,
        Icons.Gemstone,
        Icons.Heat,
        Icons.Inactive,
        Icons.Infernal_Gate,
        Icons.Keepsakes,
        Icons.Legendary,
        Icons.Loyalty_Card,
        Icons.Nectar,
        Icons.Other,
        Icons.Pom_of_Power,
        Icons.Prophecy_Foretold,
        Icons.Prophecy_Not_Foretold,
        Icons.Requires,
        Icons.Restricted,
        Icons.Rod_of_Fishing,
        Icons.Skeleton_Key,
        Icons.Special,
        Icons.Status_Curse,
        Icons.Swap,
        Icons.Trove_Tracker,
      ],
    },
  },
};

export {
  extras,
};
