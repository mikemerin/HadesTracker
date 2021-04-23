import { Gods, Icons, Weapons } from 'redux/domain';

const colors: {[key: string]: string} = {
  background: '#eeefef',
  [Gods.Aphrodite]: '#f32ff3',
  [Gods.Ares]: '#ff0224',
  [Gods.Artemis]: '#7dc237',
  [Gods.Athena]: '#baaf5f',
  [Gods.Chaos]: '#9185da',
  [Gods.Demeter]: '#bdcefa',
  [Gods.Dionysus]: '#eda2f8',
  [Gods.Hermes]: '#ffbd8e',
  [Gods.Poseidon]: '#289ad2',
  [Gods.Zeus]: '#ffdc62',
  [Weapons.Stygian_Blade]: '#fd3404',
  [Weapons.Heart_Seeker_Bow]: '#c985e2',
  [Weapons.Twin_Fists]: '#f62c9a',
  [Weapons.Adamant_Rail]: '#bbae99',
  [Weapons.Shield_of_Chaos]: '#d5c327',
  [Weapons.Eternal_Spear]: '#45a990',
  [Icons.Keepsakes]: '#3c2c30',
  // TODO: Keepsakes, Talents, etc.
};

export {
  colors,
};
