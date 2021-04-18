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
    boon: Aspects.Aspect_of_Chiron,
    restricts: [Upgrades.Charged_Volley],
  },
  {
    boon: Aspects.Aspect_of_Demeter,
    restricts: [Upgrades.Quake_Cutter],
  },
  {
    boon: Aspects.Aspect_of_Gilgamesh,
    restricts: [Upgrades.Heavy_Knuckle, Upgrades.Kinetic_Launcher, Upgrades.Long_Knuckle],
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
    boon: Aspects.Aspect_of_Rama,
    restricts: [Upgrades.Charged_Volley, Upgrades.Concentrated_Volley, Upgrades.Flurry_Shot, Upgrades.Piercing_Volley],
  },
  {
    boon: Aspects.Aspect_of_Talos,
    restricts: [Upgrades.Flying_Cutter, Upgrades.Kinetic_Launcher, Upgrades.Rush_Kick],
  },
  {
    boon: Aspects.Aspect_of_Zeus,
    restricts: [Upgrades.Charged_Flight, Upgrades.Dashing_Flight, Upgrades.Dread_Flight],
  },
  {
    boon: Boons.Blizzard_Shot,
    restricts: [Boons.Curse_of_Drowning, Boons.Ice_Wine],
  },
  {
    boon: Upgrades.Chain_Shot,
    restricts: [Upgrades.Explosive_Shot],
  },
  {
    boon: Upgrades.Chain_Skewer,
    restricts: [Upgrades.Exploding_Launcher],
  },
  {
    boon: Upgrades.Charged_Flight,
    restricts: [Upgrades.Dashing_Flight],
  },
  {
    boon: Upgrades.Charged_Volley,
    restricts: [Upgrades.Relentless_Volley],
  },
  {
    boon: Upgrades.Cluster_Bomb,
    restricts: [Upgrades.Hazard_Bomb, Upgrades.Triple_Bomb],
  },
  {
    boon: Boons.Cold_Embrace,
    restricts: [Boons.Crystal_Clarity],
  },
  {
    boon: Upgrades.Concentrated_Beam,
    restricts: [Upgrades.Eternal_Chamber],
  },
  {
    boon: Upgrades.Concentrated_Fire,
    restricts: [Upgrades.Delta_Chamber, Upgrades.Spread_Fire],
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
    boon: Upgrades.Dashing_Flight,
    restricts: [Upgrades.Charged_Flight],
  },
  {
    boon: Upgrades.Delta_Chamber,
    restricts: [Upgrades.Concentrated_Fire, Upgrades.Flurry_Fire, Upgrades.Spread_Fire],
  },
  {
    boon: Upgrades.Exploding_Launcher,
    restricts: [Upgrades.Chain_Skewer, Upgrades.Vicious_Skewer],
  },
  {
    boon: Upgrades.Eternal_Chamber,
    restricts: [Upgrades.Concentrated_Beam],
  },
  {
    boon: Upgrades.Explosive_Fire,
    restricts: [Upgrades.Piercing_Fire, Upgrades.Ricochet_Fire],
  },
  {
    boon: Upgrades.Explosive_Shot,
    restricts: [Upgrades.Chain_Shot, Upgrades.Flurry_Shot],
  },
  {
    boon: Upgrades.Explosive_Upper,
    restricts: [Upgrades.Kinetic_Launcher],
  },
  {
    boon: Upgrades.Flaring_Spin,
    restricts: [Upgrades.Flurry_Jab],
  },
  {
    boon: Upgrades.Flurry_Fire,
    restricts: [Upgrades.Ricochet_Fire, Upgrades.Spread_Fire, Upgrades.Delta_Chamber],
  },
  {
    boon: Upgrades.Flurry_Jab,
    restricts: [Upgrades.Flaring_Spin, Upgrades.Massive_Spin, Upgrades.Quick_Spin],
  },
  {
    boon: Upgrades.Flurry_Shot,
    restricts: [Upgrades.Explosive_Shot, Upgrades.Perfect_Shot],
  },
  {
    boon: Upgrades.Flurry_Slash,
    restricts: [Upgrades.Cruel_Thrust, Upgrades.World_Splitter],
  },
  {
    boon: Upgrades.Flying_Cutter,
    restricts: [Upgrades.Kinetic_Launcher, Upgrades.Rush_Kick],
  },
  {
    boon: Boons.Freezing_Vortex,
    restricts: [Boons.Hunting_Blades],
  },
  {
    boon: Upgrades.Hazard_Bomb,
    restricts: [Upgrades.Cluster_Bomb, Upgrades.Rocket_Bomb, Upgrades.Triple_Bomb],
  },
  {
    boon: Upgrades.Heavy_Knuckle,
    restricts: [Upgrades.Rolling_Knuckle],
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
    boon: Upgrades.Kinetic_Launcher,
    restricts: [Upgrades.Explosive_Upper, Upgrades.Flying_Cutter, Upgrades.Quake_Cutter, Upgrades.Rush_Kick],
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
    boon: Upgrades.Perfect_Shot,
    restricts: [Upgrades.Flurry_Shot],
  },
  {
    boon: Upgrades.Piercing_Fire,
    restricts: [Upgrades.Explosive_Fire, Upgrades.Seeking_Fire],
  },
  {
    boon: Upgrades.Point_Blank_Shot,
    restricts: [Upgrades.Sniper_Shot],
  },
  {
    boon: Upgrades.Quake_Cutter,
    restricts: [Upgrades.Kinetic_Launcher],
  },
  {
    boon: Upgrades.Quick_Spin,
    restricts: [Upgrades.Flurry_Jab],
  },
  {
    boon: Upgrades.Relentless_Volley,
    restricts: [Upgrades.Charged_Volley],
  },
  {
    boon: Upgrades.Ricochet_Fire,
    restricts: [Upgrades.Explosive_Fire, Upgrades.Flurry_Fire, Upgrades.Seeking_Fire, Upgrades.Spread_Fire],
  },
  {
    boon: Upgrades.Rocket_Bomb,
    restricts: [Upgrades.Hazard_Bomb],
  },
  {
    boon: Upgrades.Rolling_Knuckle,
    restricts: [Upgrades.Heavy_Knuckle],
  },
  {
    boon: Upgrades.Rush_Kick,
    restricts: [Upgrades.Flying_Cutter, Upgrades.Kinetic_Launcher],
  },
  {
    boon: Upgrades.Seeking_Fire,
    restricts: [Upgrades.Piercing_Fire, Upgrades.Ricochet_Fire, Upgrades.Spread_Fire],
  },
  {
    boon: Items.Sigil_of_the_Dead,
    restricts: [Boons.Smoldering_Air, Boons.Aphrodites_Aid, Boons.Ares_Aid, Boons.Artemis_Aid, Boons.Athenas_Aid, Boons.Demeters_Aid, Boons.Dionysus_Aid, Boons.Poseidons_Aid, Boons.Zeus_Aid],
  },
  {
    boon: Boons.Slicing_Shot,
    restricts: [Boons.Quick_Reload],
  },
  {
    boon: Upgrades.Sniper_Shot,
    restricts: [Upgrades.Point_Blank_Shot, Upgrades.Twin_Shot],
  },
  {
    boon: Upgrades.Spread_Fire,
    restricts: [Upgrades.Concentrated_Fire, Upgrades.Delta_Chamber, Upgrades.Flurry_Fire, Upgrades.Ricochet_Fire, Upgrades.Seeking_Fire],
  },
  {
    boon: Upgrades.Triple_Bomb,
    restricts: [Upgrades.Cluster_Bomb, Upgrades.Hazard_Bomb],
  },
  {
    boon: Upgrades.Triple_Shot,
    restricts: [Upgrades.Twin_Shot],
  },
  {
    boon: Boons.Trippy_Shot,
    restricts: [Boons.Quick_Reload],
  },
  {
    boon: Upgrades.Twin_Shot,
    restricts: [Upgrades.Sniper_Shot, Upgrades.Triple_Shot],
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
