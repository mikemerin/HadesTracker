import {
  BoonRows,
  BoonTables,
  Gods,
  GroupRowOrder
 } from 'redux/domain';

const groupRowOrder: GroupRowOrder = {
  [BoonTables.Aspects]: [
    BoonRows.Aspect,
  ],
  [BoonTables.Chaos]: [
    BoonRows.Blessing,
    BoonRows.Curse,
  ],
  [BoonTables.CustomerLoyalty]: [
    BoonRows.Item,
  ],
  [BoonTables.Duo]: [
    Gods.Aphrodite,
    Gods.Ares,
    Gods.Artemis,
    Gods.Athena,
    Gods.Demeter,
    Gods.Dionysus,
    Gods.Poseidon,
    Gods.Zeus,
  ],
  [BoonTables.Items]: [
    BoonRows.Keepsakes,
  ],
  [BoonTables.Other]: [
    BoonRows.Other,
    BoonRows.Legendary,
  ],
  [BoonTables.Solo]: [
    BoonRows.Attack,
    BoonRows.Special,
    BoonRows.Cast,
    BoonRows.Dash,
    BoonRows.Call,
    BoonRows.Other,
    BoonRows.Legendary,
  ],
  [BoonTables.Weapon]: [
    BoonRows.Daedalus,
  ],
};

export {
  groupRowOrder,
};
