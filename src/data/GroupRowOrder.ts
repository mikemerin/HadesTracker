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
    BoonRows.Curse,
    BoonRows.Blessing,
  ],
  [BoonTables.Companions]: [
    BoonRows.Companions,
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
  [BoonTables.Icons]: [
    BoonRows.Aspect,
    BoonRows.Keepsakes,
    BoonRows.Talents,
  ],
  [BoonTables.Keepsakes]: [
    BoonRows.Keepsake_Items,
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
  [BoonTables.Talents]: [
    BoonRows.Talents,
  ],
  [BoonTables.Weapon]: [
    BoonRows.Daedalus,
  ],
};

export {
  groupRowOrder,
};
