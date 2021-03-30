import {
  Boons,
  BoonRows,
  BoonTables,
  ChaosBoons,
  Gods,
  GroupBoons,
} from 'redux/domain';

const boonSolos: GroupBoons = {
  [Gods.Aphrodite]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: [Boons.Heartbreak_Strike],
      [BoonRows.Special]: [Boons.Heartbreak_Flourish],
      [BoonRows.Cast]: [Boons.Crush_Shot, Boons.Passion_Flare],
      [BoonRows.Dash]: [Boons.Passion_Dash],
      [BoonRows.Call]: [Boons.Aphrodites_Aid],
      [BoonRows.Other]: [
        Boons.Dying_Lament,
        Boons.Wave_of_Despair,
        Boons.Life_Affirmation,
        Boons.Different_League,
        Boons.Empty_Inside,
        Boons.Broken_Resolve,
        Boons.Blown_Kiss,
        Boons.Sweet_Surrender,
      ],
      [BoonRows.Legendary]: [Boons.Unhealthy_Fixation]
    },
  },
  [Gods.Ares]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: [Boons.Curse_of_Agony],
      [BoonRows.Special]: [Boons.Curse_of_Pain],
      [BoonRows.Cast]: [Boons.Slicing_Shot, Boons.Slicing_Flare],
      [BoonRows.Dash]: [Boons.Blade_Dash],
      [BoonRows.Call]: [Boons.Ares_Aid],
      [BoonRows.Other]: [
        Boons.Curse_of_Vengeance,
        Boons.Urge_to_Kill,
        Boons.Blood_Frenzy,
        Boons.Battle_Rage,
        Boons.Black_Metal,
        Boons.Engulfing_Vortex,
        Boons.Dire_Misfortune,
        Boons.Impending_Doom,
      ],
      [BoonRows.Legendary]: [Boons.Vicious_Cycle]
    },
  },
  [Gods.Artemis]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: [Boons.Deadly_Strike],
      [BoonRows.Special]: [Boons.Deadly_Flourish],
      [BoonRows.Cast]: [Boons.True_Shot, Boons.Hunters_Flare],
      [BoonRows.Dash]: [Boons.Hunter_Dash],
      [BoonRows.Call]: [Boons.Artemis_Aid],
      [BoonRows.Other]: [
        Boons.Pressure_Points,
        Boons.Exit_Wounds,
        Boons.Clean_Kill,
        Boons.Support_Fire,
        Boons.Hide_Breaker,
        Boons.Hunter_Instinct,
        Boons.Hunters_Mark,
      ],
      [BoonRows.Legendary]: [Boons.Fully_Loaded]
    },
  },
  [Gods.Athena]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: [Boons.Divine_Strike],
      [BoonRows.Special]: [Boons.Divine_Flourish],
      [BoonRows.Cast]: [Boons.Phalanx_Shot, Boons.Phalanx_Flare],
      [BoonRows.Dash]: [Boons.Divine_Dash],
      [BoonRows.Call]: [Boons.Athenas_Aid],
      [BoonRows.Other]: [
        Boons.Holy_Shield,
        Boons.Bronze_Skin,
        Boons.Deathless_Stand,
        Boons.Last_Stand,
        Boons.Proud_Bearing,
        Boons.Sure_Footing,
        Boons.Blinding_Flash,
        Boons.Brilliant_Riposte,
      ],
      [BoonRows.Legendary]: [Boons.Divine_Protection]
    },
  },
  [Gods.Chaos]: {
    [BoonTables.Chaos]: {
      [BoonRows.Blessing]: [
        ChaosBoons.Affluence,
        ChaosBoons.Ambush,
        ChaosBoons.Assault,
        ChaosBoons.Defiance,
        ChaosBoons.Eclipse,
        ChaosBoons.Favor,
        ChaosBoons.Flourish,
        ChaosBoons.Grasp,
        ChaosBoons.Lunge,
        ChaosBoons.Shot,
        ChaosBoons.Soul,
        ChaosBoons.Strike,
      ],
      [BoonRows.Curse]: [
        ChaosBoons.Abyssal,
        ChaosBoons.Addled,
        ChaosBoons.Atrophic,
        ChaosBoons.Caustic,
        ChaosBoons.Enshrouded,
        ChaosBoons.Excruciating,
        ChaosBoons.Flayed,
        ChaosBoons.Halting,
        ChaosBoons.Maimed,
        ChaosBoons.Pauper,
        ChaosBoons.Roiling,
        ChaosBoons.Slippery,
        ChaosBoons.Slothful,
      ],
    },
  },
  [Gods.Demeter]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: [Boons.Frost_Strike],
      [BoonRows.Special]: [Boons.Frost_Flourish],
      [BoonRows.Cast]: [Boons.Crystal_Beam, Boons.Icy_Flare],
      [BoonRows.Dash]: [Boons.Mistral_Dash],
      [BoonRows.Call]: [Boons.Demeters_Aid],
      [BoonRows.Other]: [
        Boons.Snow_Burst,
        Boons.Frozen_Touch,
        Boons.Rare_Crop,
        Boons.Nourished_Soul,
        Boons.Ravenous_Will,
        Boons.Glacial_Glare,
        Boons.Arctic_Blast,
        Boons.Killing_Freeze,
      ],
      [BoonRows.Legendary]: [Boons.Winter_Harvest]
    },
  },
  [Gods.Dionysus]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: [Boons.Drunken_Strike],
      [BoonRows.Special]: [Boons.Drunken_Flourish],
      [BoonRows.Cast]: [Boons.Trippy_Shot, Boons.Trippy_Flare],
      [BoonRows.Dash]: [Boons.Drunken_Dash],
      [BoonRows.Call]: [Boons.Dionysus_Aid],
      [BoonRows.Other]: [
        Boons.Premium_Vintage,
        Boons.After_Party,
        Boons.Strong_Drink,
        Boons.Positive_Outlook,
        Boons.High_Tolerance,
        Boons.Bad_Influence,
        Boons.Numbing_Sensation,
        Boons.Peer_Pressure,
      ],
      [BoonRows.Legendary]: [Boons.Black_Out]
    },
  },
  [Gods.Hermes]: {
    [BoonTables.Other]: {
      [BoonRows.Other]: [
        Boons.Quick_Reload,
        Boons.Auto_Reload,
        Boons.Greatest_Reflex,
        Boons.Side_Hustle,
        Boons.Greater_Evasion,
        Boons.Swift_Flourish,
        Boons.Second_Wind,
        Boons.Swift_Strike,
        Boons.Greater_Haste,
        Boons.Flurry_Cast,
        Boons.Quick_Favor,
        Boons.Quick_Recovery,
        Boons.Hyper_Sprint,
        Boons.Rush_Delivery,
      ],
      [BoonRows.Legendary]: [Boons.Greater_Recall, Boons.Bad_News]
    }
  },
  [Gods.Poseidon]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: [Boons.Tempest_Strike],
      [BoonRows.Special]: [Boons.Tempest_Flourish],
      [BoonRows.Cast]: [Boons.Flood_Shot, Boons.Flood_Flare],
      [BoonRows.Dash]: [Boons.Tidal_Dash],
      [BoonRows.Call]: [Boons.Poseidons_Aid],
      [BoonRows.Other]: [
        Boons.Boiling_Point,
        Boons.Hydraulic_Might,
        Boons.Sunken_Treasure,
        Boons.Oceans_Bounty,
        Boons.Typhoons_Fury,
        Boons.Wave_Pounding,
        Boons.Rip_Current,
        Boons.Breaking_Wave,
        Boons.Razor_Shoals,
      ],
      [BoonRows.Legendary]: [Boons.Second_Wave, Boons.Huge_Catch]
    },
  },
  [Gods.Zeus]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: [Boons.Lightning_Strike],
      [BoonRows.Special]: [Boons.Thunder_Flourish],
      [BoonRows.Cast]: [Boons.Electric_Shot, Boons.Thunder_Flare],
      [BoonRows.Dash]: [Boons.Thunder_Dash],
      [BoonRows.Call]: [Boons.Zeus_Aid],
      [BoonRows.Other]: [
        Boons.Billowing_Strength,
        Boons.Lightning_Reflexes,
        Boons.Heavens_Vengeance,
        Boons.Clouded_Judgement,
        Boons.High_Voltage,
        Boons.Double_Strike,
        Boons.Storm_Lightning,
        Boons.Static_Discharge,
      ],
      [BoonRows.Legendary]: [Boons.Splitting_Bolt]
    },
  }
};

export {
  boonSolos,
};
