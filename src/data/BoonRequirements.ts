import { Boons, BoonRequirements } from 'redux/domain';

const boonRequirements: BoonRequirements[] = [
    {
      boon: Boons.Black_Metal,
      requirements: [
        { number: 1, boons: [Boons.Slicing_Shot, Boons.Blade_Dash, Boons.Ares_Aid] },
      ],
    },
    {
      boon: Boons.Dire_Misfortune,
      requirements: [
        { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain] },
      ],
    },
    {
      boon: Boons.Double_Strike,
      requirements: [
        { number: 1, boons: [Boons.Thunder_Flourish, Boons.Zeus_Aid, Boons.Thunder_Dash] },
      ],
    },
    {
      boon: Boons.Engulfing_Vortex,
      requirements: [
        { number: 1, boons: [Boons.Slicing_Shot, Boons.Blade_Dash, Boons.Ares_Aid] },
      ],
    },
    {
      boon: Boons.Impending_Doom,
      requirements: [
        { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain, Boons.Curse_of_Vengeance] },
      ],
    },
    {
      boon: Boons.High_Voltage,
      requirements: [
        { number: 1, boons: [Boons.Thunder_Flourish, Boons.Zeus_Aid, Boons.Thunder_Dash] },
      ],
    },
    {
      boon: Boons.Hunting_Blades,
      requirements: [
        { number: 1, boons: [Boons.Slicing_Shot] },
        { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.Hunter_Dash, Boons.Artemis_Aid] },
      ],
    },
    {
      boon: Boons.Lightning_Rod,
      requirements: [
        // { number: 1, boons: [Boons.Infernal_Soul] }, // TODO: add alt RequiredBoonCounts
        { number: 1, boons: [Boons.Deadly_Strike, Boons.Deadly_Flourish, Boons.True_Shot, Boons.Hunter_Dash, Boons.Artemis_Aid] },
        { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Dash, Boons.Thunder_Flourish, Boons.Electric_Shot, Boons.Zeus_Aid] },
      ],
    },
    {
      boon: Boons.Splitting_Bolt,
      requirements: [
        { number: 1, boons: [Boons.Storm_Lightning, Boons.High_Voltage, Boons.Double_Strike] },
      ],
    },
    {
      boon: Boons.Static_Discharge,
      requirements: [
        { number: 1, boons: [Boons.Thunder_Flourish, Boons.Zeus_Aid, Boons.Thunder_Dash, Boons.Heavens_Vengeance, Boons.Lightning_Strike, Boons.Electric_Shot, Boons.Lightning_Reflexes] },
      ],
    },
    {
      boon: Boons.Storm_Lightning,
      requirements: [
        { number: 1, boons: [Boons.Lightning_Strike, Boons.Electric_Shot] },
      ],
    },
    {
      boon: Boons.Vengeful_Mood,
      requirements: [
        { number: 1, boons: [Boons.Lightning_Strike, Boons.Thunder_Dash, Boons.Thunder_Flourish, Boons.Electric_Shot, Boons.Zeus_Aid] },
        { number: 1, boons: [Boons.Curse_of_Agony, Boons.Curse_of_Pain, Boons.Slicing_Shot, Boons.Blade_Dash, Boons.Ares_Aid] },
        { number: 1, boons: [Boons.Curse_of_Vengeance, Boons.Heavens_Vengeance, Boons.Holy_Shield, Boons.Wave_of_Despair, Boons.Frozen_Touch] },
      ],
    },
    {
      boon: Boons.Vicious_Cycle,
      requirements: [
        { number: 1, boons: [Boons.Black_Metal, Boons.Engulfing_Vortex] },
      ],
    },
];

export {
  boonRequirements,
};
