import {
  Aspects,
  BoonRows,
  BoonTables,
  GroupBoons,
  Items,
} from 'redux/domain';

const items: GroupBoons = {
  [Items.Fated_List]: {
    [BoonTables.Items]: {
      [BoonRows.Keepsakes]: [
        Items.Lambent_Plume,
      ],
      [BoonRows.Aspect]: [
        Aspects.Aspect_of_Beowulf,
      ],
    },
  },
};

const extras: GroupBoons = {
  [Items.Fated_List]: {
    [BoonTables.Extras]: {
      [BoonRows.Extras]: [
        Items.Active,
        Items.Ambrosia,
        Items.Ammo,
        Items.Anvil_of_Fates,
        Items.Attack,
        Items.Blessing,
        Items.Call,
        Items.Cast,
        Items.Centaur_Heart,
        Items.Charons_Obol,
        Items.Chthonic_Key,
        Items.Codex_Locked,
        Items.Contractor_Item,
        Items.Curse,
        Items.Daedalus_Hammer,
        Items.Darkness,
        Items.Dash,
        Items.Diamond,
        Items.Extreme_Measures,
        Items.Fated_List,
        Items.Gemstone,
        Items.Heat,
        Items.Inactive,
        Items.Infernal_Gate,
        Items.Infernal_Soul,
        Items.Keepsakes,
        Items.Lambent_Plume, // TODO keepsakes
        Items.Legendary,
        Items.Loyalty_Card,
        Items.Nectar,
        Items.Other,
        Items.Pom_of_Power,
        Items.Prophecy_Foretold,
        Items.Prophecy_Not_Foretold,
        Items.Restricted,
        Items.Rod_of_Fishing,
        Items.Skeleton_Key,
        Items.Special,
        Items.Status_Curse,
        Items.Stygian_Soul,
        Items.Titan_Blood,
        Items.Trove_Tracker,
      ],
    },
  },
};

export {
  extras,
  items,
};
