import {
  Aspects,
  BoonRequirements,
  Boons,
  ChaosBoons,
  Keepsakes,
  Talents,
  Upgrades,
} from 'redux/domain';

const boonRequirements: BoonRequirements[] = [
  {
    boon: Boons.Arctic_Blast,
    requirements: [
      { number: 1, boons: [Boons.Frost_Strike, Boons.Frost_Flourish, Boons.Icy_Flare, Boons.Mistral_Dash, Boons.Demeters_Aid, Boons.Snow_Burst] },
    ],
  },
  {
    boon: Boons.Auto_Reload,
    requirements: [
      { number: 1, boons: [Talents.Stygian_Soul] },
    ],
  },
  {
    boon: Boons.Bad_Influence,
    requirements: [
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Drunken_Dash, Boons.Dionysus_Aid] },
    ],
  },
  {
    boon: Boons.Bad_News,
    requirements: [
      { number: 1, boons: [Talents.Stygian_Soul] },
      { number: 1, boons: [Boons.Auto_Reload, Keepsakes.Lambent_Plume] },
    ],
  },
  {
    boon: Boons.Billowing_Strength,
    requirements: [
      { number: 1, boons: [Keepsakes.Sigil_of_the_Dead, Boons.Aphrodites_Aid, Boons.Ares_Aid, Boons.Artemis_Aid, Boons.Athenas_Aid, Boons.Demeters_Aid, Boons.Dionysus_Aid, Boons.Poseidons_Aid, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Black_Metal,
    requirements: [
      { number: 1, boons: [Boons.Slicing_Shot, Boons.Slicing_Flare, Boons.Blade_Dash, Boons.Ares_Aid] },
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
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Phalanx_Shot, Boons.Phalanx_Flare, Boons.Divine_Dash] },
    ],
  },
  {
    boon: Boons.Blizzard_Shot,
    requirements: [
      { number: 1, boons: [Boons.Frost_Strike, Boons.Frost_Flourish, Boons.Mistral_Dash, Boons.Demeters_Aid] },
      { number: 1, boons: [Boons.Flood_Shot, Boons.Flood_Flare] },
    ],
  },
  {
    boon: Boons.Blown_Kiss,
    requirements: [
      { number: 1, boons: [Boons.Crush_Shot, Boons.Passion_Flare] },
    ],
  },
  {
    boon: Boons.Boiling_Point,
    requirements: [
      { number: 1, boons: [Keepsakes.Sigil_of_the_Dead, Boons.Aphrodites_Aid, Boons.Ares_Aid, Boons.Artemis_Aid, Boons.Athenas_Aid, Boons.Demeters_Aid, Boons.Dionysus_Aid, Boons.Poseidons_Aid, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Breaking_Wave,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Flood_Flare, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
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
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Flare, Boons.Passion_Dash] },
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
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunters_Flare, Boons.Artemis_Aid, Boons.Pressure_Points] },
    ],
  },
  {
    boon: Boons.Clouded_Judgement,
    requirements: [
      { number: 1, boons: [Keepsakes.Sigil_of_the_Dead, Boons.Aphrodites_Aid, Boons.Ares_Aid, Boons.Artemis_Aid, Boons.Athenas_Aid, Boons.Demeters_Aid, Boons.Dionysus_Aid, Boons.Poseidons_Aid, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Cold_Embrace,
    requirements: [
      { number: 1, boons: [Boons.Crystal_Beam, Boons.Icy_Flare] },
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
    boon: Upgrades.Concentrated_Beam,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Lucifer] },
    ],
  },
  {
    boon: Boons.Crystal_Clarity,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.Hunter_Dash, Boons.Artemis_Aid] },
      { number: 1, boons: [Boons.Crystal_Beam, Boons.Icy_Flare] },
    ],
  },
  {
    boon: Boons.Curse_of_Drowning,
    requirements: [
      { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain, Boons.Blade_Dash, Boons.Ares_Aid] },
      { number: 1, boons: [Boons.Flood_Shot, Boons.Flood_Flare] },
    ],
  },
  {
    boon: Boons.Curse_of_Longing,
    requirements: [
      { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain] },
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Flare, Boons.Passion_Dash] },
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
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunters_Flare, Boons.Artemis_Aid] },
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish] },
    ],
  },
  {
    boon: Boons.Deathless_Stand,
    requirements: [
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Phalanx_Shot, Boons.Phalanx_Flare, Boons.Divine_Dash] },
    ],
  },
  {
    boon: ChaosBoons.Defiance,
    requirements: [
      { number: 1, boons: [ChaosBoons.Strike, ChaosBoons.Shot, ChaosBoons.Grasp, ChaosBoons.Soul, ChaosBoons.Favor, ChaosBoons.Affluence, ChaosBoons.Eclipse, ChaosBoons.Flourish, ChaosBoons.Lunge, ChaosBoons.Ambush, ChaosBoons.Assault] },
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
      { number: 1, boons: [Boons.Thunder_Flare, Boons.Thunder_Flourish, Boons.Thunder_Dash, Boons.Zeus_Aid, ] },
    ],
  },
  {
    boon: Boons.Empty_Inside,
    requirements: [
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Flare, Boons.Passion_Dash] },
    ],
  },
  {
    boon: Boons.Engulfing_Vortex,
    requirements: [
      { number: 1, boons: [Boons.Slicing_Shot, Boons.Slicing_Flare, Boons.Blade_Dash, Boons.Ares_Aid] },
    ],
  },
  {
    boon: Upgrades.Eternal_Chamber,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Lucifer] },
    ],
  },
  {
    boon: Boons.Exclusive_Access,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Flood_Flare, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Trippy_Shot, Boons.Trippy_Flare, Boons.Drunken_Dash, Boons.Dionysus_Aid] },
    ],
  },
  {
    boon: Boons.Exit_Wounds,
    requirements: [
      { number: 1, boons: [Boons.True_Shot, Boons.Hunters_Flare, Boons.Flood_Shot, Boons.Flood_Flare, Boons.Electric_Shot, Boons.Thunder_Flare, Boons.Crush_Shot, Boons.Passion_Flare, Boons.Phalanx_Shot, Boons.Phalanx_Flare] },
    ],
  },
  {
    boon: Upgrades.Flash_Fire,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Lucifer] },
    ],
  },
  {
    boon: Boons.Flood_Flare,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Beowulf] },
    ],
  },
  {
    boon: Boons.Freezing_Vortex,
    requirements: [
      { number: 1, boons: [Boons.Slicing_Shot, Boons.Slicing_Flare] },
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
    boon: Upgrades.Greater_Consecration,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Arthur] },
    ],
  },
  {
    boon: Upgrades.Greater_Inferno,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Lucifer] },
    ],
  },
  {
    boon: Boons.Greater_Recall,
    requirements: [
      { number: 1, boons: [Boons.Flurry_Cast, Boons.Quick_Reload, Keepsakes.Lambent_Plume] },
    ],
  },
  {
    boon: Boons.Heart_Rend,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunters_Flare] },
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Flare, Boons.Passion_Dash] },
    ],
  },
  {
    boon: Boons.Hide_Breaker,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunters_Flare, Boons.Artemis_Aid, Boons.Pressure_Points] },
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
      { number: 1, boons: [Boons.Thunder_Flare, Boons.Thunder_Flourish, Boons.Thunder_Dash, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Huge_Catch,
    requirements: [
      { number: 2, boons: [Keepsakes.Conch_Shell, Boons.Sunken_Treasure, Boons.Oceans_Bounty] },
    ],
  },
  {
    boon: Boons.Hunters_Flare,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Beowulf] },
    ],
  },
  {
    boon: Boons.Hunter_Instinct,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunters_Flare, Boons.Pressure_Points] },
      { number: 1, boons: [Keepsakes.Sigil_of_the_Dead, Boons.Aphrodites_Aid, Boons.Ares_Aid, Boons.Artemis_Aid, Boons.Athenas_Aid, Boons.Demeters_Aid, Boons.Dionysus_Aid, Boons.Poseidons_Aid, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Hunters_Mark,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunters_Flare, Boons.Artemis_Aid, Boons.Pressure_Points] },
    ],
  },
  {
    boon: Boons.Hunting_Blades,
    requirements: [
      { number: 1, boons: [Boons.Slicing_Shot, Boons.Slicing_Flare] },
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
    boon: Boons.Icy_Flare,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Beowulf] },
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
      { number: 1, boons: [Boons.Frost_Strike, Boons.Frost_Flourish, Boons.Icy_Flare, Boons.Mistral_Dash, Boons.Demeters_Aid, Boons.Snow_Burst] },
    ],
  },
  {
    boon: Boons.Last_Stand,
    requirements: [
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Phalanx_Shot, Boons.Phalanx_Flare, Boons.Divine_Dash] },
    ],
  },
  {
    boon: Boons.Lightning_Rod,
    requirements: [
      { number: 1, boons: [Talents.Infernal_Soul] },
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunters_Flare, Boons.Hunter_Dash, Boons.Artemis_Aid] },
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Electric_Shot, Boons.Thunder_Flare, Boons.Thunder_Dash, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Lightning_Phalanx,
    requirements: [
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Thunder_Dash, Boons.Zeus_Aid] },
      { number: 1, boons: [Boons.Phalanx_Shot, Boons.Phalanx_Flare] },
    ],
  },
  {
    boon: Boons.Low_Tolerance,
    requirements: [
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Drunken_Dash, Boons.Dionysus_Aid] },
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Flare, Boons.Passion_Dash] },
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
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunters_Flare, Boons.Artemis_Aid] },
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Flood_Flare, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
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
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Phalanx_Shot, Boons.Phalanx_Flare, Boons.Divine_Dash, Boons.Athenas_Aid] },
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Flare, Boons.Passion_Dash, Boons.Aphrodites_Aid] },
    ],
  },
  {
    boon: Boons.Passion_Flare,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Beowulf] },
    ],
  },
  {
    boon: Boons.Peer_Pressure,
    requirements: [
      { number: 1, boons: [Boons.Drunken_Strike, Boons.Drunken_Flourish, Boons.Drunken_Dash] },
    ],
  },
  {
    boon: Boons.Phalanx_Flare,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Beowulf] },
    ],
  },
  {
    boon: Boons.Proud_Bearing,
    requirements: [
      { number: 1, boons: [Keepsakes.Sigil_of_the_Dead, Boons.Aphrodites_Aid, Boons.Ares_Aid, Boons.Artemis_Aid, Boons.Athenas_Aid, Boons.Demeters_Aid, Boons.Dionysus_Aid, Boons.Poseidons_Aid, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Quick_Favor,
    requirements: [
      { number: 1, boons: [Keepsakes.Sigil_of_the_Dead, Boons.Aphrodites_Aid, Boons.Ares_Aid, Boons.Artemis_Aid, Boons.Athenas_Aid, Boons.Demeters_Aid, Boons.Dionysus_Aid, Boons.Poseidons_Aid, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Razor_Shoals,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Flood_Flare, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Upgrades.Rending_Claws,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Gilgamesh] },
    ],
  },
  {
    boon: Upgrades.Repulse_Shot,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Rama] },
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
      { number: 1, boons: [Boons.Greater_Haste, Boons.Hyper_Sprint, Keepsakes.Lambent_Plume] },
    ],
  },
  {
    boon: Boons.Scintillating_Feast,
    requirements: [
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Thunder_Dash, Boons.Zeus_Aid] },
      { number: 1, boons: [Boons.Trippy_Shot, Boons.Trippy_Flare] },
    ],
  },
  {
    boon: Boons.Sea_Storm,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Flood_Flare, Boons.Poseidons_Aid] },
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Electric_Shot, Boons.Thunder_Flare, Boons.Thunder_Dash, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Second_Wave,
    requirements: [
      { number: 1, boons: [Boons.Typhoons_Fury, Boons.Breaking_Wave] },
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Flood_Flare, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Boons.Second_Wind,
    requirements: [
      { number: 1, boons: [Keepsakes.Sigil_of_the_Dead, Boons.Aphrodites_Aid, Boons.Ares_Aid, Boons.Artemis_Aid, Boons.Athenas_Aid, Boons.Demeters_Aid, Boons.Dionysus_Aid, Boons.Poseidons_Aid, Boons.Zeus_Aid] },
    ],
  },
  {
    boon: Boons.Slicing_Flare,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Beowulf] },
    ],
  },
  {
    boon: Boons.Smoldering_Air,
    requirements: [
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Flare, Boons.Passion_Dash, Boons.Aphrodites_Aid] },
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Electric_Shot, Boons.Thunder_Flare, Boons.Thunder_Dash, Boons.Zeus_Aid] },
      { number: 1, boons: [Keepsakes.Sigil_of_the_Dead, Boons.Aphrodites_Aid, Boons.Ares_Aid, Boons.Artemis_Aid, Boons.Athenas_Aid, Boons.Demeters_Aid, Boons.Dionysus_Aid, Boons.Poseidons_Aid, Boons.Zeus_Aid] },
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
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunters_Flare, Boons.Artemis_Aid] },
    ],
  },
  {
    boon: Boons.Static_Discharge,
    requirements: [
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Electric_Shot, Boons.Thunder_Flare, Boons.Thunder_Dash, Boons.Zeus_Aid, Boons.Heavens_Vengeance, Boons.Lightning_Reflexes] },
    ],
  },
  {
    boon: Boons.Storm_Lightning,
    requirements: [
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Electric_Shot, Boons.Thunder_Flare] },
    ],
  },
  {
    boon: Boons.Stubborn_Roots,
    requirements: [
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Phalanx_Shot, Boons.Phalanx_Flare, Boons.Divine_Dash, Boons.Athenas_Aid] },
      { number: 1, boons: [Boons.Frost_Strike, Boons.Frost_Flourish, Boons.Crystal_Beam, Boons.Icy_Flare, Boons.Mistral_Dash, Boons.Demeters_Aid] },
    ],
  },
  {
    boon: Boons.Support_Fire,
    requirements: [
      { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunters_Flare, Boons.Hunter_Dash, Boons.Artemis_Aid, Boons.Pressure_Points] },
    ],
  },
  {
    boon: Boons.Sweet_Nectar,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Flood_Flare, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Flare, Boons.Passion_Dash, Boons.Aphrodites_Aid] },
    ],
  },
  {
    boon: Boons.Sweet_Surrender,
    requirements: [
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Flare, Boons.Passion_Dash] },
    ],
  },
  {
    boon: Boons.Thunder_Flare,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Beowulf] },
    ],
  },
  {
    boon: Upgrades.Triple_Beam,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Lucifer] },
    ],
  },
  {
    boon: Boons.Trippy_Flare,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Beowulf] },
    ],
  },
  {
    boon: Boons.Typhoons_Fury,
    requirements: [
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Flood_Flare, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Boons.Unhealthy_Fixation,
    requirements: [
      { number: 1, boons: [Boons.Heartbreak_Strike, Boons.Heartbreak_Flourish, Boons.Crush_Shot, Boons.Passion_Flare, Boons.Passion_Dash] },
      { number: 1, boons: [Boons.Empty_Inside, Boons.Sweet_Surrender, Boons.Broken_Resolve] },
    ],
  },
  {
    boon: Boons.Unshakable_Mettle,
    requirements: [
      { number: 1, boons: [Boons.Divine_Strike, Boons.Divine_Flourish, Boons.Phalanx_Shot, Boons.Phalanx_Flare, Boons.Athenas_Aid] },
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Flood_Flare, Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Upgrades.Unyielding_Defense,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Beowulf] },
    ],
  },
  {
    boon: Boons.Vengeful_Mood,
    requirements: [
      { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Flourish, Boons.Electric_Shot, Boons.Thunder_Flare, Boons.Thunder_Dash, Boons.Zeus_Aid] },
      { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain, Boons.Slicing_Shot, Boons.Slicing_Flare, Boons.Blade_Dash, Boons.Ares_Aid] },
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
      { number: 1, boons: [Boons.Tempest_Strike, Boons.Tempest_Flourish, Boons.Flood_Shot, Boons.Flood_Flare, Boons.Tidal_Dash, Boons.Poseidons_Aid] },
    ],
  },
  {
    boon: Upgrades.Winged_Serpent,
    requirements: [
      { number: 1, boons: [Aspects.Aspect_of_Guan_Yu] },
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
