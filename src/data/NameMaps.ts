import {
  BoonRows,
  Mapping,
  Weapons,
} from 'redux/domain';

const nameMaps: Mapping = {
  [BoonRows.Companions]: 'Companions',
  [BoonRows.Daedalus]: 'Daedalus Upgrades',
  [BoonRows.Keepsake_Items]: 'Keepsakes',
  [BoonRows.Talents]: 'Talents',
}

const weaponNameMaps: Mapping  = {
  [Weapons.Stygian_Blade]: 'Stygius',
  [Weapons.Heart_Seeker_Bow]: 'Coronacht',
  [Weapons.Twin_Fists]: 'Malphon',
  [Weapons.Adamant_Rail]: 'Exagryph',
  [Weapons.Shield_of_Chaos]: 'Aegis',
  [Weapons.Eternal_Spear]: 'Varatha',
};

export {
  nameMaps,
  weaponNameMaps,
};
