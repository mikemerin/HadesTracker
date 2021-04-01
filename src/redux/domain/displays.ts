export const BoonRows = {
  Attack: 'Attack',
  Aspect: 'Titan Blood',
  Blessing: 'Blessing',
  Call: 'Call',
  Cast: 'Cast',
  Curse: 'Curse',
  Daedalus: 'Daedalus Hammer',
  Dash: 'Dash',
  Extras: 'Extras',
  Item: 'Item',
  Keepsakes: 'Keepsakes',
  Legendary: 'Legendary',
  Other: 'Other',
  Special: 'Special',
  Talents: 'Darkness',
} as const;

export const BoonTables = {
  Aspects: 'Aspects',
  Chaos: 'Chaos',
  CustomerLoyalty: 'CustomerLoyalty',
  Duo: 'Duo',
  Extras: 'Extras',
  Items: 'Items',
  Other: 'Other',
  Solo: 'Solo',
  Weapon: 'Weapon',
} as const;

export const Pages = {
  Main: {text: 'Main Gods', url: '/Boons/Main'},
  Other: {text: 'Other Gods', url: '/Boons/Other'},
  Weapons: {text: 'Infernal Arms', url: '/Boons/Weapons'},
} as const;
