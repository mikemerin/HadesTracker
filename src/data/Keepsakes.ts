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
        Keepsakes.Black_Shawl,
        Keepsakes.Blood_Filled_Vial,
        Keepsakes.Bone_Hourglass,
        Keepsakes.Broken_Spearpoint,
        Keepsakes.Chthonic_Coin_Purse,
        Keepsakes.Conch_Shell,
        Keepsakes.Cosmic_Egg,
        Keepsakes.Distant_Memory,
        Keepsakes.Eternal_Rose,
        Keepsakes.Evergreen_Acorn,
        Keepsakes.Frostbitten_Horn,
        Keepsakes.Harpy_Feather_Duster,
        Keepsakes.Lambent_Plume,
        Keepsakes.Lucky_Tooth,
        Keepsakes.Myrmidon_Bracer,
        Keepsakes.Old_Spiked_Collar,
        Keepsakes.Overflowing_Cup,
        Keepsakes.Owl_Pendant,
        Keepsakes.Pierced_Butterfly,
        Keepsakes.Pom_Blossom,
        Keepsakes.Shattered_Shackle,
        Keepsakes.Sigil_of_the_Dead,
        Keepsakes.Skull_Earring,
        Keepsakes.Thunder_Signet,
      ],
      [BoonRows.Companions]: [
        Companions.Antos,
        Companions.Battie,
        Companions.Fidi,
        Companions.Mort,
        Companions.Rib,
        Companions.Shady,
      ],
    },
  },
};

export {
  keepsakes,
};
