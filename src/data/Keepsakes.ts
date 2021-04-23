import {
  BoonRows,
  BoonTables,
  Companions,
  GroupBoons,
  Icons,
  Keepsakes,
} from 'redux/domain';

// TODO:
// Option A: different Fated_Lists for Main Gods vs. Other Gods vs. Infernal Arms
// Option B: have a filter for the Icons based on requirements that populate the side-bar list
// TODO part 2: bugfix for the aspect restrictions on this extra table vs. the primary aspects
const keepsakes: GroupBoons = {
  [Icons.Keepsakes]: {
    [BoonTables.Keepsakes]: {
      [BoonRows.Keepsake_Items]: [
        Keepsakes.Old_Spiked_Collar,
        Keepsakes.Myrmidon_Bracer,
        Keepsakes.Black_Shawl,
        Keepsakes.Pierced_Butterfly,
        Keepsakes.Bone_Hourglass,
        Keepsakes.Chthonic_Coin_Purse,
        Keepsakes.Skull_Earring,
        Keepsakes.Distant_Memory,
        Keepsakes.Harpy_Feather_Duster,
        Keepsakes.Lucky_Tooth,
        Keepsakes.Thunder_Signet,
        Keepsakes.Conch_Shell,
        Keepsakes.Owl_Pendant,
        Keepsakes.Eternal_Rose,
        Keepsakes.Blood_Filled_Vial,
        Keepsakes.Adamant_Arrowhead,
        Keepsakes.Overflowing_Cup,
        Keepsakes.Lambent_Plume,
        Keepsakes.Frostbitten_Horn,
        Keepsakes.Cosmic_Egg,
        Keepsakes.Shattered_Shackle,
        Keepsakes.Evergreen_Acorn,
        Keepsakes.Broken_Spearpoint,
        Keepsakes.Pom_Blossom,
        Keepsakes.Sigil_of_the_Dead,
      ],
    },
  },
};

const companions: GroupBoons = {
  [Icons.Ambrosia]: {
    [BoonTables.Companions]: {
      [BoonRows.Companions]: [
        Companions.Battie,
        Companions.Mort,
        Companions.Shady,
        Companions.Rib,
        Companions.Fidi,
        Companions.Antos,
      ],
    },
  },
};

export {
  companions,
  keepsakes,
};
