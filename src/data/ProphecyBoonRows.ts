import { AnyBoon, BoonRows, Upgrades } from 'redux/domain';
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
  Upgrades.Concentrated_Beam,
  Upgrades.Concentrated_Fire,
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
