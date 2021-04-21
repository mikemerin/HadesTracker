import {
  Aspects,
  BoonRows,
  BoonTables,
  GroupBoons,
  Icons,
  Keepsakes,
  Talents,
} from 'redux/domain';

// TODO:
// Option A: different Fated_Lists for Main Gods vs. Other Gods vs. Infernal Arms
// Option B: have a filter for the icons based on requirements that populate the side-bar list
// TODO part 2: bugfix for the aspect restrictions on this extra table vs. the primary aspects
const icons: GroupBoons = {
  [Icons.Fated_List]: {
    [BoonTables.Icons]: {
      [BoonRows.Aspect]: [
        Aspects.Aspect_of_Achilles,
        Aspects.Aspect_of_Arthur,
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
        Talents.Fiery_Presence,
        Talents.Infernal_Soul,
        Talents.Shadow_Presence,
        Talents.Stygian_Soul,
      ],
      [BoonRows.Keepsakes]: [
        Keepsakes.Lambent_Plume,
        Keepsakes.Sigil_of_the_Dead,
      ],
    },
  },
};

export {
  icons,
};
