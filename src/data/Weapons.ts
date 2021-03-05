import {
  BoonGroup,
  BoonList,
  BoonRow,
  Weapons,
} from 'redux/domain';

const generateWeapons = (): BoonList => ({
  [Weapons.Blade]: {
    [BoonGroup.Weapon]: {
      [BoonRow.Daedalus]: [
        'Breaching Slash',
        'Cruel Thrust',
        'Cursed Slash',
        'Dash Nova',
        'Double Edge',
        'Double Nova',
        'Flurry Slash',
        'Hoarding Slash',
        'Piercing Wave',
        'Shadow Slash',
        'Super Nova',
        'World Splitter',
      ],
    },
  },
  [Weapons.Spear]: {
    [BoonGroup.Weapon]: {
      [BoonRow.Daedalus]: [
        'Breaching Skewer',
        'Chain Skewer',
        'Charged Skewer',
        'Exploding Launcher',
        'Extending Jab',
        'Flaring Spin',
        'Flurry Jab',
        'Massive Spin',
        'Quick Spin',
        'Serrated Point',
        'Triple Jab',
        'Vicious Skewer',
      ],
    },
  },
  [Weapons.Shield]: {
    [BoonGroup.Weapon]: {
      [BoonRow.Daedalus]: [
        'Breaching Rush',
        'Charged Flight',
        'Charged Shot',
        'Dashing Flight',
        'Dashing Wallop',
        'Dread Flight',
        'Empowering Flight',
        'Explosive Return',
        'Ferocious Guard',
        'Minotaur Rush',
        'Pulverizing Blow',
        'Sudden Rush',
      ],
    },
  },
  [Weapons.Bow]: {
    [BoonGroup.Weapon]: {
      [BoonRow.Daedalus]: [
        'Chain Shot',
        'Charged Volley',
        'Concentrated Volley',
        'Explosive Shot',
        'Flurry Shot',
        'Perfect Shot',
        'Piercing Volley',
        'Point-Blank Shot',
        'Relentless Volley',
        'Sniper Shot',
        'Triple Shot',
        'Twin Shot',
      ],
    },
  },
  [Weapons.Fists]: {
    [BoonGroup.Weapon]: {
      [BoonRow.Daedalus]: [
        'Breaching Cross',
        'Colossus Knuckle',
        'Concentrated Knuckle',
        'Draining Cutter',
        'Explosive Upper',
        'Flying Cutter',
        'Heavy Knuckle',
        'Kinetic Launcher',
        'Long Knuckle',
        'Quake Cutter',
        'Rolling Knuckle',
        'Rush Kick',
      ],
    },
  },
  [Weapons.Rail]: {
    [BoonGroup.Weapon]: {
      [BoonRow.Daedalus]: [
        'Cluster Bomb',
        'Delta Chamber',
        'Explosive Fire',
        'Flurry Fire',
        'Hazard Bomb',
        'Piercing Fire',
        'Ricochet Fire',
        'Rocket Bomb',
        'Seeking Fire',
        'Spread Fire',
        'Targeting System',
        'Triple Bomb',
      ],
    },
  },
});

export {
  generateWeapons,
};
