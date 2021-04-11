import {
  Aspects,
  BoonRows,
  BoonTables,
  GroupBoons,
  Upgrades,
  Weapons,
} from 'redux/domain';

const weapons: GroupBoons = {
  [Weapons.Stygian_Blade]: {
    [BoonTables.Weapon]: {
      [BoonRows.Daedalus]: [
        Upgrades.Breaching_Slash,
        Upgrades.Cruel_Thrust,
        Upgrades.Cursed_Slash,
        Upgrades.Dash_Nova,
        Upgrades.Double_Edge,
        Upgrades.Double_Nova,
        Upgrades.Flurry_Slash,
        Upgrades.Hoarding_Slash,
        Upgrades.Piercing_Wave,
        Upgrades.Shadow_Slash,
        Upgrades.Super_Nova,
        Upgrades.World_Splitter,
        Upgrades.Greater_Consecration,
      ],
    },
    [BoonTables.Aspects]: {
      [BoonRows.Aspect]: [
        Aspects.Aspect_of_Zagreus_Blade,
        Aspects.Aspect_of_Nemesis,
        Aspects.Aspect_of_Poseidon,
        Aspects.Aspect_of_Arthur,
      ],
    },
  },
  [Weapons.Eternal_Spear]: {
    [BoonTables.Weapon]: {
      [BoonRows.Daedalus]: [
        Upgrades.Breaching_Skewer,
        Upgrades.Chain_Skewer,
        Upgrades.Charged_Skewer,
        Upgrades.Exploding_Launcher,
        Upgrades.Extending_Jab,
        Upgrades.Flaring_Spin,
        Upgrades.Flurry_Jab,
        Upgrades.Massive_Spin,
        Upgrades.Quick_Spin,
        Upgrades.Serrated_Point,
        Upgrades.Triple_Jab,
        Upgrades.Vicious_Skewer,
        Upgrades.Winged_Serpent,
      ],
    },
    [BoonTables.Aspects]: {
      [BoonRows.Aspect]: [
        Aspects.Aspect_of_Zagreus_Spear,
        Aspects.Aspect_of_Achilles,
        Aspects.Aspect_of_Hades,
        Aspects.Aspect_of_Guan_Yu,
      ],
    },
  },
  [Weapons.Shield_of_Chaos]: {
    [BoonTables.Weapon]: {
      [BoonRows.Daedalus]: [
        Upgrades.Breaching_Rush,
        Upgrades.Charged_Flight,
        Upgrades.Charged_Shot,
        Upgrades.Dashing_Flight,
        Upgrades.Dashing_Wallop,
        Upgrades.Dread_Flight,
        Upgrades.Empowering_Flight,
        Upgrades.Explosive_Return,
        Upgrades.Ferocious_Guard,
        Upgrades.Minotaur_Rush,
        Upgrades.Pulverizing_Blow,
        Upgrades.Sudden_Rush,
        Upgrades.Unyielding_Defense,
      ],
    },
    [BoonTables.Aspects]: {
      [BoonRows.Aspect]: [
        Aspects.Aspect_of_Zagreus_Shield,
        Aspects.Aspect_of_Chaos,
        Aspects.Aspect_of_Zeus,
        Aspects.Aspect_of_Beowulf,
      ],
    },
  },
  [Weapons.Heart_Seeker_Bow]: {
    [BoonTables.Weapon]: {
      [BoonRows.Daedalus]: [
        Upgrades.Chain_Shot,
        Upgrades.Charged_Volley,
        Upgrades.Concentrated_Volley,
        Upgrades.Explosive_Shot,
        Upgrades.Flurry_Shot,
        Upgrades.Perfect_Shot,
        Upgrades.Piercing_Volley,
        Upgrades.Point_Blank_Shot,
        Upgrades.Relentless_Volley,
        Upgrades.Sniper_Shot,
        Upgrades.Triple_Shot,
        Upgrades.Twin_Shot,
        Upgrades.Repulse_Shot,
      ],
    },
    [BoonTables.Aspects]: {
      [BoonRows.Aspect]: [
        Aspects.Aspect_of_Zagreus_Bow,
        Aspects.Aspect_of_Chiron,
        Aspects.Aspect_of_Hera,
        Aspects.Aspect_of_Rama,
      ],
    },
  },
  [Weapons.Twin_Fists]: {
    [BoonTables.Weapon]: {
      [BoonRows.Daedalus]: [
        Upgrades.Breaching_Cross,
        Upgrades.Colossus_Knuckle,
        Upgrades.Concentrated_Knuckle,
        Upgrades.Draining_Cutter,
        Upgrades.Explosive_Upper,
        Upgrades.Flying_Cutter,
        Upgrades.Heavy_Knuckle,
        Upgrades.Kinetic_Launcher,
        Upgrades.Long_Knuckle,
        Upgrades.Quake_Cutter,
        Upgrades.Rolling_Knuckle,
        Upgrades.Rush_Kick,
        Upgrades.Rending_Claws,
      ],
    },
    [BoonTables.Aspects]: {
      [BoonRows.Aspect]: [
        Aspects.Aspect_of_Zagreus_Fists,
        Aspects.Aspect_of_Talos,
        Aspects.Aspect_of_Demeter,
        Aspects.Aspect_of_Gilgamesh,
      ],
    },
  },
  [Weapons.Adamant_Rail]: {
    [BoonTables.Weapon]: {
      [BoonRows.Daedalus]: [
        Upgrades.Cluster_Bomb,
        Upgrades.Concentrated_Fire, // TODO: no prophecyForetold for this upgrade
        Upgrades.Delta_Chamber,
        Upgrades.Explosive_Fire,
        Upgrades.Flurry_Fire,
        Upgrades.Hazard_Bomb,
        Upgrades.Piercing_Fire,
        Upgrades.Ricochet_Fire,
        Upgrades.Rocket_Bomb,
        Upgrades.Seeking_Fire,
        Upgrades.Spread_Fire,
        Upgrades.Targeting_System,
        Upgrades.Triple_Bomb,
        Upgrades.Concentrated_Beam, // Lucifer-Specific Below
        Upgrades.Eternal_Chamber,
        Upgrades.Flash_Fire,
        Upgrades.Greater_Inferno,
        Upgrades.Triple_Beam,
      ],
    },
    [BoonTables.Aspects]: {
      [BoonRows.Aspect]: [
        Aspects.Aspect_of_Zagreus_Rail,
        Aspects.Aspect_of_Eris,
        Aspects.Aspect_of_Hestia,
        Aspects.Aspect_of_Lucifer,
      ],
    },
  },
};

export {
  weapons,
};
