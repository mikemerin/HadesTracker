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
    boon: Aspects.Aspect_of_Achilles,
    restricts: [Upgrades.Chain_Skewer, Upgrades.Charged_Skewer, Upgrades.Exploding_Launcher],
  },
  {
    boon: Aspects.Aspect_of_Arthur,
    restricts: [Upgrades.Cruel_Thrust, Upgrades.Flurry_Slash, Upgrades.World_Splitter],
  },
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
    boon: Aspects.Aspect_of_Guan_Yu,
    restricts: [Upgrades.Chain_Skewer, Upgrades.Exploding_Launcher, Upgrades.Flurry_Jab, Upgrades.Vicious_Skewer],
  },
  {
    boon: Aspects.Aspect_of_Hades,
    restricts: [Upgrades.Flurry_Jab],
  },
  {
    boon: Aspects.Aspect_of_Hera,
    restricts: [Boons.Curse_of_Drowning, Boons.Flurry_Cast],
  },
  {
    boon: Aspects.Aspect_of_Lucifer,
    restricts: [
      Upgrades.Cluster_Bomb,
      Upgrades.Delta_Chamber,
      Upgrades.Explosive_Fire,
      Upgrades.Flurry_Fire,
      Boons.Hunter_Dash,
      Upgrades.Ricochet_Fire,
      Upgrades.Rocket_Bomb,
      Upgrades.Seeking_Fire,
      Upgrades.Spread_Fire,
    ],
  },
  {
    boon: Boons.Blizzard_Shot,
    restricts: [Boons.Curse_of_Drowning, Boons.Ice_Wine],
  },
  {
    boon: Upgrades.Chain_Skewer,
    restricts: [Upgrades.Exploding_Launcher],
  },
  {
    boon: Boons.Cold_Embrace,
    restricts: [Boons.Crystal_Clarity],
  },
  {
    boon: Upgrades.Cruel_Thrust,
    restricts: [Upgrades.Flurry_Slash, Upgrades.World_Splitter],
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
    restricts: [Boons.Blizzard_Shot, Boons.Mirage_Shot, Boons.Quick_Reload],
  },
  {
    boon: Upgrades.Exploding_Launcher,
    restricts: [Upgrades.Chain_Skewer, Upgrades.Vicious_Skewer],
  },
  {
    boon: Upgrades.Flaring_Spin,
    restricts: [Upgrades.Flurry_Jab],
  },
  {
    boon: Upgrades.Flurry_Jab,
    restricts: [Upgrades.Massive_Spin, Upgrades.Quick_Spin],
  },
  {
    boon: Upgrades.Flurry_Slash,
    restricts: [Upgrades.Cruel_Thrust, Upgrades.World_Splitter],
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
    boon: Upgrades.Massive_Spin,
    restricts: [Upgrades.Flurry_Jab],
  },
  {
    boon: Boons.Mirage_Shot,
    restricts: [Boons.Curse_of_Drowning],
  },
  {
    boon: Upgrades.Quick_Spin,
    restricts: [Upgrades.Flurry_Jab],
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
  {
    boon: Upgrades.Vicious_Skewer,
    restricts: [Upgrades.Exploding_Launcher],
  },
  {
    boon: Upgrades.World_Splitter,
    restricts: [Upgrades.Cruel_Thrust, Upgrades.Flurry_Slash],
  },
];

export {
  boonRestrictionGroups,
  boonRestrictions,
};
