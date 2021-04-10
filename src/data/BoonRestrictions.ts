import {
  Aspects,
  BoonRestrictions,
  BoonRows,
  Boons,
  GroupRestrictions,
  Items,
  Upgrades,
} from 'redux/domain';

const boonRestrictionGroups: GroupRestrictions = {
  [BoonRows.Attack]: [],
  [BoonRows.Special]: [],
  [BoonRows.Cast]: [],
  [BoonRows.Dash]: [],
  [BoonRows.Call]: [],
  [BoonRows.Aspect]: [],
  [BoonRows.Keepsakes]: [],
};

const boonRestrictions: BoonRestrictions[] = [
  {
    boon: Aspects.Aspect_of_Beowulf,
    restricts: [
      Boons.Blizzard_Shot,
      Boons.Cold_Embrace,
      Boons.Crush_Shot,
      Boons.Crystal_Beam,
      Boons.Crystal_Clarity,
      Boons.Electric_Shot,
      Boons.Exit_Wounds,
      Boons.Flood_Shot,
      Boons.Flurry_Cast,
      Boons.Glacial_Glare,
      Boons.Hunting_Blades,
      Boons.Lightning_Phalanx,
      Boons.Phalanx_Shot,
      Boons.Quick_Reload,
      Boons.Slicing_Shot,
      Boons.Trippy_Shot,
      Boons.True_Shot,
    ],
  },
  {
    boon: Aspects.Aspect_of_Hera,
    restricts: [Boons.Curse_of_Drowning, Boons.Flurry_Cast],
  },
  {
    boon: Aspects.Aspect_of_Lucifer,
    restricts: [
      Boons.Hunter_Dash,
    ],
  },
  {
    boon: Boons.Blizzard_Shot,
    restricts: [Boons.Curse_of_Drowning, Boons.Ice_Wine],
  },
  {
    boon: Boons.Crystal_Beam,
    restricts: [Boons.Quick_Reload],
  },
  {
    boon: Boons.Crystal_Clarity,
    restricts: [Boons.Cold_Embrace],
  },
  {
    boon: Boons.Curse_of_Drowning,
    restricts: [Boons.Blizzard_Shot, Boons.Quick_Reload],
  },
  {
    boon: Boons.Freezing_Vortex,
    restricts: [Boons.Hunting_Blades],
  },
  {
    boon: Boons.Hunting_Blades,
    restricts: [Boons.Freezing_Vortex],
  },
  {
    boon: Boons.Ice_Wine,
    restricts: [Boons.Blizzard_Shot],
  },
  {
    boon: Boons.Mirage_Shot,
    restricts: [Boons.Curse_of_Drowning],
  },
  {
    boon: Items.Sigil_of_the_Dead,
    restricts: [Boons.Smoldering_Air],
  },
  {
    boon: Boons.Slicing_Shot,
    restricts: [Boons.Quick_Reload],
  },
  {
    boon: Boons.Trippy_Shot,
    restricts: [Boons.Quick_Reload],
  },
];

export {
  boonRestrictionGroups,
  boonRestrictions,
};
