import { BoonRows } from 'redux/domain';
import { nameMaps } from 'data/NameMaps';

const activeRunBoonRows = new Set([
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
].map((boonRow) => nameMaps[boonRow] || boonRow));

export {
  activeRunBoonRows,
};
