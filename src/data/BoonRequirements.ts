import { Boons, BoonRequirements } from 'redux/domain';

const boonRequirements: BoonRequirements[] = [
  {
    boon: Boons.Arctic_Blast,
    requirements: [
      { number: 1, boons: [Boons.Frost_Strike, Boons.Frost_Flourish, Boons.Mistral_Dash, Boons.Demeters_Aid, Boons.Snow_Burst] },
    ],
  },
  // {
  //   boon: Boons.Auto_Reload,
  //   requirements: [
  //     // { number: 1, boons: [Items.Stygian_Soul] }, // TODO: add alt RequiredBoonCounts
  //   ],
  // },
  {
    boon: Boons.Bad_Influence,
    requirements: [
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Drunken_Dash, Boons.Dionysus_Aid] },
    ],
  },
  {
    boon: Boons.Bad_News,
    requirements: [
      // { number: 1, boons: [Items.Stygian_Soul] }, // TODO: add alt RequiredBoonCounts
      // { number: 1, boons: [Boons.Auto_Reload, Items.Lambent_Plume] }, // TODO: add item
      { number: 1, boons: [Boons.Auto_Reload] },
    ],
  },
  {
    boon: Boons.Black_Metal,
    requirements: [
      { number: 1, boons: [Boons.Slicing_Shot, Boons.Blade_Dash, Boons.Ares_Aid] },
    ],
  },
  {
    boon: Boons.Black_Out,
    requirements: [
      { number: 1, boons: [Boons.Trippy_Shot, Boons.Trippy_Flare] },
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Drunken_Dash, Boons.Dionysus_Aid] },
    ],
  },
  {
    boon: Boons.Blinding_Flash,
    requirements: [
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Phalanx_Shot, Boons.Divine_Dash] },
    ],
  },
  {
    boon: Boons.Blizzard_Shot,
    requirements: [
      { number: 1, boons: [Boons.Frost_Strike, Boons.Frost_Flourish, Boons.Mistral_Dash, Boons.Demeters_Aid] },
      { number: 1, boons: [Boons.Flood_Shot] },
    ],
  },
  {
    boon: Boons.Blown_Kiss,
    requirements: [
      { number: 1, boons: [Boons.Crush_Shot] },
    ],
  },
  {
    boon: Boons.Breaking_Wave,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Boons.Brilliant_Riposte,
    requirements: [
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Divine_Dash, Boons.Holy_Shield] },
    ],
  },
  {
    boon: Boons.Broken_Resolve,
    requirements: [
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Dash] },
    ],
  },
  {
    boon: Boons.Calculated_Risk,
    requirements: [
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Divine_Dash, Boons.Athenas_Aid] },
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Drunken_Dash, Boons.Dionysus_Aid] },
    ],
  },
  {
    boon: Boons.Clean_Kill,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Artemis_Aid, Boons.Pressure_Points] },
    ],
  },
  {
    boon: Boons.Cold_Embrace,
    requirements: [
      { number: 1, boons: [Boons.Crystal_Beam] },
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Passion_Dash, Boons.Aphrodites_Aid] },
    ],
  },
  {
    boon: Boons.Cold_Fusion,
    requirements: [
      { number: 1, boons: [Boons.Frost_Strike, Boons.Frost_Flourish, Boons.Mistral_Dash, Boons.Demeters_Aid] },
      { number: 1, boons: [Boons.Static_Discharge] },
    ],
  },
  {
    boon: Boons.Crystal_Clarity,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.Hunter_Dash, Boons.Artemis_Aid] },
      { number: 1, boons: [Boons.Crystal_Beam] },
    ],
  },
  {
    boon: Boons.Curse_of_Drowning,
    requirements: [
      { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain, Boons.Blade_Dash, Boons.Ares_Aid] },
      { number: 1, boons: [Boons.Flood_Shot] },
    ],
  },
  {
    boon: Boons.Curse_of_Longing,
    requirements: [
      { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain] },
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Dash] },
    ],
  },
  {
    boon: Boons.Curse_of_Nausea,
    requirements: [
      { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain, Boons.Curse_of_Vengeance] },
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Drunken_Dash, Boons.Dionysus_Aid] },
    ],
  },
  {
    boon: Boons.Deadly_Reversal,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Artemis_Aid] },
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish] },
    ],
  },
  {
    boon: Boons.Deathless_Stand,
    requirements: [
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Phalanx_Shot, Boons.Divine_Dash] },
    ],
  },
  {
    boon: Boons.Dire_Misfortune,
    requirements: [
      { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain] },
    ],
  },
  {
    boon: Boons.Divine_Protection,
    requirements: [
      { number: 1, boons: [Boons.Brilliant_Riposte] },
    ],
  },
  {
    boon: Boons.Double_Strike,
    requirements: [
      { number: 1, boons: [Boons.Thunder_Flourish, Boons.Thunder_Dash, Boons.Zeus_Aid, ] },
    ],
  },
  {
    boon: Boons.Empty_Inside,
    requirements: [
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Dash] },
    ],
  },
  {
    boon: Boons.Engulfing_Vortex,
    requirements: [
      { number: 1, boons: [Boons.Slicing_Shot, Boons.Blade_Dash, Boons.Ares_Aid] },
    ],
  },
  {
    boon: Boons.Exclusive_Access,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Trippy_Shot, Boons.Trippy_Flare, Boons.Drunken_Dash, Boons.Dionysus_Aid] },
    ],
  },
  {
    boon: Boons.Exit_Wounds,
    requirements: [
      { number: 1, boons: [Boons.True_Shot, Boons.Flood_Shot, Boons.Electric_Shot, Boons.Crush_Shot, Boons.Phalanx_Shot] },
    ],
  },
  // {
  //   boon: Boons.Flurry_Cast,
  //   requirements: [
  //     // { number: 1, boons: [Items.Infernal_Soul] }, // TODO: add alt RequiredBoonCounts
  //   ],
  // },
  {
    boon: Boons.Freezing_Vortex,
    requirements: [
      { number: 1, boons: [Boons.Slicing_Shot] },
      { number: 1, boons: [Boons.Frost_Strike, Boons.Frost_Flourish, Boons.Mistral_Dash, Boons.Demeters_Aid] },
    ],
  },
  {
    boon: Boons.Fully_Loaded,
    requirements: [
      { number: 2, boons: [Boons.Support_Fire, Boons.Pressure_Points, Boons.Exit_Wounds] },
    ],
  },
  {
    boon: Boons.Glacial_Glare,
    requirements: [
      { number: 1, boons: [Boons.Crystal_Beam] },
    ],
  },
  {
    boon: Boons.Greater_Recall,
    requirements: [
      // { number: 1, boons: [Items.Infernal_Soul] }, // TODO: add alt RequiredBoonCounts
      // { number: 1, boons: [Boons.Flurry_Cast, Boons.Quick_Reload, Items.Lambent_Plume] }, // TODO: add item
      { number: 1, boons: [Boons.Flurry_Cast, Boons.Quick_Reload] },
    ],
  },
  {
    boon: Boons.Heart_Rend,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot] },
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Dash] },
    ],
  },
  {
    boon: Boons.Hide_Breaker,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Artemis_Aid, Boons.Pressure_Points] },
    ],
  },
  {
    boon: Boons.High_Tolerance,
    requirements: [
      { number: 1, boons: [Boons.Trippy_Shot, Boons.Trippy_Flare] },
    ],
  },
  {
    boon: Boons.High_Voltage,
    requirements: [
      { number: 1, boons: [Boons.Thunder_Flourish, Boons.Thunder_Dash, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Huge_Catch,
    requirements: [
      // { number: 2, boons: [Items.Conch_Shell, Boons.Sunken_Treasure, Boons.Oceans_Bounty] },
      { number: 2, boons: [Boons.Sunken_Treasure, Boons.Oceans_Bounty] }, // TODO: add the item
    ],
  },
  {
    boon: Boons.Hunter_Instinct,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Pressure_Points] },
    ],
  },
  {
    boon: Boons.Hunters_Mark,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Artemis_Aid, Boons.Pressure_Points] },
    ],
  },
  {
    boon: Boons.Hunting_Blades,
    requirements: [
      { number: 1, boons: [Boons.Slicing_Shot] },
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.Hunter_Dash, Boons.Artemis_Aid] },
    ],
  },
  {
    boon: Boons.Ice_Wine,
    requirements: [
      { number: 1, boons: [Boons.Frost_Strike, Boons.Frost_Flourish, Boons.Mistral_Dash, Boons.Demeters_Aid] },
      { number: 1, boons: [Boons.Trippy_Shot, Boons.Trippy_Flare] },
    ],
  },
  {
    boon: Boons.Impending_Doom,
    requirements: [
      { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain, Boons.Curse_of_Vengeance] },
    ],
  },
  {
    boon: Boons.Killing_Freeze,
    requirements: [
      { number: 1, boons: [Boons.Frost_Strike, Boons.Frost_Flourish, Boons.Mistral_Dash, Boons.Demeters_Aid, Boons.Snow_Burst] },
    ],
  },
  {
    boon: Boons.Last_Stand,
    requirements: [
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Phalanx_Shot, Boons.Divine_Dash] },
    ],
  },
  {
    boon: Boons.Lightning_Rod,
    requirements: [
      // { number: 1, boons: [Items.Infernal_Soul] }, // TODO: add alt RequiredBoonCounts
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunter_Dash, Boons.Artemis_Aid] },
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Electric_Shot, Boons.Thunder_Dash, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Lightning_Phalanx,
    requirements: [
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Thunder_Dash, Boons.Zeus_Aid] },
      { number: 1, boons: [Boons.Phalanx_Shot] },
    ],
  },
  {
    boon: Boons.Low_Tolerance,
    requirements: [
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Drunken_Dash, Boons.Dionysus_Aid] },
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Dash] },
    ],
  },
  {
    boon: Boons.Merciful_End,
    requirements: [
      { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain] },
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish] },
    ],
  },
  {
    boon: Boons.Mirage_Shot,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Artemis_Aid] },
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Boons.Numbing_Sensation,
    requirements: [
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Drunken_Dash, Boons.Dionysus_Aid] },
    ],
  },
  {
    boon: Boons.Parting_Shot,
    requirements: [
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Phalanx_Shot, Boons.Divine_Dash, Boons.Athenas_Aid] },
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Dash, Boons.Aphrodites_Aid] },
    ],
  },
  {
    boon: Boons.Peer_Pressure,
    requirements: [
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Drunken_Dash] },
    ],
  },
  // {
  //   boon: Boons.Quick_Reload,
  //   requirements: [
  //     // { number: 1, boons: [Items.Infernal_Soul] }, // TODO: add alt RequiredBoonCounts
  //   ],
  // },
  {
    boon: Boons.Razor_Shoals,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Boons.Rip_Current,
    requirements: [
      { number: 1, boons: [Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Boons.Rush_Delivery,
    requirements: [
      // { number: 1, boons: [Boons.Greater_Haste, Boons.Hyper_Sprint, Items.Lambent_Plume] }, // TODO: add item
      { number: 1, boons: [Boons.Greater_Haste, Boons.Hyper_Sprint] },
    ],
  },
  {
    boon: Boons.Scintillating_Feast,
    requirements: [
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Thunder_Dash, Boons.Zeus_Aid] },
      { number: 1, boons: [Boons.Trippy_Shot] },
    ],
  },
  {
    boon: Boons.Sea_Storm,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Poseidons_Aid] },
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Electric_Shot, Boons.Thunder_Dash, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Second_Wave,
    requirements: [
      { number: 1, boons: [Boons.Typhoons_Fury, Boons.Breaking_Wave] },
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Boons.Smoldering_Air,
    requirements: [
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Dash, Boons.Aphrodites_Aid] },
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Electric_Shot, Boons.Thunder_Dash, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Splitting_Bolt,
    requirements: [
      { number: 1, boons: [Boons.Storm_Lightning, Boons.High_Voltage, Boons.Double_Strike] },
    ],
  },
  {
    boon: Boons.Splitting_Headache,
    requirements: [
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Drunken_Dash, Boons.Dionysus_Aid] },
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Artemis_Aid] },
    ],
  },
  {
    boon: Boons.Static_Discharge,
    requirements: [
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Electric_Shot, Boons.Thunder_Dash, Boons.Zeus_Aid, Boons.Heavens_Vengeance, Boons.Lightning_Reflexes] },
    ],
  },
  {
    boon: Boons.Storm_Lightning,
    requirements: [
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Electric_Shot] },
    ],
  },
  {
    boon: Boons.Stubborn_Roots,
    requirements: [
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Phalanx_Shot, Boons.Divine_Dash, Boons.Athenas_Aid] },
      { number: 1, boons: [Boons.Frost_Strike, Boons.Frost_Flourish, Boons.Crystal_Beam, Boons.Mistral_Dash, Boons.Demeters_Aid] },
    ],
  },
  {
    boon: Boons.Support_Fire,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunter_Dash, Boons.Artemis_Aid, Boons.Pressure_Points] },
    ],
  },
  {
    boon: Boons.Sweet_Nectar,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Dash, Boons.Aphrodites_Aid] },
    ],
  },
  {
    boon: Boons.Sweet_Surrender,
    requirements: [
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Dash] },
    ],
  },
  // {
  //   boon: Boons.Trippy_Flare, // TODO: No Prophecy Here, set to True
  //   requirements: [
  //     { number: 1, boons: [Aspects.Aspect_of_Hera] },
  //   ],
  // },
  {
    boon: Boons.Typhoons_Fury,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Boons.Unhealthy_Fixation,
    requirements: [
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Dash] },
      { number: 1, boons: [Boons.Empty_Inside, Boons.Sweet_Surrender, Boons.Broken_Resolve] },
    ],
  },
  {
    boon: Boons.Unshakable_Mettle,
    requirements: [
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Phalanx_Shot, Boons.Athenas_Aid] },
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Boons.Vengeful_Mood,
    requirements: [
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Electric_Shot, Boons.Thunder_Dash, Boons.Zeus_Aid] },
      { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain, Boons.Slicing_Shot, Boons.Blade_Dash, Boons.Ares_Aid] },
      { number: 1, boons: [Boons.Curse_of_Vengeance, Boons.Heavens_Vengeance, Boons.Holy_Shield, Boons.Wave_of_Despair, Boons.Frozen_Touch] },
    ],
  },
  {
    boon: Boons.Vicious_Cycle,
    requirements: [
      { number: 1, boons: [Boons.Black_Metal, Boons.Engulfing_Vortex] },
    ],
  },
  {
    boon: Boons.Wave_Pounding,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Boons.Winter_Harvest,
    requirements: [
      { number: 2, boons: [Boons.Killing_Freeze, Boons.Ravenous_Will, Boons.Arctic_Blast] },
    ],
  },
];

export {
  boonRequirements,
};
