import {
  BoonRows,
  Boons,
  BoonTables,
  GroupBoons,
  Weapons,
} from 'redux/domain';

const weapons: GroupBoons = {
  [Weapons.Blade]: {
    [BoonTables.Weapon]: {
      [BoonRows.Daedalus]: [
        Boons.Breaching_Slash,
        Boons.Cruel_Thrust,
        Boons.Cursed_Slash,
        Boons.Dash_Nova,
        Boons.Double_Edge,
        Boons.Double_Nova,
        Boons.Flurry_Slash,
        Boons.Hoarding_Slash,
        Boons.Piercing_Wave,
        Boons.Shadow_Slash,
        Boons.Super_Nova,
        Boons.World_Splitter,
      ],
    },
  },
  [Weapons.Spear]: {
    [BoonTables.Weapon]: {
      [BoonRows.Daedalus]: [
        Boons.Breaching_Skewer,
        Boons.Chain_Skewer,
        Boons.Charged_Skewer,
        Boons.Exploding_Launcher,
        Boons.Extending_Jab,
        Boons.Flaring_Spin,
        Boons.Flurry_Jab,
        Boons.Massive_Spin,
        Boons.Quick_Spin,
        Boons.Serrated_Point,
        Boons.Triple_Jab,
        Boons.Vicious_Skewer,
      ],
    },
  },
  [Weapons.Shield]: {
    [BoonTables.Weapon]: {
      [BoonRows.Daedalus]: [
        Boons.Breaching_Rush,
        Boons.Charged_Flight,
        Boons.Charged_Shot,
        Boons.Dashing_Flight,
        Boons.Dashing_Wallop,
        Boons.Dread_Flight,
        Boons.Empowering_Flight,
        Boons.Explosive_Return,
        Boons.Ferocious_Guard,
        Boons.Minotaur_Rush,
        Boons.Pulverizing_Blow,
        Boons.Sudden_Rush,
      ],
    },
  },
  [Weapons.Bow]: {
    [BoonTables.Weapon]: {
      [BoonRows.Daedalus]: [
        Boons.Chain_Shot,
        Boons.Charged_Volley,
        Boons.Concentrated_Volley,
        Boons.Explosive_Shot,
        Boons.Flurry_Shot,
        Boons.Perfect_Shot,
        Boons.Piercing_Volley,
        Boons.Point_Blank_Shot,
        Boons.Relentless_Volley,
        Boons.Sniper_Shot,
        Boons.Triple_Shot,
        Boons.Twin_Shot,
      ],
    },
  },
  [Weapons.Fists]: {
    [BoonTables.Weapon]: {
      [BoonRows.Daedalus]: [
        Boons.Breaching_Cross,
        Boons.Colossus_Knuckle,
        Boons.Concentrated_Knuckle,
        Boons.Draining_Cutter,
        Boons.Explosive_Upper,
        Boons.Flying_Cutter,
        Boons.Heavy_Knuckle,
        Boons.Kinetic_Launcher,
        Boons.Long_Knuckle,
        Boons.Quake_Cutter,
        Boons.Rolling_Knuckle,
        Boons.Rush_Kick,
      ],
    },
  },
  [Weapons.Rail]: {
    [BoonTables.Weapon]: {
      [BoonRows.Daedalus]: [
        Boons.Cluster_Bomb,
        Boons.Delta_Chamber,
        Boons.Explosive_Fire,
        Boons.Flurry_Fire,
        Boons.Hazard_Bomb,
        Boons.Piercing_Fire,
        Boons.Ricochet_Fire,
        Boons.Rocket_Bomb,
        Boons.Seeking_Fire,
        Boons.Spread_Fire,
        Boons.Targeting_System,
        Boons.Triple_Bomb,
      ],
    },
  },
};

export {
  weapons,
};
