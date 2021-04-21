import { BoonRow, BoonRows } from 'redux/domain';

const prophecyBoonRows = new Set<BoonRow>([
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
]);

export {
  prophecyBoonRows,
};
