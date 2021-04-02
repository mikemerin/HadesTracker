import {
  Aspects,
  BoonRows,
  BoonTables,
  GroupBoons,
  Items,
} from 'redux/domain';

// TODO:
// Option A: different Fated_Lists for Main Gods vs. Other Gods vs. Infernal Arms
// Option B: have a filter for the items based on requirements that populate the side-bar list
// TODO part 2: bugfix for the aspect restrictions on this extra table vs. the primary aspects
const items: GroupBoons = {
  [Items.Fated_List]: {
    [BoonTables.Items]: {
      [BoonRows.Aspect]: [
        Aspects.Aspect_of_Achilles,
        Aspects.Aspect_of_Beowulf,
        Aspects.Aspect_of_Chaos,
        Aspects.Aspect_of_Gilgamesh,
        Aspects.Aspect_of_Guan_Yu,
        Aspects.Aspect_of_Hades,
        Aspects.Aspect_of_Hera,
        Aspects.Aspect_of_Lucifer,
        Aspects.Aspect_of_Talos,
      ],
      [BoonRows.Talents]: [
        Items.Fiery_Presence,
        Items.Infernal_Soul,
        Items.Shadow_Presence,
        Items.Stygian_Soul,
      ],
      [BoonRows.Keepsakes]: [
        Items.Lambent_Plume,
        Items.Sigil_of_the_Dead,
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
        Items.Sigil_of_the_Dead, // TODO keepsakes
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
