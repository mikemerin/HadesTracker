import { Gods, Weapons } from 'redux/domain';

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
  [Weapons.Blade]: '#fd3404',
  [Weapons.Bow]: '#c985e2',
  [Weapons.Fists]: '#f62c9a',
  [Weapons.Rail]: '#bbae99',
  [Weapons.Shield]: '#d5c327',
  [Weapons.Spear]: '#45a990',
};

export {
  colors,
};
