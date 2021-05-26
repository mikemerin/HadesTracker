import { AnyBoon, Boons, BoonRows, Upgrades } from 'redux/domain';
import { nameMaps } from 'data/NameMaps';

const prophecyBoonRows = new Set([
  BoonRows.Attack,
  BoonRows.Special,
  BoonRows.Cast,
  BoonRows.Dash,
  BoonRows.Call,
  BoonRows.Other,
  BoonRows.Legendary,

  BoonRows.Aphrodite,
  BoonRows.Ares,
  BoonRows.Artemis,
  BoonRows.Athena,
  BoonRows.Demeter,
  BoonRows.Dionysus,
  BoonRows.Poseidon,
  BoonRows.Zeus,

  BoonRows.Blessing,
  BoonRows.Curse,

  BoonRows.Daedalus,
  BoonRows.Aspect,
].map((boonRow) => nameMaps[boonRow] || boonRow));

const prophecyBoonExceptions = new Set<AnyBoon>([
  Boons.Flood_Flare,
  Boons.Hunters_Flare,
  Boons.Icy_Flare,
  Boons.Passion_Flare,
  Boons.Phalanx_Flare,
  Boons.Slicing_Flare,
  Boons.Thunder_Flare,
  Boons.Trippy_Flare,

  Upgrades.Concentrated_Beam,
  Upgrades.Eternal_Chamber,
  Upgrades.Flash_Fire,
  Upgrades.Greater_Consecration,
  Upgrades.Greater_Inferno,
  Upgrades.Rending_Claws,
  Upgrades.Repulse_Shot,
  Upgrades.Triple_Beam,
  Upgrades.Unyielding_Defense,
  Upgrades.Winged_Serpent,
]);

export {
  prophecyBoonExceptions,
  prophecyBoonRows,
};
